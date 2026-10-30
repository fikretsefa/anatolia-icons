/**
 * @fileoverview SVGO yapılandırması ve gömülü görsel temizliği.
 * @remarks Marka renkleri ve `url(#id)` ile bağlanan gradient/clipPath korunur; global id silme yapılmaz.
 * Raster `<image>` öğeleri (base64 PNG/WebP, geçersiz `data:img/png`, harici `.png`) silinir.
 * `data:image/svg+xml` sarmalayıcısı çözülür ve iç SVG belge olarak kullanılır.
 */

/**
 * Inline CSS bildirim listesinden istenmeyen özelliği çıkarır.
 * @param {string} style Ham `style` özniteliği.
 * @param {RegExp} propertyPattern Özellik adını yakalayan ifade.
 * @returns {string} Temizlenmiş style metni.
 */
function stripCssProperty(style, propertyPattern) {
  return style
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part && !propertyPattern.test(part))
    .join('; ');
}

/**
 * React TypeScript'in kabul etmediği SVG sunum özelliklerini temizler.
 * @remarks CorelDRAW `image-rendering:optimizeQuality` değerini hem XML özniteliğinden
 * hem inline `style` içinden siler; vektör ikonlarda bu özellik gereksizdir.
 * @returns {object} SVGO eklenti tanımı.
 */
function removeReactIncompatibleAttrs() {
  /** @type {RegExp} Inline style içindeki `image-rendering` bildirimi. */
  const imageRenderingDeclaration = /^image-rendering\s*:/i;

  return {
    name: 'removeReactIncompatibleAttrs',
    description: 'React DTS ile uyumsuz image-rendering değerlerini kaldırır.',
    fn: () => ({
      element: {
        /**
         * SVG elemanından uyumsuz sunum özelliklerini siler.
         * @param {{ attributes?: Record<string, string> }} node SVGO eleman düğümü.
         * @returns {void}
         */
        enter(node) {
          if (!node.attributes) {
            return;
          }

          delete node.attributes['image-rendering'];

          if (typeof node.attributes.style === 'string') {
            const cleaned = stripCssProperty(node.attributes.style, imageRenderingDeclaration);
            if (cleaned) {
              node.attributes.style = cleaned;
            } else {
              delete node.attributes.style;
            }
          }
        },
      },
    }),
  };
}

/**
 * İç içe gömülü SVG açma sınırı.
 * @remarks Bozuk veya kendini tekrarlayan data URI'lerin sonsuza kadar açılmasını engeller.
 */
const MAX_EMBEDDED_SVG_DEPTH = 5;

/**
 * SVG etiketindeki bir özniteliğin değerini okur.
 * @param {string} attrs Etiket adı ile `>` arasındaki ham metin.
 * @param {string} name Öznitelik adı (`href`, `xlink:href`, `id`).
 * @returns {string | null} Tırnak içindeki değer; yoksa null.
 * @remarks Değer içindeki satır sonları korunur. `href` araması `xlink:href` ile çakışmaz.
 */
function readXmlAttribute(attrs, name) {
  const pattern = new RegExp(
    String.raw`(?:^|[\s/])${name}\s*=\s*(?:"([^"]*)"|'([^']*)')`,
    'i',
  );
  const match = pattern.exec(attrs);
  if (!match) {
    return null;
  }

  return match[1] ?? match[2] ?? null;
}

/**
 * `<image>` veya `<use>` üzerindeki başvuru adresini okur.
 * @param {string} attrs Etiket öznitelik metni.
 * @returns {string | null} `href` veya `xlink:href` değeri.
 * @remarks SVG 2 `href` önceliklidir; eski dosyalar `xlink:href` taşır.
 */
function readReferenceHref(attrs) {
  return readXmlAttribute(attrs, 'href') ?? readXmlAttribute(attrs, 'xlink:href');
}

/**
 * Adresin gömülü SVG belgesi olup olmadığını söyler.
 * @param {string} href `href` değeri.
 * @returns {boolean} `data:image/svg+xml` ise true.
 * @remarks Base64 ve URL-kodlu biçimlerin ikisi de bu önekle başlar.
 */
function isEmbeddedSvgDataUri(href) {
  return /^\s*data:image\/svg\+xml\b/i.test(href);
}

/**
 * Belgedeki belirli bir etiketin aralıklarını bulur.
 * @param {string} svg SVG metni.
 * @param {string} tagName Örn. `image` veya `use`.
 * @returns {{ start: number, end: number, attrs: string }[]} Etiket aralıkları.
 * @remarks Tırnak içindeki `>` karakteri etiketi bitirmez; base64 dışında ham SVG data URI'leri de bölünmez.
 */
function findXmlTags(svg, tagName) {
  /** @type {string} Büyük/küçük harf duyarsız arama kopyası. */
  const haystack = svg.toLowerCase();
  /** @type {string} Aranan açılış öneki. */
  const needle = `<${tagName.toLowerCase()}`;
  /** @type {{ start: number, end: number, attrs: string }[]} */
  const tags = [];
  let index = 0;

  while (index < svg.length) {
    const start = haystack.indexOf(needle, index);
    if (start < 0) {
      break;
    }

    /** @type {string} Etiket adından hemen sonraki karakter; `image-rendering` gibi adları elemek için. */
    const boundary = svg[start + needle.length] ?? '';
    if (boundary && !/[\s/>]/.test(boundary)) {
      index = start + needle.length;
      continue;
    }

    let cursor = start + needle.length;
    /** @type {string | null} İçinde bulunulan tırnak; `>` bu sırada yok sayılır. */
    let quote = null;
    for (; cursor < svg.length; cursor += 1) {
      const character = svg[cursor];
      if (quote) {
        if (character === quote) {
          quote = null;
        }
        continue;
      }
      if (character === '"' || character === "'") {
        quote = character;
        continue;
      }
      if (character === '>') {
        break;
      }
    }

    if (cursor >= svg.length) {
      break;
    }

    let end = cursor + 1;
    /** @type {RegExpMatchArray | null} Ayrı kapanış etiketi, varsa aralığa katılır. */
    const closing = svg.slice(end).match(new RegExp(String.raw`^\s*</${tagName}>`, 'i'));
    if (closing) {
      end += closing[0].length;
    }

    tags.push({
      start,
      end,
      attrs: svg.slice(start + needle.length, cursor),
    });
    index = end;
  }

  return tags;
}

/**
 * Verilen aralıkları metinden siler.
 * @param {string} svg SVG metni.
 * @param {{ start: number, end: number }[]} ranges Silinecek aralıklar.
 * @returns {string} Aralıkları çıkarılmış metin.
 * @remarks Sondan başa silinir; önceki indeksler kaymaz.
 */
function removeTagRanges(svg, ranges) {
  /** @type {{ start: number, end: number }[]} Sondan başa sıralı aralıklar. */
  const ordered = [...ranges].sort((left, right) => right.start - left.start);
  let output = svg;
  for (const range of ordered) {
    output = output.slice(0, range.start) + output.slice(range.end);
  }
  return output;
}

/**
 * Gömülü SVG data URI'sini metne çözer.
 * @param {string} href `data:image/svg+xml` adresi.
 * @returns {string} Çözülmüş SVG metni.
 * @remarks Base64 yükündeki boşluk ve satır sonları yoksayılır; URL-kodlu yükteki boşluklar korunur.
 */
function decodeSvgDataUri(href) {
  /** @type {string} Baştaki boşluğu alınmış adres. */
  const compact = href.trim();
  /** @type {number} Metadata ile yükü ayıran virgül. */
  const comma = compact.indexOf(',');
  if (comma < 0) {
    throw new Error('Gömülü SVG data URI virgül içermiyor.');
  }

  /** @type {string} `data:` başlığı; içindeki boşluklar base64 satır kırığından gelebilir. */
  const meta = compact.slice(0, comma).replace(/\s+/g, '');
  /** @type {string} Virgülden sonraki SVG yükü. */
  let payload = compact.slice(comma + 1);
  if (!/^data:image\/svg\+xml\b/i.test(meta)) {
    throw new Error('Gömülü görsel SVG belgesi değil.');
  }

  /** @type {string} Çözülmüş SVG metni. */
  let decoded;
  if (/;base64/i.test(meta)) {
    payload = payload.replace(/\s+/g, '');
    decoded = Buffer.from(payload, 'base64').toString('utf8');
  } else {
    try {
      decoded = decodeURIComponent(payload.trim());
    } catch {
      throw new Error('Gömülü SVG URL kodu çözülemedi.');
    }
  }

  return decoded;
}

/**
 * Çözülmüş metinden kök SVG belgesini ayıklar.
 * @param {string} decoded `decodeSvgDataUri` çıktısı.
 * @returns {string} Kök `<svg>...</svg>` belgesi.
 * @remarks XML bildirimi ve doctype atılır; iç içe `<svg>` varsa en dış kök alınır.
 */
function extractSvgDocument(decoded) {
  /** @type {RegExpMatchArray | null} Kök SVG aralığı. */
  const match = decoded.match(/<svg\b[\s\S]*<\/svg>/i);
  if (!match) {
    throw new Error('Gömülü SVG belgesinde kök <svg> etiketi yok.');
  }
  return match[0];
}

/**
 * Gömülü SVG `<image>` etiketlerini listeler.
 * @param {string} svg SVG metni.
 * @returns {{ start: number, end: number, attrs: string, href: string, id: string | null }[]} Yalnızca `data:image/svg+xml` görselleri.
 * @remarks PNG, WebP ve harici dosya başvuruları bu listede yoktur; onları SVGO eklentisi siler.
 */
function findEmbeddedSvgImages(svg) {
  return findXmlTags(svg, 'image')
    .map((tag) => {
      /** @type {string | null} Görselin data URI adresi. */
      const href = readReferenceHref(tag.attrs);
      return {
        ...tag,
        href: href ?? '',
        id: readXmlAttribute(tag.attrs, 'id'),
      };
    })
    .filter((tag) => isEmbeddedSvgDataUri(tag.href));
}

/**
 * Sarmalayıcı belgede çizim içeriği kalıp kalmadığını söyler.
 * @param {string} svg Gömülü SVG görseli ve ona bağlı `<use>` çıkarıldıktan sonraki metin.
 * @returns {boolean} path, şekil veya dolu grup kaldıysa true.
 * @remarks Boş `defs`/`style`/`g` ve kök `<svg>` sarmalayıcı sayılır, çizim sayılmaz.
 */
function hasRemainingGraphics(svg) {
  let rest = svg
    .replace(/<\?xml\b[^>]*\?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  /** @type {RegExp} İçi boş sarmalayıcı etiket. */
  const emptyWrapper = /<(?:svg|g|defs|style|title|desc|metadata|symbol)\b[^>]*>\s*<\/(?:svg|g|defs|style|title|desc|metadata|symbol)>/gi;
  let previous = '';
  while (rest !== previous) {
    previous = rest;
    rest = rest.replace(/<(?:svg|g|defs|style|title|desc|metadata|symbol)\b[^>]*\/>/gi, '');
    rest = rest.replace(emptyWrapper, '');
  }

  rest = rest.replace(/<\/?svg\b[^>]*>/gi, '');
  return /<[a-z!]/i.test(rest);
}

/**
 * `<image>` konumunu iç SVG köküne taşır.
 * @param {string} innerSvg Çözülmüş iç belge.
 * @param {string} attrs Dış `<image>` öznitelikleri.
 * @returns {string} `id` ve yerleşim öznitelikleri işlenmiş SVG.
 * @remarks Karışık dosyada `<use href="#id">` aynı kimliği görmeye devam eder. Yalnızca sarmalayıcı olan belgede çağrılmaz.
 */
function applyImageIdentity(innerSvg, attrs) {
  /** @type {string[]} İç köke kopyalanan yerleşim öznitelikleri. */
  const transfer = ['id', 'x', 'y', 'width', 'height', 'transform', 'preserveAspectRatio'];

  return innerSvg.replace(/<svg\b([^>]*)>/i, (_full, existing) => {
    let next = existing;
    for (const name of transfer) {
      const value = readXmlAttribute(attrs, name);
      if (value == null) {
        continue;
      }
      /** @type {string} Öznitelik değerinde kaçırılan tırnak ve ve işareti. */
      const escaped = value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
      /** @type {RegExp} Kökte aynı adlı mevcut öznitelik. */
      const existingAttr = new RegExp(String.raw`(\s)${name}\s*=\s*(?:"[^"]*"|'[^']*')`, 'i');
      if (existingAttr.test(next)) {
        next = next.replace(existingAttr, `$1${name}="${escaped}"`);
      } else {
        next += ` ${name}="${escaped}"`;
      }
    }
    return `<svg${next}>`;
  });
}

/**
 * Gömülü `data:image/svg+xml` görsellerini gerçek SVG'ye açar.
 * @param {string} svg Ham veya ara SVG metni.
 * @param {number} [depth=0] İç içe açma derinliği.
 * @returns {string} Raster görselleri duran, gömülü SVG'si açılmış metin.
 * @remarks Tek içerik bu gömülü belgeyse (Beyağaç: `defs` içindeki image ve `use`) kök olarak iç SVG kullanılır.
 * Yanında vektör varsa image etiketi iç belgeyle değiştirilir. PNG/WebP silinmez.
 */
export function prepareIconSvg(svg, depth = 0) {
  if (depth > MAX_EMBEDDED_SVG_DEPTH) {
    return svg;
  }

  /** @type {ReturnType<typeof findEmbeddedSvgImages>} Açılacak gömülü SVG görselleri. */
  const images = findEmbeddedSvgImages(svg);
  if (images.length === 0) {
    return svg;
  }

  if (images.length === 1) {
    /** @type {string[]} Bu görsele bakan `<use href="#id">` kimlikleri. */
    const referencedIds = images.map((image) => image.id).filter((id) => Boolean(id));
    /** @type {{ start: number, end: number }[]} Sarmalayıcıdan düşülecek use etiketleri. */
    const uses = findXmlTags(svg, 'use').filter((tag) => {
      const href = readReferenceHref(tag.attrs)?.trim() ?? '';
      return href.startsWith('#') && referencedIds.includes(href.slice(1).trim());
    });
    /** @type {string} Görsel ve onu çizen use çıkarıldıktan sonraki sarmalayıcı. */
    const shell = removeTagRanges(svg, [...images, ...uses]);
    if (!hasRemainingGraphics(shell)) {
      const inner = extractSvgDocument(decodeSvgDataUri(images[0].href));
      return prepareIconSvg(inner, depth + 1);
    }
  }

  let output = svg;
  for (const image of [...images].reverse()) {
    const inner = applyImageIdentity(extractSvgDocument(decodeSvgDataUri(image.href)), image.attrs);
    output = output.slice(0, image.start) + inner + output.slice(image.end);
  }

  return prepareIconSvg(output, depth + 1);
}

/**
 * Raster ve harici dosya gösteren `<image>` öğelerini siler.
 * @returns {object} SVGO eklenti tanımı.
 * @remarks `data:image/png`, `data:image/webp`, geçersiz `data:img/png` ve `dosya.png` başvuruları düşer.
 * `data:image/svg+xml` bu eklentide durur; onu `prepareIconSvg` SVGO'dan önce açar.
 */
function removeEmbeddedRaster() {
  return {
    name: 'removeEmbeddedRaster',
    description: 'Gömülü PNG/WebP ve harici raster image öğelerini kaldırır.',
    fn: () => ({
      element: {
        /**
         * Raster `<image>` düğümünü ebeveyninden ayırır.
         * @param {{ name?: string, attributes?: Record<string, string> }} node SVGO eleman düğümü.
         * @param {{ children?: unknown[] } | undefined} parentNode Ebeveyn düğüm.
         * @returns {void}
         */
        enter(node, parentNode) {
          if (node.name !== 'image' || !parentNode?.children) {
            return;
          }

          /** @type {Record<string, string>} Görsel öznitelikleri. */
          const attributes = node.attributes ?? {};
          /** @type {string} `href` veya `*:href` başvurusu. */
          const href = Object.entries(attributes).find(([name]) => name === 'href' || name.endsWith(':href'))?.[1] ?? '';
          if (isEmbeddedSvgDataUri(href)) {
            return;
          }

          parentNode.children = parentNode.children.filter((child) => child !== node);
        },
      },
    }),
  };
}

export default {
  multipass: true,
  plugins: [
    removeEmbeddedRaster(),
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertColors: false,
          cleanupIds: {
            minify: true,
            remove: true,
          },
        },
      },
    },
    'removeDimensions',
    'removeMetadata',
    'removeEditorsNSData',
    'removeTitle',
    'removeDesc',
    'removeHiddenElems',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name', 'image-rendering'],
      },
    },
    removeReactIncompatibleAttrs(),
  ],
};
