/**
 * @fileoverview Optimize SVG'leri React TSX bileşenlerine ve barrel dosyalarına dönüştürür.
 * @remarks Orijinal fill/stroke/gradient renkleri korunur. `color` prop'u isteğe bağlı tek renk baskısı içindir.
 */
import path from 'node:path';
import fs from 'fs-extra';
import { transform } from '@svgr/core';
import {
  ANATOLIA_ICONS_ATTR,
  ANATOLIA_ICONS_URL,
  attachComponentNames,
  getRootDir,
  loadBrands,
  matchesIconFilter,
  readIconFilter,
} from './utils.mjs';

const rootDir = getRootDir(import.meta.url);

/**
 * Üretilmiş dosyaların başına konan uyarı yorumu.
 */
const generatedBanner =
  '/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */';

/**
 * SVGR şablonu: IconProps ve named export üretir.
 * @param {object} variables SVGR şablon değişkenleri.
 * @param {{ tpl: Function }} context SVGR şablon yardımcısı.
 * @returns {unknown} Üretilmiş AST/template sonucu.
 * @remarks Babel tpl yalnızca AST interpolasyonu kabul eder; JSDoc sonradan eklenir.
 */
function iconTemplate(variables, { tpl }) {
  return tpl`
import * as React from 'react';
import type { IconProps } from '../../types';

export const ${variables.componentName} = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color, title, titleId, className, ...props }, ref) => (
    ${variables.jsx}
  )
);
`;
}

/**
 * Tek bir SVG dosyasını TSX bileşenine çevirir.
 * @param {string} svgCode Optimize SVG içeriği.
 * @param {string} componentName PascalCase + Icon soneki.
 * @returns {Promise<string>} TSX kaynak kodu.
 */
async function svgToComponent(svgCode, componentName) {
  const body = await transform(
    svgCode,
    {
      plugins: ['@svgr/plugin-jsx'],
      typescript: true,
      ref: true,
      titleProp: true,
      expandProps: 'end',
      svgo: false,
      template: iconTemplate,
      svgProps: {
        width: '{size}',
        height: '{size}',
        color: '{color}',
        className: '{className}',
        role: 'img',
        [ANATOLIA_ICONS_ATTR]: ANATOLIA_ICONS_URL,
      },
    },
    { componentName },
  );

  const withDocs = body.replace(
    /from '\.\.\/\.\.\/types';\s*/,
    `from '../../types';

/**
 * ${componentName} SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
`,
  );

  return `${generatedBanner}

${withDocs.trim()}

${componentName}.displayName = '${componentName}';
`;
}

/**
 * brands.json verisinden tipli `brands.ts` üretir.
 * @param {object[]} brands Kategori listesi.
 * @returns {string} TypeScript kaynağı.
 */
function renderBrandsModule(brands) {
  const json = JSON.stringify(brands, null, 2);
  return `${generatedBanner}

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
 * @remarks Next.js vitrin tab bar'ı bu dizi üzerinden filtrelenebilir.
 */
export const brands: BrandCategory[] = ${json};
`;
}

/**
 * Kategori barrel dosyasını üretir.
 * @param {{ id: string }[]} icons Kategori ikonları.
 * @returns {string} TypeScript kaynağı.
 */
function renderCategoryBarrel(icons) {
  const exports = icons
    .map((icon) => {
      const name = icon.componentName;
      return `export { ${name} } from './icons/${icon._category}/${name}';`;
    })
    .join('\n');

  return `${generatedBanner}
${exports}
`;
}

/**
 * Kök index dosyasını üretir.
 * @param {object[]} brands Kategori listesi.
 * @returns {string} TypeScript kaynağı.
 */
function renderIndex(brands) {
  const categoryExports = brands
    .map((category) => `export * from './${category.category}';`)
    .join('\n');

  return `${generatedBanner}
export type { IconProps } from './types';
export type { BrandCategory, BrandIcon } from './brands';
export { brands } from './brands';
${categoryExports}
`;
}

/**
 * React kaynaklarını üretir.
 * @returns {Promise<void>}
 */
async function buildReact() {
  const brands = attachComponentNames(await loadBrands(rootDir));
  const filter = readIconFilter();
  const iconsDir = path.join(rootDir, 'packages', 'react', 'src', 'icons');
  const isPartial = Boolean(filter.id || filter.category);

  if (!isPartial) {
    await fs.emptyDir(iconsDir);
  }

  let written = 0;

  for (const category of brands) {
    const categoryDir = path.join(iconsDir, category.category);
    await fs.ensureDir(categoryDir);

    for (const icon of category.icons) {
      if (!matchesIconFilter({ id: icon.id, category: category.category }, filter)) {
        continue;
      }

      const svgPath = path.join(
        rootDir,
        'packages',
        'svg',
        category.category,
        `${icon.id}.svg`,
      );

      if (!(await fs.pathExists(svgPath))) {
        console.warn(`Uyarı: ${category.category}/${icon.id}.svg yok; bileşen atlandı.`);
        continue;
      }

      const svgCode = await fs.readFile(svgPath, 'utf8');
      const componentName = icon.componentName;
      const tsx = await svgToComponent(svgCode, componentName);
      const outPath = path.join(categoryDir, `${componentName}.tsx`);
      await fs.writeFile(outPath, `${tsx.trimEnd()}\n`, 'utf8');
      written += 1;
      console.log(`react: ${category.category}/${componentName}.tsx`);
    }

    const barrelIcons = category.icons.map((icon) => ({
      ...icon,
      _category: category.category,
    }));
    const barrelPath = path.join(
      rootDir,
      'packages',
      'react',
      'src',
      `${category.category}.ts`,
    );
    await fs.writeFile(barrelPath, renderCategoryBarrel(barrelIcons), 'utf8');
  }

  const srcDir = path.join(rootDir, 'packages', 'react', 'src');
  await fs.writeFile(path.join(srcDir, 'brands.ts'), renderBrandsModule(brands), 'utf8');
  await fs.writeFile(path.join(srcDir, 'index.ts'), renderIndex(brands), 'utf8');

  if (written === 0) {
    throw new Error(
      isPartial
        ? `Filtreye uyan React bileşeni yazılamadı (id=${filter.id ?? '*'}, category=${filter.category ?? '*'}).`
        : 'Hiç React bileşeni yazılamadı.',
    );
  }

  console.log(`Tamamlandı: ${written} React bileşeni üretildi.`);
}

await buildReact();
