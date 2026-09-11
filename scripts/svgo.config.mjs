/**
 * @fileoverview SVGO yapılandırması.
 * @remarks Marka renkleri ve `url(#id)` ile bağlanan gradient/clipPath korunur; global id silme yapılmaz.
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

export default {
  multipass: true,
  plugins: [
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
