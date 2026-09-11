/**
 * @fileoverview brands.json kataloğunu README ikon ızgarasına basar.
 * @remarks GitHub CSS grid desteklemediği için kategori başlıkları altında HTML tablo ızgarası üretilir.
 * Elle düzenlenen `## İkon kataloğu` gövdesi `CATALOG` işaretçileri arasında her derlemede yenilenir.
 */
import path from 'node:path';
import fs from 'fs-extra';
import {
  README_CATALOG_COLUMNS,
  README_CATALOG_END,
  README_CATALOG_START,
  README_ICON_SIZE,
  attachComponentNames,
  flattenIcons,
  getRootDir,
  loadBrands,
} from './utils.mjs';

const rootDir = getRootDir(import.meta.url);

/**
 * README ikon sayısı cümlesini yakalayan ifade.
 * @remarks Üst özet satırı elle tutulmasın diye `brands.json` toplamına göre güncellenir.
 */
const COUNT_PATTERN = /\d+ ikon · \d+ kategori/;

/**
 * HTML öznitelik ve metin içeriği için özel karakterleri kaçırır.
 * @param {string} value Ham metin.
 * @returns {string} Güvenli HTML.
 */
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/**
 * Diziyi sabit uzunlukta satırlara böler.
 * @template T
 * @param {T[]} items Kaynak dizi.
 * @param {number} size Satır uzunluğu.
 * @returns {T[][]} Satırlar.
 */
function chunk(items, size) {
  const rows = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
}

/**
 * Tek ikon hücresinin HTML'ini üretir.
 * @param {{ category: string, id: string, title: string, componentName: string }} icon Katalog kaydı.
 * @returns {string} `td` işaretlemesi.
 */
function renderIconCell(icon) {
  const src = `docs/readme/${icon.category}/${icon.id}.svg`;
  const title = escapeHtml(icon.title);
  const component = escapeHtml(icon.componentName);
  const width = `${(100 / README_CATALOG_COLUMNS).toFixed(2)}%`;

  return `<td align="center" valign="top" width="${width}">
<img src="${src}" width="${README_ICON_SIZE}" height="${README_ICON_SIZE}" alt="${title}" /><br/>
<sub><b>${title}</b></sub><br/>
<sub><code>${component}</code></sub>
</td>`;
}

/**
 * Boş hizalama hücresi üretir.
 * @returns {string} Boş `td` işaretlemesi.
 */
function renderEmptyCell() {
  const width = `${(100 / README_CATALOG_COLUMNS).toFixed(2)}%`;
  return `<td width="${width}"></td>`;
}

/**
 * Bir kategorinin ızgara tablosunu üretir.
 * @param {{ category: string, categoryTitle: string, icons: object[] }} category Kategori kaydı.
 * @returns {string} Markdown + HTML bloğu.
 */
function renderCategoryGrid(category) {
  const rows = chunk(category.icons, README_CATALOG_COLUMNS).map((row) => {
    const cells = row.map((icon) => renderIconCell(icon));
    while (cells.length < README_CATALOG_COLUMNS) {
      cells.push(renderEmptyCell());
    }
    return `<tr>
${cells.join('\n')}
</tr>`;
  });

  return `### ${category.categoryTitle}

<table>
${rows.join('\n')}
</table>`;
}

/**
 * İşaretçiler arasındaki README bölümünü değiştirir.
 * @param {string} source README içeriği.
 * @param {string} inner Yeni gövde.
 * @returns {string} Güncellenmiş README.
 */
function replaceCatalogSection(source, inner) {
  const startIndex = source.indexOf(README_CATALOG_START);
  const endIndex = source.indexOf(README_CATALOG_END);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(
      `README işaretçileri eksik: ${README_CATALOG_START} … ${README_CATALOG_END}`,
    );
  }

  return `${source.slice(0, startIndex + README_CATALOG_START.length)}\n${inner.trimEnd()}\n${source.slice(endIndex)}`;
}

/**
 * Önizleme SVG'si olan ikonları kategorilere göre ızgara markdown'ına çevirir.
 * @param {object[]} brands Bileşen adları eklenmiş katalog.
 * @returns {Promise<{ markdown: string, iconCount: number, categoryCount: number, skipped: number }>} Üretilen gövde ve sayılar.
 */
async function buildCatalogMarkdown(brands) {
  /** @type {{ category: string, categoryTitle: string, icons: object[] }[]} */
  const visibleCategories = [];
  let skipped = 0;

  for (const category of brands) {
    const visibleIcons = [];

    for (const icon of category.icons) {
      const previewPath = path.join(
        rootDir,
        'docs',
        'readme',
        category.category,
        `${icon.id}.svg`,
      );

      if (!(await fs.pathExists(previewPath))) {
        skipped += 1;
        console.warn(
          `Uyarı: README önizlemesi yok, katalogdan atlandı: ${category.category}/${icon.id}`,
        );
        continue;
      }

      visibleIcons.push({
        ...icon,
        category: category.category,
        categoryTitle: category.categoryTitle,
      });
    }

    if (visibleIcons.length === 0) {
      continue;
    }

    visibleCategories.push({
      category: category.category,
      categoryTitle: category.categoryTitle,
      icons: visibleIcons,
    });
  }

  const markdown = visibleCategories.map((category) => renderCategoryGrid(category)).join('\n\n');
  const iconCount = visibleCategories.reduce((sum, category) => sum + category.icons.length, 0);

  return {
    markdown,
    iconCount,
    categoryCount: visibleCategories.length,
    skipped,
  };
}

/**
 * README katalog ızgarasını ve ikon sayısı özetini günceller.
 * @returns {Promise<void>}
 */
async function buildReadmeCatalog() {
  const brands = attachComponentNames(await loadBrands(rootDir));
  const catalog = await buildCatalogMarkdown(brands);
  const readmePath = path.join(rootDir, 'README.md');
  let readme = await fs.readFile(readmePath, 'utf8');

  if (catalog.iconCount === 0) {
    throw new Error(
      'README kataloğuna basılacak ikon yok; önce optimize / README önizleme çalıştırın.',
    );
  }

  if (!COUNT_PATTERN.test(readme)) {
    throw new Error('README içinde "N ikon · M kategori" özeti bulunamadı.');
  }

  readme = readme.replace(COUNT_PATTERN, `${catalog.iconCount} ikon · ${catalog.categoryCount} kategori`);
  readme = replaceCatalogSection(readme, catalog.markdown);

  await fs.writeFile(readmePath, readme.endsWith('\n') ? readme : `${readme}\n`, 'utf8');

  const knownCount = flattenIcons(brands).length;
  console.log(
    `Tamamlandı: README kataloğu ${catalog.iconCount}/${knownCount} ikon, ${catalog.categoryCount} kategori (${catalog.skipped} atlandı).`,
  );
}

await buildReadmeCatalog();
