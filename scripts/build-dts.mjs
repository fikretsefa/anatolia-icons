/**
 * @fileoverview `@anatolia-icons/react` için hafif `.d.ts` bildirim dosyaları üretir.
 * @remarks tsup `dts` büyük SVG TSX dosyalarında pratik değildir; tipler `brands.json` üzerinden yazılır.
 */
import path from 'node:path';
import fs from 'fs-extra';
import { attachComponentNames, getRootDir, loadBrands } from './utils.mjs';

const rootDir = getRootDir(import.meta.url);
const distDir = path.join(rootDir, 'packages', 'react', 'dist');

/**
 * Üretilmiş bildirim dosyasının başına konan uyarı yorumu.
 */
const banner =
  '/* Bu dosya otomatik üretilir (scripts/build-dts.mjs). Elle düzenlemeyin. */';

/**
 * Ortak `IconProps` ve `AnatoliaIcon` tiplerini döndürür.
 * @returns {string} `types.d.ts` içeriği.
 */
function renderTypesDts() {
  return `${banner}
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

/**
 * Tüm Anatolia ikon bileşenlerinin ortak props arayüzü.
 * @remarks \`size\` ve \`color\` kısayolları SVG \`width\`/\`height\`/\`fill\` değerlerini yönetir; kalan özellikler doğrudan \`<svg>\` elemanına aktarılır.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * İkonun genişlik ve yüksekliği (piksel veya CSS birimi).
   */
  size?: number | string;
  /**
   * İkon rengi. Verilmezse SVG'deki orijinal marka renkleri kullanılır.
   */
  color?: string;
  /**
   * Erişilebilirlik için SVG \`<title>\` metni.
   */
  title?: string;
  /**
   * \`<title>\` öğesine bağlanan \`aria-labelledby\` kimliği.
   */
  titleId?: string;
  /**
   * SVG köküne uygulanacak CSS sınıfı (Tailwind ile kullanım için).
   */
  className?: string;
}

/**
 * Tüm ikon bileşenlerinin ortak bileşen tipi.
 */
export type AnatoliaIcon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
`;
}

/**
 * `brands` metadata tiplerini döndürür.
 * @returns {string} `brands.d.ts` içeriği.
 */
function renderBrandsDts() {
  return `${banner}

/**
 * Tek bir marka ikonunun vitrin / katkı metadata kaydı.
 */
export interface BrandIcon {
  /**
   * Dosya adı ve bileşen kimliği (kebab-case).
   */
  id: string;
  /**
   * Okunabilir ad.
   */
  title: string;
  /**
   * Markanın temsil rengi.
   */
  hexColor: string;
  /**
   * Resmi web sitesi.
   */
  website: string;
  /**
   * Üretilmiş React bileşen adı (çakışmasız, geçerli tanımlayıcı).
   */
  componentName: string;
}

/**
 * Kategori başlığı ve o kategoriye ait ikonlar.
 */
export interface BrandCategory {
  /**
   * Klasör ve export slug'ı.
   */
  category: string;
  /**
   * Vitrin sekmesi başlığı.
   */
  categoryTitle: string;
  /**
   * Kategoriye ait ikon metadata listesi.
   */
  icons: BrandIcon[];
}

/**
 * Tüm kategoriler ve ikonlar.
 */
export declare const brands: BrandCategory[];
`;
}

/**
 * Kategori barrel bildirimi üretir.
 * @param {{ componentName: string }[]} icons Kategori ikonları.
 * @returns {string} Kategori `.d.ts` içeriği.
 */
function renderCategoryDts(icons) {
  const declarations = icons
    .map((icon) => `export declare const ${icon.componentName}: AnatoliaIcon;`)
    .join('\n');

  return `${banner}
import type { AnatoliaIcon } from './types';

${declarations}
`;
}

/**
 * Kök `index.d.ts` bildirimini üretir.
 * @param {object[]} brands Kategori listesi.
 * @returns {string} `index.d.ts` içeriği.
 */
function renderIndexDts(brands) {
  const categoryExports = brands
    .map((category) => `export * from './${category.category}';`)
    .join('\n');

  return `${banner}
export type { AnatoliaIcon, IconProps } from './types';
export type { BrandCategory, BrandIcon } from './brands';
export { brands } from './brands';
${categoryExports}
`;
}

/**
 * `dist` altına bildirim dosyalarını yazar.
 * @returns {Promise<void>}
 */
async function buildDts() {
  const brands = attachComponentNames(await loadBrands(rootDir));
  await fs.ensureDir(distDir);

  await fs.writeFile(path.join(distDir, 'types.d.ts'), renderTypesDts(), 'utf8');
  await fs.writeFile(path.join(distDir, 'brands.d.ts'), renderBrandsDts(), 'utf8');
  await fs.writeFile(path.join(distDir, 'index.d.ts'), renderIndexDts(brands), 'utf8');

  for (const category of brands) {
    await fs.writeFile(
      path.join(distDir, `${category.category}.d.ts`),
      renderCategoryDts(category.icons),
      'utf8',
    );
  }

  console.log(`Tamamlandı: ${brands.length} kategori için .d.ts yazıldı (${distDir}).`);
}

await buildDts();
