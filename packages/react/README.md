# @anatolia-icons/react

Türk kamu kurumları, üniversiteler, teknoloji ve ödeme markalarının React (TypeScript) ikon bileşenleri.

Tam katalog ve katkı rehberi: [anatolia-icons](https://github.com/fikretsefa/anatolia-icons).

## Kurulum

```bash
pnpm add @anatolia-icons/react
# veya
npm install @anatolia-icons/react
```

`react` 18+ peer dependency olarak gerekir.

## Kullanım

```tsx
import { AselsanIcon, TroyIcon } from '@anatolia-icons/react';

export function Example() {
  return (
    <>
      <AselsanIcon size={32} title="ASELSAN" />
      <TroyIcon color="#00AEEF" className="h-8 w-8" />
    </>
  );
}
```

Yalnızca bir kategori (daha küçük bundle):

```tsx
import { GaziUniIcon, OdtuIcon } from '@anatolia-icons/react/universite';
```

| Import yolu | Açıklama |
| --- | --- |
| `@anatolia-icons/react` | Tüm ikonlar + `brands` metadata |
| `@anatolia-icons/react/kamu` | Kamu & devlet kurumları |
| `@anatolia-icons/react/universite` | Devlet üniversiteleri |
| `@anatolia-icons/react/teknoloji` | Teknoloji, savunma & açık kaynak |
| `@anatolia-icons/react/finans` | Finans & ödeme standartları |
| `@anatolia-icons/react/belediye` | Büyükşehir belediyeleri |
| `@anatolia-icons/react/motif` | Anadolu kilim motifleri |
| `@anatolia-icons/react/brands` | Vitrin / filtre için katalog |

Saf SVG dosyaları için [`@anatolia-icons/svg`](https://www.npmjs.com/package/@anatolia-icons/svg) paketini kullanın.

## Lisans

Kod [MIT](./LICENSE) lisansı altındadır. Marka varlıkları MIT kapsamına girmez; hakları sahiplerinde kalır.
