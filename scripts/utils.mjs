/**
 * @fileoverview Derleme betiklerinin ortak yardımcıları.
 * @remarks Kök dizin `import.meta.url` ile hesaplanır; geliştirici makinesine ait mutlak yol hardcoded değildir.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs-extra';

/**
 * Tek bir marka ikonunun metadata kaydı.
 * @typedef {object} BrandIcon
 * @property {string} id Dosya adı ve bileşen kimliği (kebab-case).
 * @property {string} title Okunabilir ad.
 * @property {string} hexColor Marka rengi.
 * @property {string} website Resmi web sitesi.
 * @property {string} [componentName] Üretilmiş React bileşen adı.
 */

/**
 * Kategori başlığı ve ikon listesi.
 * @typedef {object} BrandCategory
 * @property {string} category Klasör ve export slug'ı.
 * @property {string} categoryTitle Vitrin sekmesi başlığı.
 * @property {BrandIcon[]} icons Kategoriye ait ikonlar.
 */

/**
 * Düzleştirilmiş ikon kaydı (kategori bilgisi eklenmiş).
 * @typedef {BrandIcon & { category: string, categoryTitle: string }} FlatBrandIcon
 */

/**
 * Proje kaynak URL'si (npm vitrini ve dosya içi damga).
 * @remarks Optimize SVG ve React `data-anatolia-icons` değeri bu sabitten üretilir.
 */
export const ANATOLIA_ICONS_URL = 'https://github.com/fikretsefa/anatolia-icons';

/**
 * Dağıtılan SVG/React köküne yazılan kaynak attribute adı.
 */
export const ANATOLIA_ICONS_ATTR = 'data-anatolia-icons';

/**
 * Optimize SVG dosyasının başına konan XML yorum damgası.
 */
export const ANATOLIA_ICONS_COMMENT = `<!-- anatolia-icons | ${ANATOLIA_ICONS_URL} -->`;

/**
 * README önizleme ikonlarının kare kenar uzunluğu (piksel).
 * @remarks GitHub/Markdown `img height` özniteliğini SVG'de yok sayar; dosyanın kendi `width`/`height` değeri kullanılır.
 */
export const README_ICON_SIZE = 48;

/**
 * README ikon kataloğu ızgarasındaki sütun sayısı.
 * @remarks GitHub Markdown CSS grid desteklemez; eşit genişlikte HTML tablo hücreleri kullanılır.
 */
export const README_CATALOG_COLUMNS = 6;

/**
 * README içinde otomatik katalog gövdesinin başlangıç işaretçisi.
 */
export const README_CATALOG_START = '<!-- CATALOG:START -->';

/**
 * README içinde otomatik katalog gövdesinin bitiş işaretçisi.
 */
export const README_CATALOG_END = '<!-- CATALOG:END -->';

/**
 * SVG'yi sabit kare viewport'a sığdırır; orijinal `viewBox` korunur.
 * @param {string} svg Optimize SVG metni.
 * @param {number} [size=README_ICON_SIZE] Kenar uzunluğu.
 * @returns {string} `width`/`height` ve `preserveAspectRatio` basılmış SVG.
 * @remarks Dağıtılan `packages/svg` dosyalarına dokunulmaz; yalnızca README kopyası küçültülür.
 */
export function fitSvgToViewport(svg, size = README_ICON_SIZE) {
  const openTagMatch = svg.match(/<svg\b([^>]*)>/);
  if (!openTagMatch) {
    throw new Error('SVG kök etiketi bulunamadı.');
  }

  const attrs = openTagMatch[1]
    .replace(/\s+(width|height|preserveAspectRatio)="[^"]*"/gi, '')
    .trim();

  if (!/\bviewBox=/i.test(attrs)) {
    throw new Error('SVG viewBox özniteliği yok; viewport sığdırılamaz.');
  }

  return svg.replace(
    /<svg\b[^>]*>/,
    `<svg width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" ${attrs}>`,
  );
}

/**
 * SVGO çıktısına yorum ve `data-anatolia-icons` damgası basar.
 * @param {string} svg Optimize edilmiş SVG metni.
 * @returns {string} Damgalı SVG (sonunda ekstra boş satır yok).
 * @remarks Attribute ve yorum yoksa eklenir; tekrar çalıştırmada çift damga üretmez.
 */
export function stampOptimizedSvg(svg) {
  let out = svg.trim();

  if (!new RegExp(`${ANATOLIA_ICONS_ATTR}\\s*=`).test(out)) {
    out = out.replace(/<svg\b/, `<svg ${ANATOLIA_ICONS_ATTR}="${ANATOLIA_ICONS_URL}"`);
  }

  if (!out.includes(ANATOLIA_ICONS_COMMENT)) {
    out = `${ANATOLIA_ICONS_COMMENT}\n${out}`;
  }

  return out;
}

/**
 * Repo kök dizinini döndürür.
 * @param {string} metaUrl Çağıran betiğin `import.meta.url` değeri.
 * @returns {string} Mutlak kök dizin (çalışma anında hesaplanır).
 * @remarks `scripts/` altındaki dosyalar için bir üst dizin köktür.
 */
export function getRootDir(metaUrl) {
  return path.resolve(path.dirname(fileURLToPath(metaUrl)), '..');
}

/**
 * 0–9999 arası sayıyı ASCII Türkçe PascalCase söze çevirir.
 * @param {number} value Tam sayı.
 * @returns {string | null} Örn. `29` → `YirmiDokuz`; aralık dışıysa null.
 * @remarks Bileşen adları ASCII tutulur (`Uc`, `Dort`, `Bes`); sonda kalan rakamlar (`goz2`) dönüştürülmez.
 */
export function numberToTurkishPascal(value) {
  if (!Number.isInteger(value) || value < 0 || value > 9999) {
    return null;
  }

  if (value === 0) {
    return 'Sifir';
  }

  const ones = ['', 'Bir', 'Iki', 'Uc', 'Dort', 'Bes', 'Alti', 'Yedi', 'Sekiz', 'Dokuz'];
  const tens = ['', 'On', 'Yirmi', 'Otuz', 'Kirk', 'Elli', 'Altmis', 'Yetmis', 'Seksen', 'Doksan'];

  let remaining = value;
  let out = '';

  const thousands = Math.floor(remaining / 1000);
  remaining %= 1000;
  if (thousands === 1) {
    out += 'Bin';
  } else if (thousands > 1) {
    out += `${ones[thousands]}Bin`;
  }

  const hundreds = Math.floor(remaining / 100);
  remaining %= 100;
  if (hundreds === 1) {
    out += 'Yuz';
  } else if (hundreds > 1) {
    out += `${ones[hundreds]}Yuz`;
  }

  out += tens[Math.floor(remaining / 10)];
  out += ones[remaining % 10];
  return out;
}

/**
 * kebab-case veya rakamla başlayan kimliği PascalCase'e çevirir.
 * @param {string} id Örn. `gazi-uni`, `29mayis`, `goz2`.
 * @returns {string} Örn. `GaziUni`, `YirmiDokuzMayis`, `Goz2`.
 * @remarks Harf-rakam sınırları bölünür. Baştaki sayı Türkçe söze çevrilir ki tanımlayıcı rakamla başlamasın.
 */
export function toPascalCase(id) {
  return String(id)
    .replace(/([0-9]+)([a-zA-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])([0-9]+)/g, '$1-$2')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part, index) => {
      if (index === 0 && /^[0-9]+$/.test(part)) {
        const spoken = numberToTurkishPascal(Number(part));
        if (spoken) {
          return spoken;
        }
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
}

/**
 * Üretilmiş adın geçerli bir JS/TS tanımlayıcısı olup olmadığını kontrol eder.
 * @param {string} name Bileşen adı.
 * @returns {boolean} Harf veya `_` ile başlıyorsa true.
 */
function isValidIdentifier(name) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(name);
}

/**
 * İkon React bileşen adını üretir.
 * @param {string} id Marka kimliği.
 * @param {string} [category] Çakışma giderme için kategori slug'ı.
 * @returns {string} Örn. `AselsanIcon`, `YirmiDokuzMayisIcon`, `YildizMotifIcon`.
 * @remarks Baştaki sayı Türkçe söze çevrilir; hâlâ rakamla başlarsa `Icon` öneki konur.
 */
export function toIconName(id, category) {
  const pascal = toPascalCase(id);
  const stem = category ? `${pascal}${toPascalCase(category)}` : pascal;
  const name = /^[0-9]/.test(stem) ? `Icon${stem}` : `${stem}Icon`;

  if (!isValidIdentifier(name)) {
    throw new Error(`Geçersiz bileşen adı: "${name}" (id=${id}, category=${category ?? '-'})`);
  }

  return name;
}

/**
 * Katalogdaki her ikon için çakışmasız bileşen adı haritası üretir.
 * @param {BrandCategory[]} brands Kategorili katalog.
 * @returns {Map<string, string>} Anahtar `category/id`, değer React bileşen adı.
 * @remarks Aynı taban adı birden fazla kategoride varsa her iki tarafa da kategori soneki eklenir.
 */
export function buildIconNameMap(brands) {
  const flat = flattenIcons(brands);
  /** @type {Map<string, FlatBrandIcon[]>} */
  const byBaseName = new Map();

  for (const icon of flat) {
    const base = toIconName(icon.id);
    const list = byBaseName.get(base) ?? [];
    list.push(icon);
    byBaseName.set(base, list);
  }

  /** @type {Map<string, string>} */
  const nameMap = new Map();

  for (const icons of byBaseName.values()) {
    const disambiguate = icons.length > 1;
    for (const icon of icons) {
      const key = `${icon.category}/${icon.id}`;
      nameMap.set(key, disambiguate ? toIconName(icon.id, icon.category) : toIconName(icon.id));
    }
  }

  /** @type {Map<string, string>} */
  const used = new Map();
  for (const [key, name] of nameMap) {
    if (used.has(name)) {
      throw new Error(`Bileşen adı çakışması: ${name} (${used.get(name)} ve ${key})`);
    }
    used.set(name, key);
  }

  return nameMap;
}

/**
 * Katalog kayıtlarına üretilmiş `componentName` alanını ekler.
 * @param {BrandCategory[]} brands Ham katalog.
 * @returns {BrandCategory[]} Bileşen adları eklenmiş kopya.
 */
export function attachComponentNames(brands) {
  const nameMap = buildIconNameMap(brands);
  return brands.map((category) => ({
    ...category,
    icons: category.icons.map((icon) => ({
      ...icon,
      componentName: nameMap.get(`${category.category}/${icon.id}`),
    })),
  }));
}

/**
 * `brands.json` içeriğini okur.
 * @param {string} rootDir Repo kökü.
 * @returns {Promise<BrandCategory[]>} Kategori listesi.
 */
export async function loadBrands(rootDir) {
  const brandsPath = path.join(rootDir, 'scripts', 'data', 'brands.json');
  return fs.readJson(brandsPath);
}

/**
 * Kategorilerdeki ikonları düz listeye çevirir.
 * @param {BrandCategory[]} brands Kategorili katalog.
 * @returns {FlatBrandIcon[]} Kategori bilgisi eklenmiş ikonlar.
 */
export function flattenIcons(brands) {
  return brands.flatMap((category) =>
    category.icons.map((icon) => ({
      ...icon,
      category: category.category,
      categoryTitle: category.categoryTitle,
    })),
  );
}

/**
 * Ortam değişkenlerinden logo filtresini okur.
 * @returns {{ id: string | null, category: string | null }} `ANATOLIA_ICON_ID` ve `ANATOLIA_CATEGORY`.
 */
export function readIconFilter() {
  const id = process.env.ANATOLIA_ICON_ID?.trim() || null;
  const category = process.env.ANATOLIA_CATEGORY?.trim() || null;
  return { id, category };
}

/**
 * İkonun aktif filtreye uyup uymadığını kontrol eder.
 * @param {{ id: string, category: string }} icon Katalog kaydı.
 * @param {{ id: string | null, category: string | null }} filter Aktif filtre.
 * @returns {boolean} Filtre yoksa her zaman true.
 */
export function matchesIconFilter(icon, filter) {
  if (filter.category && icon.category !== filter.category) {
    return false;
  }
  if (filter.id && icon.id !== filter.id) {
    return false;
  }
  return true;
}
