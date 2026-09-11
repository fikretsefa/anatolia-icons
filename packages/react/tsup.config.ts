/**
 * @fileoverview `@anatolia-icons/react` paketi için tsup derleme yapılandırması.
 * @remarks Entry listesi `brands.json` kategorilerinden türetilir; ESM + CJS + d.ts üretir.
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
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react'],
});
