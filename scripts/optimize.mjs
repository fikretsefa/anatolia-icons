/**
 * @fileoverview Ham SVG dosyalarını SVGO ile temizleyip `packages/svg` altına yazar.
 * @remarks Kaynak yolu `raw-icons/<category>/<id>.svg`; çıktı `packages/svg/<category>/<id>.svg`.
 * SVGO öncesi gömülü SVG data URI açılır; SVGO raster `<image>` öğelerini siler.
 * SVGO sonrası `stampOptimizedSvg` yorum ve `data-anatolia-icons` damgası basar.
 */
import path from 'node:path';
import { glob } from 'node:fs/promises';
import fs from 'fs-extra';
import { optimize } from 'svgo';
import svgoConfig, { prepareIconSvg } from './svgo.config.mjs';
import {
  flattenIcons,
  getRootDir,
  loadBrands,
  matchesIconFilter,
  readIconFilter,
  stampOptimizedSvg,
} from './utils.mjs';

const rootDir = getRootDir(import.meta.url);

/**
 * Optimize işlemini çalıştırır.
 * @returns {Promise<void>}
 */
async function optimizeIcons() {
  const brands = await loadBrands(rootDir);
  const filter = readIconFilter();
  const knownIcons = flattenIcons(brands);
  /** @type {Set<string>} */
  const knownKeys = new Set(knownIcons.map((icon) => `${icon.category}/${icon.id}`));

  const pattern = path.join(rootDir, 'raw-icons', '*', '*.svg').replaceAll('\\', '/');
  const matches = await Array.fromAsync(glob(pattern));
  const files = matches.map((file) => path.relative(rootDir, file).replaceAll('\\', '/'));

  if (files.length === 0) {
    console.warn('Uyarı: raw-icons altında SVG bulunamadı.');
    return;
  }

  let written = 0;

  for (const relativeFile of files) {
    const category = path.basename(path.dirname(relativeFile));
    const id = path.basename(relativeFile, '.svg');
    const key = `${category}/${id}`;

    if (!knownKeys.has(key)) {
      console.warn(`Uyarı: ${relativeFile} brands.json içinde yok; atlandı.`);
      continue;
    }

    if (!matchesIconFilter({ id, category }, filter)) {
      continue;
    }

    const sourcePath = path.join(rootDir, relativeFile);
    /** @type {string} Ham SVG; gömülü `data:image/svg+xml` varsa iç belgeye açılır. */
    let svgSource = await fs.readFile(sourcePath, 'utf8');
    try {
      svgSource = prepareIconSvg(svgSource);
    } catch (error) {
      /** @type {string} Açma hatasının okunur metni. */
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Gömülü SVG açılamadı (${relativeFile}): ${message}`);
    }

    const result = optimize(svgSource, {
      path: sourcePath,
      multipass: svgoConfig.multipass,
      plugins: [
        ...svgoConfig.plugins,
        {
          name: 'prefixIds',
          params: {
            prefix: `${id}`,
            delim: '__',
          },
        },
      ],
    });

    if ('error' in result && result.error) {
      throw new Error(`SVGO hatası (${relativeFile}): ${result.error}`);
    }

    const outputPath = path.join(rootDir, 'packages', 'svg', category, `${id}.svg`);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, `${stampOptimizedSvg(result.data)}\n`, 'utf8');
    written += 1;
    console.log(`optimize: ${category}/${id}.svg`);
  }

  const scopedIcons = knownIcons.filter((icon) => matchesIconFilter(icon, filter));
  const missing = scopedIcons.filter((icon) => {
    return !files.some((file) => {
      const fileCategory = path.basename(path.dirname(file));
      const fileId = path.basename(file, '.svg');
      return fileCategory === icon.category && fileId === icon.id;
    });
  });

  for (const icon of missing) {
    console.warn(`Uyarı: brands.json kaydı için SVG yok: raw-icons/${icon.category}/${icon.id}.svg`);
  }

  if (written === 0) {
    throw new Error(
      filter.id || filter.category
        ? `Filtreye uyan SVG yazılamadı (id=${filter.id ?? '*'}, category=${filter.category ?? '*'}).`
        : 'Hiç SVG yazılamadı.',
    );
  }

  console.log(`Tamamlandı: ${written} SVG yazıldı.`);
}

await optimizeIcons();
