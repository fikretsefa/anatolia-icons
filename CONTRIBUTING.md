# Katkı Rehberi

Anatolia Icons'a ikon veya iyileştirme eklemek için bu adımları izleyin.

## Gereksinimler

- Node.js 18+
- [pnpm](https://pnpm.io) 10+

```bash
pnpm install
```

## Yeni ikon ekleme

1. Optimize edilmemiş SVG'yi kategori klasörüne koyun. Dosya adı `brands.json` içindeki `id` ile aynı olmalıdır:

   | Kategori | Klasör |
   | --- | --- |
   | Kamu & devlet | `raw-icons/kamu/` |
   | Devlet üniversiteleri | `raw-icons/universite/` |
   | Teknoloji, savunma & açık kaynak | `raw-icons/teknoloji/` |
   | Finans & ödeme | `raw-icons/finans/` |
   | Büyükşehir belediyeleri | `raw-icons/belediye/` |
   | Anadolu kilim motifleri | `raw-icons/motif/` |

   Örnek: `raw-icons/universite/ege-uni.svg`

   Dosya adı rakamla başlayabilir (`29mayis.svg`); React bileşeni `YirmiDokuzMayisIcon` olur. Aynı `id` iki kategoride varsa bileşen adına kategori eklenir (`YildizIcon` yerine `YildizUniversiteIcon` / `YildizMotifIcon`).

2. [`scripts/data/brands.json`](scripts/data/brands.json) dosyasında ilgili kategorinin `icons` dizisine kaydı ekleyin:

   ```json
   {
     "id": "ege-uni",
     "title": "Ege Üniversitesi",
     "hexColor": "#8B1E3F",
     "website": "https://www.ege.edu.tr"
   }
   ```

3. Pipeline'i çalıştırın:

   ```bash
   pnpm build
   ```

4. Çıktıyı kontrol edin:
   - Optimize SVG: `packages/svg/<kategori>/<id>.svg`
   - README önizleme: `docs/readme/<kategori>/<id>.svg` (48×48 viewport)
   - README katalog ızgarası: `README.md` içindeki `<!-- CATALOG:START -->` bölümü (`brands.json` üzerinden otomatik)
   - React bileşeni: `packages/react/src/icons/<kategori>/<PascalCase>Icon.tsx` (ör. `EgeUniIcon`)

## SVG kuralları

- Kaynak `viewBox` korunsun; zorunlu 24×24 karesi yoktur.
- Mümkünse tek renkli veya sadeleştirilmiş marka silüeti kullanın.
- Gizli katman, gömülü raster, editör metadata'sı ve `width`/`height` SVGO tarafından temizlenir.
- Gerçek logoları `raw-icons` altına koyun; mevcut geometrik dosyalar yalnızca pipeline placeholder'ıdır.

## Yeni kategori

Yeni bir `category` slug'ı ekliyorsanız aynı adı şu yerlere de yansıtın:

- `raw-icons/<slug>/`
- `scripts/data/brands.json` (`category` + `categoryTitle`)
- `@anatolia-icons/react` `exports` haritası (`packages/react/package.json`)
- `packages/react/tsup.config.ts` `entry` listesi

Ardından `pnpm build` kategori barrel dosyasını üretir.

## Pull request

- Küçük, tek amaçlı PR'lar tercih edilir (bir kurum veya bir düzeltme).
- Placeholder geometriyi gerçek logo sanarak göndermeyin.
- Marka kullanımının kamuya açık bir vektör kaynaktan geldiğini PR açıklamasında belirtin.
