/**
 * @fileoverview Optimize SVG'leri README için kare viewport'a sığdırır.
 * @remarks Çıktı `docs/readme/<category>/<id>.svg`. GitHub viewBox piksel boyutunu intrinsik ölçü kabul ettiği için `width`/`height` dosyaya basılır.
 */
import path from 'node:path';
import { glob } from 'node:fs/promises';
import fs from 'fs-extra';
import {
  README_ICON_SIZE,
  fitSvgToViewport,
  flattenIcons,
  getRootDir,
  loadBrands,
  matchesIconFilter,
  readIconFilter,
} from './utils.mjs';

const rootDir = getRootDir(import.meta.url);

/**
 * README önizleme SVG'lerini üretir.
 * @returns {Promise<void>}
 */
async function buildReadmePreviews() {
  const brands = await loadBrands(rootDir);
  const filter = readIconFilter();
  const knownIcons = flattenIcons(brands);

  const pattern = path.join(rootDir, 'packages', 'svg', '*', '*.svg').replaceAll('\\', '/');
  const matches = await Array.fromAsync(glob(pattern));
  const files = matches.map((file) => path.relative(rootDir, file).replaceAll('\\', '/'));

  if (files.length === 0) {
    throw new Error('Uyarı: packages/svg altında SVG bulunamadı; önce optimize çalıştırın.');
  }

  let written = 0;

  for (const relativeFile of files) {
    const category = path.basename(path.dirname(relativeFile));
    const id = path.basename(relativeFile, '.svg');

    if (!matchesIconFilter({ id, category }, filter)) {
      continue;
    }

    const sourcePath = path.join(rootDir, relativeFile);
    const svgSource = await fs.readFile(sourcePath, 'utf8');
    const fitted = fitSvgToViewport(svgSource, README_ICON_SIZE);
    const outputPath = path.join(rootDir, 'docs', 'readme', category, `${id}.svg`);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, `${fitted.trim()}\n`, 'utf8');
    written += 1;
    console.log(`readme-preview: ${category}/${id}.svg (${README_ICON_SIZE}×${README_ICON_SIZE})`);
  }

  const scopedIcons = knownIcons.filter((icon) => matchesIconFilter(icon, filter));
  if (written === 0) {
    throw new Error(
      filter.id || filter.category
        ? `Filtreye uyan README önizlemesi yazılamadı (id=${filter.id ?? '*'}, category=${filter.category ?? '*'}).`
        : 'Hiç README önizlemesi yazılamadı.',
    );
  }

  console.log(`Tamamlandı: ${written}/${scopedIcons.length} README önizlemesi yazıldı.`);
}

await buildReadmePreviews();
