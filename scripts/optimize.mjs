/**
 * @fileoverview Ham SVG dosyalarını SVGO ile temizleyip `packages/svg` altına yazar.
 * @remarks Kaynak yolu `raw-icons/<category>/<id>.svg`; çıktı `packages/svg/<category>/<id>.svg`.
 * SVGO öncesi gömülü SVG data URI açılır; SVGO raster `<image>` öğelerini siler.
 * Temizlikten sonra `path` / `circle` / `rect` / `polygon` (ve diğer vektör şekiller) kalmayan ikon
 * `raw-icons`, `brands.json` ve üretilen paketlerden silinir.
 * SVGO sonrası `stampOptimizedSvg` yorum ve `data-anatolia-icons` damgası basar.
 */
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { glob } from 'node:fs/promises';
import fs from 'fs-extra';
import { optimize } from 'svgo';
import svgoConfig, { hasVectorShapes, prepareIconSvg } from './svgo.config.mjs';
import {
  buildIconNameMap,
  flattenIcons,
  getRootDir,
  loadBrands,
  matchesIconFilter,
  readIconFilter,
  stampOptimizedSvg,
} from './utils.mjs';

const rootDir = getRootDir(import.meta.url);

/**
 * JSON metninde tırnakları atlayarak nesnenin bittiği konumu bulur.
 * @param {string} source Katalog metni.
 * @param {number} start Açılış `{` indeksi.
 * @returns {number} Kapanıştan sonraki indeks; bulunamazsa -1.
 * @remarks Değer içindeki `{` ve `}` karakterleri derinlik sayılmaz.
 */
function findJsonObjectEnd(source, start) {
  /** @type {number} İç içe nesne derinliği. */
  let depth = 0;
  /** @type {boolean} Çift tırnaklı JSON dizgisinin içindeysek true. */
  let inString = false;
  /** @type {boolean} Bir sonraki karakter kaçışlıysa true. */
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    /** @type {string} Şu anki karakter. */
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        return index + 1;
      }
    }
  }

  return -1;
}

/**
 * Katalog metninden bir ikon nesnesini siler; kalan girintiye dokunmaz.
 * @param {string} source `brands.json` veya `brands.ts` metni.
 * @param {string} id Silinecek ikon kimliği.
 * @returns {string} Nesnesi çıkarılmış metin.
 * @remarks `brands.json` girintisi dosya boyunca tek tip olmadığı için bütün dosya yeniden yazılmaz.
 */
function removeCatalogIconObject(source, id) {
  /** @type {string} Yalnızca bu kimliğin alanına uyan arama metni. */
  const marker = `"id": ${JSON.stringify(id)}`;
  /** @type {number} Kimlik alanının başlangıcı. */
  const idAt = source.indexOf(marker);

  if (idAt < 0) {
    throw new Error(`Katalogda id yok: ${id}`);
  }

  if (source.indexOf(marker, idAt + marker.length) >= 0) {
    throw new Error(`Katalogda id yineleniyor: ${id}`);
  }

  /** @type {number} İkon nesnesinin açılış süslü ayracı. */
  const start = source.lastIndexOf('{', idAt);
  /** @type {number} Nesne bittikten sonraki indeks. */
  const end = findJsonObjectEnd(source, start);

  if (start < 0 || end < 0) {
    throw new Error(`İkon nesnesi kapanmadı: ${id}`);
  }

  /** @type {number} Nesnenin başladığı satırın ilk karakteri. */
  const lineBreak = source.lastIndexOf('\n', start);
  /** @type {number} Satır başı; süslü ayraç satırdaysa kesim buradan yapılır. */
  let lineStart = lineBreak < 0 ? 0 : lineBreak + 1;

  if (!/^[ \t]*$/.test(source.slice(lineStart, start))) {
    lineStart = start;
  }

  /** @type {number} Nesneden sonraki virgül araması. */
  let cursor = end;
  while (cursor < source.length && /[ \t]/.test(source[cursor])) {
    cursor += 1;
  }

  if (source[cursor] === ',') {
    cursor += 1;
    if (source[cursor] === '\r') {
      cursor += 1;
    }
    if (source[cursor] === '\n') {
      cursor += 1;
    }
    return source.slice(0, lineStart) + source.slice(cursor);
  }

  /** @type {number} Önceki nesnenin virgülü; son elemanda budanır. */
  let commaAt = lineStart - 1;
  while (commaAt >= 0 && /\s/.test(source[commaAt])) {
    commaAt -= 1;
  }

  if (source[commaAt] !== ',') {
    return source.slice(0, lineStart) + source.slice(end);
  }

  /** @type {number} Nesneden sonraki satır sonu, kapanış köşeli ayracıyla birleşmesin diye korunur. */
  let tail = end;
  if (source[tail] === '\r') {
    tail += 1;
  }
  if (source[tail] === '\n') {
    tail += 1;
  }

  return source.slice(0, commaAt) + source.slice(tail);
}

/**
 * `brands.ts` içindeki katalog dizisini ayrıştırır.
 * @param {string} source React `brands.ts` metni.
 * @returns {object[]} Ayrıştırılmış kategori listesi.
 * @remarks Dosya bir TypeScript modülüdür; dizi `export const brands` satırından sonra başlar.
 */
function parseBrandsModule(source) {
  /** @type {string} Dizinin başladığı sabit ifade. */
  const marker = 'export const brands: BrandCategory[] = ';
  /** @type {number} İfadenin başlangıcı. */
  const start = source.indexOf(marker);

  if (start < 0) {
    throw new Error('brands.ts içinde katalog dizisi bulunamadı.');
  }

  return JSON.parse(source.slice(start + marker.length).replace(/;\s*$/, ''));
}

/**
 * Kategori barrel dosyasından düşen ikonun export satırını siler.
 * @param {string} root Repo kökü.
 * @param {{ category: string, componentName: string }} icon Düşen ikon.
 * @returns {Promise<void>}
 * @remarks Satır `build-react.mjs` şablonuyla aynıdır; LF ve CRLF kabul edilir.
 */
async function removeBarrelExport(root, icon) {
  /** @type {string} Kategori barrel yolu. */
  const barrelPath = path.join(root, 'packages', 'react', 'src', `${icon.category}.ts`);
  /** @type {string} Mevcut barrel kaynağı. */
  const before = await fs.readFile(barrelPath, 'utf8');
  /** @type {RegExp} Tek export satırı. */
  const linePattern = new RegExp(
    `^export \\{ ${icon.componentName} \\} from '\\./icons/${icon.category}/${icon.componentName}';\\r?\\n`,
    'm',
  );

  if (!linePattern.test(before)) {
    throw new Error(`Barrel satırı yok: ${icon.category}/${icon.componentName}`);
  }

  await fs.writeFile(barrelPath, before.replace(linePattern, ''), 'utf8');
}

/**
 * Düşen ikonun kaynak ve üretilmiş kopyalarını siler.
 * @param {string} root Repo kökü.
 * @param {{ category: string, id: string, componentName: string }} icon Düşen ikon.
 * @returns {Promise<void>}
 * @remarks `packages/svg`, README önizlemesi ve React TSX birlikte kalkar; dist klasörü gitignore altındadır.
 */
async function removeIconFiles(root, icon) {
  /** @type {string[]} Silinecek dosya yolları. */
  const targets = [
    path.join(root, 'raw-icons', icon.category, `${icon.id}.svg`),
    path.join(root, 'packages', 'svg', icon.category, `${icon.id}.svg`),
    path.join(root, 'docs', 'readme', icon.category, `${icon.id}.svg`),
    path.join(root, 'packages', 'react', 'src', 'icons', icon.category, `${icon.componentName}.tsx`),
  ];

  await Promise.all(targets.map((target) => fs.remove(target)));
}

/**
 * Vektörü kalmayan ikonları katalogdan ve üretilen dosyalardan çıkarır.
 * @param {string} root Repo kökü.
 * @param {{ category: string, id: string, componentName: string }[]} icons Düşecek ikonlar.
 * @returns {Promise<void>}
 * @remarks Bileşen adları değişirse durur; kalan ikonların TSX dosya adları aynı kalmalıdır.
 * Yazmadan önce JSON ayrıştırması yapılır.
 */
export async function forgetVectorlessIcons(root, icons) {
  if (icons.length === 0) {
    return;
  }

  /** @type {string} Ham katalog yolu. */
  const brandsPath = path.join(root, 'scripts', 'data', 'brands.json');
  /** @type {string} Üretilmiş React katalog yolu. */
  const brandsTsPath = path.join(root, 'packages', 'react', 'src', 'brands.ts');
  /** @type {string} Düzenlenmeden önceki brands.json. */
  const originalJson = await fs.readFile(brandsPath, 'utf8');
  /** @type {string} Düzenlenmeden önceki brands.ts. */
  let brandsTs = await fs.readFile(brandsTsPath, 'utf8');
  /** @type {Map<string, string>} Düşürmeden önceki bileşen adları. */
  const namesBefore = buildIconNameMap(JSON.parse(originalJson));
  /** @type {string} İkon nesneleri silinmiş brands.json metni. */
  let brandsJson = originalJson;

  for (const icon of icons) {
    brandsJson = removeCatalogIconObject(brandsJson, icon.id);
    brandsTs = removeCatalogIconObject(brandsTs, icon.id);
  }

  /** @type {object[]} Doğrulanan kategori listesi. */
  const nextBrands = JSON.parse(brandsJson);
  parseBrandsModule(brandsTs);

  for (const category of nextBrands) {
    if (!Array.isArray(category.icons) || category.icons.length === 0) {
      throw new Error(`Kategori boş kaldı: ${category.category}`);
    }
  }

  /** @type {Map<string, string>} Düşürmeden sonraki bileşen adları. */
  const namesAfter = buildIconNameMap(nextBrands);

  for (const [key, name] of namesAfter) {
    if (namesBefore.get(key) !== name) {
      throw new Error(`Bileşen adı değişti: ${key} (${namesBefore.get(key)} -> ${name})`);
    }
  }

  for (const icon of icons) {
    /** @type {string} Kategori barrel yolu. */
    const barrelPath = path.join(root, 'packages', 'react', 'src', `${icon.category}.ts`);
    /** @type {string} Mevcut barrel kaynağı. */
    const barrel = await fs.readFile(barrelPath, 'utf8');
    /** @type {RegExp} Silinecek export satırı. */
    const linePattern = new RegExp(
      `^export \\{ ${icon.componentName} \\} from '\\./icons/${icon.category}/${icon.componentName}';\\r?\\n`,
      'm',
    );

    if (!linePattern.test(barrel)) {
      throw new Error(`Barrel satırı yok: ${icon.category}/${icon.componentName}`);
    }
  }

  await fs.writeFile(brandsPath, brandsJson, 'utf8');
  await fs.writeFile(brandsTsPath, brandsTs, 'utf8');

  for (const icon of icons) {
    await removeBarrelExport(root, icon);
    await removeIconFiles(root, icon);
    console.log(`düşürüldü: ${icon.category}/${icon.id}.svg`);
  }
}

/**
 * Bu betiğin doğrudan çalıştırılıp çalıştırılmadığını söyler.
 * @param {string} metaUrl `import.meta.url`.
 * @returns {boolean} `node scripts/optimize.mjs` ise true.
 * @remarks Başka bir modül bu dosyayı içe aktarınca optimize kendiliğinden başlamaz.
 */
function isDirectRun(metaUrl) {
  /** @type {string | undefined} Node giriş dosyası. */
  const entry = process.argv[1];
  if (!entry) {
    return false;
  }

  return pathToFileURL(path.resolve(entry)).href === metaUrl;
}

/**
 * Optimize işlemini çalıştırır.
 * @returns {Promise<void>}
 */
async function optimizeIcons() {
  const brands = await loadBrands(rootDir);
  const filter = readIconFilter();
  const knownIcons = flattenIcons(brands);
  /** @type {Map<string, string>} `category/id` → React bileşen adı. */
  const nameMap = buildIconNameMap(brands);
  /** @type {Set<string>} */
  const knownKeys = new Set(knownIcons.map((icon) => `${icon.category}/${icon.id}`));
  /** @type {{ category: string, id: string, componentName: string }[]} Vektörü kalmayan ikonlar. */
  const dropped = [];

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

    if (!hasVectorShapes(result.data)) {
      /** @type {string | undefined} Düşen ikonun React bileşen adı. */
      const componentName = nameMap.get(key);
      if (!componentName) {
        throw new Error(`Bileşen adı yok: ${key}`);
      }

      dropped.push({ category, id, componentName });
      continue;
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

  if (dropped.length > 0) {
    await forgetVectorlessIcons(rootDir, dropped);
  }

  if (written === 0 && dropped.length === 0) {
    throw new Error(
      filter.id || filter.category
        ? `Filtreye uyan SVG yazılamadı (id=${filter.id ?? '*'}, category=${filter.category ?? '*'}).`
        : 'Hiç SVG yazılamadı.',
    );
  }

  console.log(`Tamamlandı: ${written} SVG yazıldı, ${dropped.length} ikon düşürüldü.`);
}

if (isDirectRun(import.meta.url)) {
  await optimizeIcons();
}
