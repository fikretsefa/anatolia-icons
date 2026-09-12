/**
 * @fileoverview `@anatolia-icons/react` paketi için tsup derleme yapılandırması.
 * @remarks Entry listesi `brands.json` kategorilerinden türetilir; ESM + CJS üretir. Tipler `scripts/build-dts.mjs` ile yazılır.
 */
import { defineConfig } from 'tsup';
import brands from '../../scripts/data/brands.json';

/**
 * Kategori slug'ından tsup entry haritası üretir.
 */
const categoryEntries = Object.fromEntries(
  brands.map((category) => [category.category, `src/${category.category}.ts`]),
);

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    brands: 'src/brands.ts',
    ...categoryEntries,
  },
  format: ['esm', 'cjs'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react'],
});
