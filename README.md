# Anatolia Icons

Türk kamu kurumları, üniversiteler, teknoloji ve ödeme markalarının SVG logoları ile Anadolu kilim motiflerini sunan açık kaynak ikon kütüphanesi.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.png)
![pnpm](https://img.shields.io/badge/pm-pnpm-f9a825.png)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6.png)

<p align="center">
  <img src="docs/readme/kamu/edevlet.svg" width="40" height="40" alt="e-Devlet" />
  &nbsp;
  <img src="docs/readme/kamu/tubitak.svg" width="40" height="40" alt="TÜBİTAK" />
  &nbsp;
  <img src="docs/readme/universite/odtu.svg" width="40" height="40" alt="ODTÜ" />
  &nbsp;
  <img src="docs/readme/universite/itu.svg" width="40" height="40" alt="İTÜ" />
  &nbsp;
  <img src="docs/readme/teknoloji/aselsan.svg" width="40" height="40" alt="ASELSAN" />
  &nbsp;
  <img src="docs/readme/teknoloji/pardus.svg" width="40" height="40" alt="Pardus" />
  &nbsp;
  <img src="docs/readme/finans/troy.svg" width="40" height="40" alt="TROY" />
  &nbsp;
  <img src="docs/readme/belediye/ibb.svg" width="40" height="40" alt="İBB" />
  &nbsp;
  <img src="docs/readme/motif/eli-belinde.svg" width="40" height="40" alt="Eli Belinde" />
  &nbsp;
  <img src="docs/readme/motif/hayat-agaci.svg" width="40" height="40" alt="Hayat Ağacı" />
</p>

345 ikon · 7 kategori. Tam liste aşağıda: [İkon kataloğu](#ikon-kataloğu).

## Kurulum

```bash
pnpm add @anatolia-icons/react
# veya
npm install @anatolia-icons/react
```

Saf SVG dosyaları için:

```bash
pnpm add @anatolia-icons/svg
```

`react` 18+ peer dependency olarak gerekir.

## Kullanım

Tüm kütüphaneden named import (tree-shaking uyumlu):

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

Tailwind ile renk ve boyut:

```tsx
import { EdevletIcon } from '@anatolia-icons/react/kamu';

<EdevletIcon className="h-6 w-6 text-red-600" />
```

Kategori slug'ları:


| Import yolu                                  | Açıklama                         |
| -------------------------------------------- | -------------------------------- |
| `@anatolia-icons/react`                      | Tüm ikonlar + `brands` metadata  |
| `@anatolia-icons/react/kamu`                 | Kamu & devlet kurumları          |
| `@anatolia-icons/react/universite`           | Devlet üniversiteleri            |
| `@anatolia-icons/react/teknoloji`            | Teknoloji, savunma & açık kaynak |
| `@anatolia-icons/react/finans`               | Finans & ödeme standartları      |
| `@anatolia-icons/react/belediye`             | Büyükşehir belediyeleri          |
| `@anatolia-icons/react/gokturk`              | Göktürk alfabesi                 |
| `@anatolia-icons/react/motif`                | Anadolu kilim motifleri          |
| `@anatolia-icons/react/brands`               | Vitrin / filtre için katalog     |


```ts
import { brands } from '@anatolia-icons/react/brands';
```

### IconProps

| Prop        | Tip               | Varsayılan     | Açıklama                 |
| ----------- | ----------------- | -------------- | ------------------------ |
| `size`      | `number | string` | `24`           | Genişlik ve yükseklik    |
| `color`     | `string`          | `currentColor` | Fill rengi               |
| `title`     | `string`          | —              | Erişilebilir SVG başlığı |
| `className` | `string`          | —              | Tailwind / CSS sınıfı    |

Kalan SVG özellikleri (`aria-*`, `onClick`, …) köke aktarılır.

## İkon kataloğu

Bu ızgara `brands.json` üzerinden otomatik üretilir; elle düzenlemeyin. Yeni logo ekledikten sonra `.\.dev\run-build.ps1` veya `pnpm optimize` yeterlidir.

<!-- CATALOG:START -->
### Kamu & Devlet Kurumları

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/edevlet.svg" width="48" height="48" alt="e-Devlet Kapısı" /><br/>
<sub><b>e-Devlet Kapısı</b></sub><br/>
<sub><code>EdevletIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/tc-cumhurbaskanligi.svg" width="48" height="48" alt="T.C. Cumhurbaşkanlığı Forsu" /><br/>
<sub><b>T.C. Cumhurbaşkanlığı Forsu</b></sub><br/>
<sub><code>TcCumhurbaskanligiIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/tubitak.svg" width="48" height="48" alt="TÜBİTAK" /><br/>
<sub><b>TÜBİTAK</b></sub><br/>
<sub><code>TubitakIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/ptt.svg" width="48" height="48" alt="PTT" /><br/>
<sub><b>PTT</b></sub><br/>
<sub><code>PttIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/tcdd.svg" width="48" height="48" alt="TCDD" /><br/>
<sub><b>TCDD</b></sub><br/>
<sub><code>TcddIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/kgm.svg" width="48" height="48" alt="Karayolları Genel Müdürlüğü" /><br/>
<sub><b>Karayolları Genel Müdürlüğü</b></sub><br/>
<sub><code>KgmIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/kamu/tse.svg" width="48" height="48" alt="Türk Standardları Enstitüsü" /><br/>
<sub><b>Türk Standardları Enstitüsü</b></sub><br/>
<sub><code>TseIcon</code></sub>
</td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
</tr>
</table>

### Devlet Üniversiteleri

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/gazi-uni.svg" width="48" height="48" alt="Gazi Üniversitesi" /><br/>
<sub><b>Gazi Üniversitesi</b></sub><br/>
<sub><code>GaziUniIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/odtu.svg" width="48" height="48" alt="Orta Doğu Teknik Üniversitesi" /><br/>
<sub><b>Orta Doğu Teknik Üniversitesi</b></sub><br/>
<sub><code>OdtuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/itu.svg" width="48" height="48" alt="İstanbul Teknik Üniversitesi" /><br/>
<sub><b>İstanbul Teknik Üniversitesi</b></sub><br/>
<sub><code>ItuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/boun.svg" width="48" height="48" alt="Boğaziçi Üniversitesi" /><br/>
<sub><b>Boğaziçi Üniversitesi</b></sub><br/>
<sub><code>BounIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ankara-uni.svg" width="48" height="48" alt="Ankara Üniversitesi" /><br/>
<sub><b>Ankara Üniversitesi</b></sub><br/>
<sub><code>AnkaraUniIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/kocaeli-uni.svg" width="48" height="48" alt="Kocaeli Üniversitesi" /><br/>
<sub><b>Kocaeli Üniversitesi</b></sub><br/>
<sub><code>KocaeliUniIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/agu.svg" width="48" height="48" alt="Abdullah Gül Üniversitesi" /><br/>
<sub><b>Abdullah Gül Üniversitesi</b></sub><br/>
<sub><code>AguIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/adiyaman.svg" width="48" height="48" alt="Adıyaman Üniversitesi" /><br/>
<sub><b>Adıyaman Üniversitesi</b></sub><br/>
<sub><code>AdiyamanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/altinbas.svg" width="48" height="48" alt="Altınbaş Üniversitesi" /><br/>
<sub><b>Altınbaş Üniversitesi</b></sub><br/>
<sub><code>AltinbasIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/amasya.svg" width="48" height="48" alt="Amasya Üniversitesi" /><br/>
<sub><b>Amasya Üniversitesi</b></sub><br/>
<sub><code>AmasyaIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/anadolu.svg" width="48" height="48" alt="Anadolu Üniversitesi" /><br/>
<sub><b>Anadolu Üniversitesi</b></sub><br/>
<sub><code>AnadoluIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/hacibayram.svg" width="48" height="48" alt="Ankara Hacı Bayram Veli Üniversitesi" /><br/>
<sub><b>Ankara Hacı Bayram Veli Üniversitesi</b></sub><br/>
<sub><code>HacibayramIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/aybu.svg" width="48" height="48" alt="Ankara Yıldırım Beyazıt Üniversitesi" /><br/>
<sub><b>Ankara Yıldırım Beyazıt Üniversitesi</b></sub><br/>
<sub><code>AybuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/belek.svg" width="48" height="48" alt="Antalya Belek Üniversitesi" /><br/>
<sub><b>Antalya Belek Üniversitesi</b></sub><br/>
<sub><code>BelekIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/antalya.svg" width="48" height="48" alt="Antalya Bilim Üniversitesi" /><br/>
<sub><b>Antalya Bilim Üniversitesi</b></sub><br/>
<sub><code>AntalyaIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/adiguzel.svg" width="48" height="48" alt="Ataşehir Adıgüzel Meslek Yüksekokulu" /><br/>
<sub><b>Ataşehir Adıgüzel Meslek Yüksekokulu</b></sub><br/>
<sub><code>AdiguzelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/atilim.svg" width="48" height="48" alt="Atılım Üniversitesi" /><br/>
<sub><b>Atılım Üniversitesi</b></sub><br/>
<sub><code>AtilimIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/adu.svg" width="48" height="48" alt="Aydın Adnan Menderes Üniversitesi" /><br/>
<sub><b>Aydın Adnan Menderes Üniversitesi</b></sub><br/>
<sub><code>AduIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/bayburt.svg" width="48" height="48" alt="Bayburt Üniversitesi" /><br/>
<sub><b>Bayburt Üniversitesi</b></sub><br/>
<sub><code>BayburtIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/baskent.svg" width="48" height="48" alt="Başkent Üniversitesi" /><br/>
<sub><b>Başkent Üniversitesi</b></sub><br/>
<sub><code>BaskentIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/beykoz.svg" width="48" height="48" alt="Beykoz Üniversitesi" /><br/>
<sub><b>Beykoz Üniversitesi</b></sub><br/>
<sub><code>BeykozIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/biruni.svg" width="48" height="48" alt="Biruni Üniversitesi" /><br/>
<sub><b>Biruni Üniversitesi</b></sub><br/>
<sub><code>BiruniIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/mehmetakif.svg" width="48" height="48" alt="Burdur Mehmet Akif Ersoy Üniversitesi" /><br/>
<sub><b>Burdur Mehmet Akif Ersoy Üniversitesi</b></sub><br/>
<sub><code>MehmetakifIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/uludag.svg" width="48" height="48" alt="Bursa Uludağ Üniversitesi" /><br/>
<sub><b>Bursa Uludağ Üniversitesi</b></sub><br/>
<sub><code>UludagIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/duzce.svg" width="48" height="48" alt="Düzce Üniversitesi" /><br/>
<sub><b>Düzce Üniversitesi</b></sub><br/>
<sub><code>DuzceIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ege.svg" width="48" height="48" alt="Ege Üniversitesi" /><br/>
<sub><b>Ege Üniversitesi</b></sub><br/>
<sub><code>EgeIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/erciyes.svg" width="48" height="48" alt="Erciyes Üniversitesi" /><br/>
<sub><b>Erciyes Üniversitesi</b></sub><br/>
<sub><code>ErciyesIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ebyu.svg" width="48" height="48" alt="Erzincan Binali Yıldırım Üniversitesi" /><br/>
<sub><b>Erzincan Binali Yıldırım Üniversitesi</b></sub><br/>
<sub><code>EbyuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/erzurum.svg" width="48" height="48" alt="Erzurum Teknik Üniversitesi" /><br/>
<sub><b>Erzurum Teknik Üniversitesi</b></sub><br/>
<sub><code>ErzurumIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/eskisehir.svg" width="48" height="48" alt="Eskişehir Teknik Üniversitesi" /><br/>
<sub><b>Eskişehir Teknik Üniversitesi</b></sub><br/>
<sub><code>EskisehirIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/fsm.svg" width="48" height="48" alt="Fatih Sultan Mehmet Vakıf Üniversitesi" /><br/>
<sub><b>Fatih Sultan Mehmet Vakıf Üniversitesi</b></sub><br/>
<sub><code>FsmIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/fbu.svg" width="48" height="48" alt="Fenerbahçe Üniversitesi" /><br/>
<sub><b>Fenerbahçe Üniversitesi</b></sub><br/>
<sub><code>FbuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/firat.svg" width="48" height="48" alt="Fırat Üniversitesi" /><br/>
<sub><b>Fırat Üniversitesi</b></sub><br/>
<sub><code>FiratIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/gantep.svg" width="48" height="48" alt="Gaziantep Üniversitesi" /><br/>
<sub><b>Gaziantep Üniversitesi</b></sub><br/>
<sub><code>GantepIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/gumushane.svg" width="48" height="48" alt="Gümüşhane Üniversitesi" /><br/>
<sub><b>Gümüşhane Üniversitesi</b></sub><br/>
<sub><code>GumushaneIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/hacettepe.svg" width="48" height="48" alt="Hacettepe Üniversitesi" /><br/>
<sub><b>Hacettepe Üniversitesi</b></sub><br/>
<sub><code>HacettepeIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/hakkari.svg" width="48" height="48" alt="Hakkari Üniversitesi" /><br/>
<sub><b>Hakkari Üniversitesi</b></sub><br/>
<sub><code>HakkariIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/halic.svg" width="48" height="48" alt="Haliç Üniversitesi" /><br/>
<sub><b>Haliç Üniversitesi</b></sub><br/>
<sub><code>HalicIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/hitit.svg" width="48" height="48" alt="Hitit Üniversitesi" /><br/>
<sub><b>Hitit Üniversitesi</b></sub><br/>
<sub><code>HititIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/igdir.svg" width="48" height="48" alt="Iğdır Üniversitesi" /><br/>
<sub><b>Iğdır Üniversitesi</b></sub><br/>
<sub><code>IgdirIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/kafkas.svg" width="48" height="48" alt="Kafkas Üniversitesi" /><br/>
<sub><b>Kafkas Üniversitesi</b></sub><br/>
<sub><code>KafkasIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ktu.svg" width="48" height="48" alt="Karadeniz Teknik Üniversitesi" /><br/>
<sub><b>Karadeniz Teknik Üniversitesi</b></sub><br/>
<sub><code>KtuIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ktun.svg" width="48" height="48" alt="Konya Teknik Üniversitesi" /><br/>
<sub><b>Konya Teknik Üniversitesi</b></sub><br/>
<sub><code>KtunIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ku.svg" width="48" height="48" alt="Koç Üniversitesi" /><br/>
<sub><b>Koç Üniversitesi</b></sub><br/>
<sub><code>KuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/kku.svg" width="48" height="48" alt="Kırıkkale Üniversitesi" /><br/>
<sub><b>Kırıkkale Üniversitesi</b></sub><br/>
<sub><code>KkuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ahievran.svg" width="48" height="48" alt="Kırşehir Ahi Evran Üniversitesi" /><br/>
<sub><b>Kırşehir Ahi Evran Üniversitesi</b></sub><br/>
<sub><code>AhievranIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/lokmanhekim.svg" width="48" height="48" alt="Lokman Hekim Üniversitesi" /><br/>
<sub><b>Lokman Hekim Üniversitesi</b></sub><br/>
<sub><code>LokmanhekimIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ozal.svg" width="48" height="48" alt="Malatya Turgut Özal Üniversitesi" /><br/>
<sub><b>Malatya Turgut Özal Üniversitesi</b></sub><br/>
<sub><code>OzalIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/artuklu.svg" width="48" height="48" alt="Mardin Artuklu Üniversitesi" /><br/>
<sub><b>Mardin Artuklu Üniversitesi</b></sub><br/>
<sub><code>ArtukluIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/marmara.svg" width="48" height="48" alt="Marmara Üniversitesi" /><br/>
<sub><b>Marmara Üniversitesi</b></sub><br/>
<sub><code>MarmaraIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/mersin.svg" width="48" height="48" alt="Mersin Üniversitesi" /><br/>
<sub><b>Mersin Üniversitesi</b></sub><br/>
<sub><code>MersinIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/msgsu.svg" width="48" height="48" alt="Mimar Sinan Güzel Sanatlar Üniversitesi" /><br/>
<sub><b>Mimar Sinan Güzel Sanatlar Üniversitesi</b></sub><br/>
<sub><code>MsgsuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/munzur.svg" width="48" height="48" alt="Munzur Üniversitesi" /><br/>
<sub><b>Munzur Üniversitesi</b></sub><br/>
<sub><code>MunzurIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/mu.svg" width="48" height="48" alt="Muğla Sıtkı Koçman Üniversitesi" /><br/>
<sub><b>Muğla Sıtkı Koçman Üniversitesi</b></sub><br/>
<sub><code>MuIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/alparslan.svg" width="48" height="48" alt="Muş Alparslan Üniversitesi" /><br/>
<sub><b>Muş Alparslan Üniversitesi</b></sub><br/>
<sub><code>AlparslanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ohu.svg" width="48" height="48" alt="Niğde Ömer Halisdemir Üniversitesi" /><br/>
<sub><b>Niğde Ömer Halisdemir Üniversitesi</b></sub><br/>
<sub><code>OhuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/omu.svg" width="48" height="48" alt="Ondokuz Mayıs Üniversitesi" /><br/>
<sub><b>Ondokuz Mayıs Üniversitesi</b></sub><br/>
<sub><code>OmuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/odu.svg" width="48" height="48" alt="Ordu Üniversitesi" /><br/>
<sub><b>Ordu Üniversitesi</b></sub><br/>
<sub><code>OduIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/pau.svg" width="48" height="48" alt="Pamukkale Üniversitesi" /><br/>
<sub><b>Pamukkale Üniversitesi</b></sub><br/>
<sub><code>PauIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/sabanciuniv.svg" width="48" height="48" alt="Sabancı Üniversitesi" /><br/>
<sub><b>Sabancı Üniversitesi</b></sub><br/>
<sub><code>SabanciunivIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/subu.svg" width="48" height="48" alt="Sakarya Uygulamalı Bilimler Üniversitesi" /><br/>
<sub><b>Sakarya Uygulamalı Bilimler Üniversitesi</b></sub><br/>
<sub><code>SubuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/sakarya.svg" width="48" height="48" alt="Sakarya Üniversitesi" /><br/>
<sub><b>Sakarya Üniversitesi</b></sub><br/>
<sub><code>SakaryaIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/sanko.svg" width="48" height="48" alt="Sanko Üniversitesi" /><br/>
<sub><b>Sanko Üniversitesi</b></sub><br/>
<sub><code>SankoIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/tarsus.svg" width="48" height="48" alt="Tarsus Üniversitesi" /><br/>
<sub><b>Tarsus Üniversitesi</b></sub><br/>
<sub><code>TarsusIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/nku.svg" width="48" height="48" alt="Tekirdağ Namık Kemal Üniversitesi" /><br/>
<sub><b>Tekirdağ Namık Kemal Üniversitesi</b></sub><br/>
<sub><code>NkuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/gop.svg" width="48" height="48" alt="Tokat Gaziosmanpaşa Üniversitesi" /><br/>
<sub><b>Tokat Gaziosmanpaşa Üniversitesi</b></sub><br/>
<sub><code>GopIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/usak.svg" width="48" height="48" alt="Uşak Üniversitesi" /><br/>
<sub><b>Uşak Üniversitesi</b></sub><br/>
<sub><code>UsakIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/yildiz.svg" width="48" height="48" alt="Yıldız Teknik Üniversitesi" /><br/>
<sub><b>Yıldız Teknik Üniversitesi</b></sub><br/>
<sub><code>YildizUniversiteIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/karatekin.svg" width="48" height="48" alt="Çankırı Karatekin Üniversitesi" /><br/>
<sub><b>Çankırı Karatekin Üniversitesi</b></sub><br/>
<sub><code>KaratekinIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/cu.svg" width="48" height="48" alt="Çukurova Üniversitesi" /><br/>
<sub><b>Çukurova Üniversitesi</b></sub><br/>
<sub><code>CuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ozyegin.svg" width="48" height="48" alt="Özyeğin Üniversitesi" /><br/>
<sub><b>Özyeğin Üniversitesi</b></sub><br/>
<sub><code>OzyeginIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/ihu.svg" width="48" height="48" alt="İbn Haldun Üniversitesi" /><br/>
<sub><b>İbn Haldun Üniversitesi</b></sub><br/>
<sub><code>IhuIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/29mayis.svg" width="48" height="48" alt="İstanbul 29 Mayıs Üniversitesi" /><br/>
<sub><b>İstanbul 29 Mayıs Üniversitesi</b></sub><br/>
<sub><code>YirmiDokuzMayisIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/arel.svg" width="48" height="48" alt="İstanbul Arel Üniversitesi" /><br/>
<sub><b>İstanbul Arel Üniversitesi</b></sub><br/>
<sub><code>ArelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/atlas.svg" width="48" height="48" alt="İstanbul Atlas Üniversitesi" /><br/>
<sub><b>İstanbul Atlas Üniversitesi</b></sub><br/>
<sub><code>AtlasIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/aydin.svg" width="48" height="48" alt="İstanbul Aydın Üniversitesi" /><br/>
<sub><b>İstanbul Aydın Üniversitesi</b></sub><br/>
<sub><code>AydinIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/bilgi.svg" width="48" height="48" alt="İstanbul Bilgi Üniversitesi" /><br/>
<sub><b>İstanbul Bilgi Üniversitesi</b></sub><br/>
<sub><code>BilgiIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/iku.svg" width="48" height="48" alt="İstanbul Kültür Üniversitesi" /><br/>
<sub><b>İstanbul Kültür Üniversitesi</b></sub><br/>
<sub><code>IkuIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/medeniyet.svg" width="48" height="48" alt="İstanbul Medeniyet Üniversitesi" /><br/>
<sub><b>İstanbul Medeniyet Üniversitesi</b></sub><br/>
<sub><code>MedeniyetIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/istun.svg" width="48" height="48" alt="İstanbul Sağlık ve Teknoloji Üniversitesi" /><br/>
<sub><b>İstanbul Sağlık ve Teknoloji Üniversitesi</b></sub><br/>
<sub><code>IstunIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/topkapi.svg" width="48" height="48" alt="İstanbul Topkapı Üniversitesi" /><br/>
<sub><b>İstanbul Topkapı Üniversitesi</b></sub><br/>
<sub><code>TopkapiIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/istanbul.svg" width="48" height="48" alt="İstanbul Üniversitesi" /><br/>
<sub><b>İstanbul Üniversitesi</b></sub><br/>
<sub><code>IstanbulIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/iuc.svg" width="48" height="48" alt="İstanbul Üniversitesi-cerrahpaşa" /><br/>
<sub><b>İstanbul Üniversitesi-cerrahpaşa</b></sub><br/>
<sub><code>IucIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/sisli.svg" width="48" height="48" alt="İstanbul Şişli Meslek Yüksekokulu" /><br/>
<sub><b>İstanbul Şişli Meslek Yüksekokulu</b></sub><br/>
<sub><code>SisliIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/istinye.svg" width="48" height="48" alt="İstinye Üniversitesi" /><br/>
<sub><b>İstinye Üniversitesi</b></sub><br/>
<sub><code>IstinyeIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/universite/bakircay.svg" width="48" height="48" alt="İzmir Bakırçay Üniversitesi" /><br/>
<sub><b>İzmir Bakırçay Üniversitesi</b></sub><br/>
<sub><code>BakircayIcon</code></sub>
</td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
</tr>
</table>

### Teknoloji, Savunma & Açık Kaynak

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/pardus.svg" width="48" height="48" alt="Pardus" /><br/>
<sub><b>Pardus</b></sub><br/>
<sub><code>PardusIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/aselsan.svg" width="48" height="48" alt="ASELSAN" /><br/>
<sub><b>ASELSAN</b></sub><br/>
<sub><code>AselsanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/havelsan.svg" width="48" height="48" alt="HAVELSAN" /><br/>
<sub><b>HAVELSAN</b></sub><br/>
<sub><code>HavelsanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/roketsan.svg" width="48" height="48" alt="ROKETSAN" /><br/>
<sub><b>ROKETSAN</b></sub><br/>
<sub><code>RoketsanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/kodluyoruz.svg" width="48" height="48" alt="Kodluyoruz" /><br/>
<sub><b>Kodluyoruz</b></sub><br/>
<sub><code>KodluyoruzIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/teknoloji/lkd.svg" width="48" height="48" alt="Linux Kullanıcıları Derneği" /><br/>
<sub><b>Linux Kullanıcıları Derneği</b></sub><br/>
<sub><code>LkdIcon</code></sub>
</td>
</tr>
</table>

### Finans & Ödeme Standartları

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/finans/tl-simgesi.svg" width="48" height="48" alt="Türk Lirası Simgesi (₺)" /><br/>
<sub><b>Türk Lirası Simgesi (₺)</b></sub><br/>
<sub><code>TlSimgesiIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/finans/troy.svg" width="48" height="48" alt="TROY" /><br/>
<sub><b>TROY</b></sub><br/>
<sub><code>TroyIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/finans/bkm.svg" width="48" height="48" alt="BKM Express" /><br/>
<sub><b>BKM Express</b></sub><br/>
<sub><code>BkmIcon</code></sub>
</td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
</tr>
</table>

### Büyükşehir Belediyeleri

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/ibb.svg" width="48" height="48" alt="İstanbul Büyükşehir Belediyesi" /><br/>
<sub><b>İstanbul Büyükşehir Belediyesi</b></sub><br/>
<sub><code>IbbIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/abb.svg" width="48" height="48" alt="Ankara Büyükşehir Belediyesi" /><br/>
<sub><b>Ankara Büyükşehir Belediyesi</b></sub><br/>
<sub><code>AbbIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kocaeli-bb.svg" width="48" height="48" alt="Kocaeli Büyükşehir Belediyesi" /><br/>
<sub><b>Kocaeli Büyükşehir Belediyesi</b></sub><br/>
<sub><code>KocaeliBbIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/adapazari-bel.svg" width="48" height="48" alt="Adapazarı Belediyesi" /><br/>
<sub><b>Adapazarı Belediyesi</b></sub><br/>
<sub><code>AdapazariBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/adiyaman-bel.svg" width="48" height="48" alt="Adıyaman Belediyesi" /><br/>
<sub><b>Adıyaman Belediyesi</b></sub><br/>
<sub><code>AdiyamanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/agri-bel.svg" width="48" height="48" alt="Ağrı Belediyesi" /><br/>
<sub><b>Ağrı Belediyesi</b></sub><br/>
<sub><code>AgriBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/aliaga-bel.svg" width="48" height="48" alt="Aliağa Belediyesi" /><br/>
<sub><b>Aliağa Belediyesi</b></sub><br/>
<sub><code>AliagaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/altindag-bel.svg" width="48" height="48" alt="Altındağ Belediyesi" /><br/>
<sub><b>Altındağ Belediyesi</b></sub><br/>
<sub><code>AltindagBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/altinozu-bel.svg" width="48" height="48" alt="Altınözü Belediyesi" /><br/>
<sub><b>Altınözü Belediyesi</b></sub><br/>
<sub><code>AltinozuBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/arifiye-bel.svg" width="48" height="48" alt="Arifiye Belediyesi" /><br/>
<sub><b>Arifiye Belediyesi</b></sub><br/>
<sub><code>ArifiyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/armutlu-bel.svg" width="48" height="48" alt="Armutlu Belediyesi" /><br/>
<sub><b>Armutlu Belediyesi</b></sub><br/>
<sub><code>ArmutluBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/arnavutkoy-bel.svg" width="48" height="48" alt="Arnavutköy Belediyesi" /><br/>
<sub><b>Arnavutköy Belediyesi</b></sub><br/>
<sub><code>ArnavutkoyBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/arsin-bel.svg" width="48" height="48" alt="Arsin Belediyesi" /><br/>
<sub><b>Arsin Belediyesi</b></sub><br/>
<sub><code>ArsinBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/arsuz-bel.svg" width="48" height="48" alt="Arsuz Belediyesi" /><br/>
<sub><b>Arsuz Belediyesi</b></sub><br/>
<sub><code>ArsuzBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/atakum-bel.svg" width="48" height="48" alt="Atakum Belediyesi" /><br/>
<sub><b>Atakum Belediyesi</b></sub><br/>
<sub><code>AtakumBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/avanos-bel.svg" width="48" height="48" alt="Avanos Belediyesi" /><br/>
<sub><b>Avanos Belediyesi</b></sub><br/>
<sub><code>AvanosBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/ayas-bel.svg" width="48" height="48" alt="Ayaş Belediyesi" /><br/>
<sub><b>Ayaş Belediyesi</b></sub><br/>
<sub><code>AyasBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/aydintepe-bel.svg" width="48" height="48" alt="Aydıntepe Belediyesi" /><br/>
<sub><b>Aydıntepe Belediyesi</b></sub><br/>
<sub><code>AydintepeBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/ayvalik-bel.svg" width="48" height="48" alt="Ayvalık Belediyesi" /><br/>
<sub><b>Ayvalık Belediyesi</b></sub><br/>
<sub><code>AyvalikBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bahcelievler-bel.svg" width="48" height="48" alt="Bahçelievler Belediyesi" /><br/>
<sub><b>Bahçelievler Belediyesi</b></sub><br/>
<sub><code>BahcelievlerBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/balcova-bel.svg" width="48" height="48" alt="Balçova Belediyesi" /><br/>
<sub><b>Balçova Belediyesi</b></sub><br/>
<sub><code>BalcovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/basaksehir-bel.svg" width="48" height="48" alt="Başakşehir Belediyesi" /><br/>
<sub><b>Başakşehir Belediyesi</b></sub><br/>
<sub><code>BasaksehirBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/basiskele-bel.svg" width="48" height="48" alt="Başiskele Belediyesi" /><br/>
<sub><b>Başiskele Belediyesi</b></sub><br/>
<sub><code>BasiskeleBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bayburt-bel.svg" width="48" height="48" alt="Bayburt Belediyesi" /><br/>
<sub><b>Bayburt Belediyesi</b></sub><br/>
<sub><code>BayburtBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bayrakli-bel.svg" width="48" height="48" alt="Bayraklı Belediyesi" /><br/>
<sub><b>Bayraklı Belediyesi</b></sub><br/>
<sub><code>BayrakliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/beyagac-bel.svg" width="48" height="48" alt="Beyağaç Belediyesi" /><br/>
<sub><b>Beyağaç Belediyesi</b></sub><br/>
<sub><code>BeyagacBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/beylikova-bel.svg" width="48" height="48" alt="Beylikova Belediyesi" /><br/>
<sub><b>Beylikova Belediyesi</b></sub><br/>
<sub><code>BeylikovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/beypazari-bel.svg" width="48" height="48" alt="Beypazarı Belediyesi" /><br/>
<sub><b>Beypazarı Belediyesi</b></sub><br/>
<sub><code>BeypazariBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/biga-bel.svg" width="48" height="48" alt="Biga Belediyesi" /><br/>
<sub><b>Biga Belediyesi</b></sub><br/>
<sub><code>BigaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bogazkale-bel.svg" width="48" height="48" alt="Boğazkale Belediyesi" /><br/>
<sub><b>Boğazkale Belediyesi</b></sub><br/>
<sub><code>BogazkaleBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bogazliyan-bel.svg" width="48" height="48" alt="Boğazlıyan Belediyesi" /><br/>
<sub><b>Boğazlıyan Belediyesi</b></sub><br/>
<sub><code>BogazliyanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bornova-bel.svg" width="48" height="48" alt="Bornova Belediyesi" /><br/>
<sub><b>Bornova Belediyesi</b></sub><br/>
<sub><code>BornovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bozdogan-bel.svg" width="48" height="48" alt="Bozdoğan Belediyesi" /><br/>
<sub><b>Bozdoğan Belediyesi</b></sub><br/>
<sub><code>BozdoganBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bozkurt-bel.svg" width="48" height="48" alt="Bozkurt Belediyesi" /><br/>
<sub><b>Bozkurt Belediyesi</b></sub><br/>
<sub><code>BozkurtBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/buca-bel.svg" width="48" height="48" alt="Buca Belediyesi" /><br/>
<sub><b>Buca Belediyesi</b></sub><br/>
<sub><code>BucaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/bursa-bel.svg" width="48" height="48" alt="Bursa Büyükşehir Belediyesi" /><br/>
<sub><b>Bursa Büyükşehir Belediyesi</b></sub><br/>
<sub><code>BursaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cadirkaya-bel.svg" width="48" height="48" alt="Çadırkaya Belediyesi" /><br/>
<sub><b>Çadırkaya Belediyesi</b></sub><br/>
<sub><code>CadirkayaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/camoluk-bel.svg" width="48" height="48" alt="Çamoluk Belediyesi" /><br/>
<sub><b>Çamoluk Belediyesi</b></sub><br/>
<sub><code>CamolukBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cankiri-bel.svg" width="48" height="48" alt="Çankırı Belediyesi" /><br/>
<sub><b>Çankırı Belediyesi</b></sub><br/>
<sub><code>CankiriBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/caybasi-bel.svg" width="48" height="48" alt="Çaybaşı Belediyesi" /><br/>
<sub><b>Çaybaşı Belediyesi</b></sub><br/>
<sub><code>CaybasiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cayiralan-bel.svg" width="48" height="48" alt="Çayıralan Belediyesi" /><br/>
<sub><b>Çayıralan Belediyesi</b></sub><br/>
<sub><code>CayiralanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cayirova-bel.svg" width="48" height="48" alt="Çayırova Belediyesi" /><br/>
<sub><b>Çayırova Belediyesi</b></sub><br/>
<sub><code>CayirovaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cekmekoy-bel.svg" width="48" height="48" alt="Çekmeköy Belediyesi" /><br/>
<sub><b>Çekmeköy Belediyesi</b></sub><br/>
<sub><code>CekmekoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cemisgezek-bel.svg" width="48" height="48" alt="Çemişgezek Belediyesi" /><br/>
<sub><b>Çemişgezek Belediyesi</b></sub><br/>
<sub><code>CemisgezekBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cerkezkoy-bel.svg" width="48" height="48" alt="Çerkezköy Belediyesi" /><br/>
<sub><b>Çerkezköy Belediyesi</b></sub><br/>
<sub><code>CerkezkoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cesme-bel.svg" width="48" height="48" alt="Çeşme Belediyesi" /><br/>
<sub><b>Çeşme Belediyesi</b></sub><br/>
<sub><code>CesmeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cilimli-bel.svg" width="48" height="48" alt="Çilimli Belediyesi" /><br/>
<sub><b>Çilimli Belediyesi</b></sub><br/>
<sub><code>CilimliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cukurca-bel.svg" width="48" height="48" alt="Çukurca Belediyesi" /><br/>
<sub><b>Çukurca Belediyesi</b></sub><br/>
<sub><code>CukurcaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/cumayeri-bel.svg" width="48" height="48" alt="Cumayeri Belediyesi" /><br/>
<sub><b>Cumayeri Belediyesi</b></sub><br/>
<sub><code>CumayeriBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/demirkoy-bel.svg" width="48" height="48" alt="Demirköy Belediyesi" /><br/>
<sub><b>Demirköy Belediyesi</b></sub><br/>
<sub><code>DemirkoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/demirozu-bel.svg" width="48" height="48" alt="Demirözü Belediyesi" /><br/>
<sub><b>Demirözü Belediyesi</b></sub><br/>
<sub><code>DemirozuBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/dumlupinar-bel.svg" width="48" height="48" alt="Dumlupınar Belediyesi" /><br/>
<sub><b>Dumlupınar Belediyesi</b></sub><br/>
<sub><code>DumlupinarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/dursunbey-bel.svg" width="48" height="48" alt="Dursunbey Belediyesi" /><br/>
<sub><b>Dursunbey Belediyesi</b></sub><br/>
<sub><code>DursunbeyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/duzici-bel.svg" width="48" height="48" alt="Düziçi Belediyesi" /><br/>
<sub><b>Düziçi Belediyesi</b></sub><br/>
<sub><code>DuziciBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/edirne-bel.svg" width="48" height="48" alt="Edirne Belediyesi" /><br/>
<sub><b>Edirne Belediyesi</b></sub><br/>
<sub><code>EdirneBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/efeler-bel.svg" width="48" height="48" alt="Efeler Belediyesi" /><br/>
<sub><b>Efeler Belediyesi</b></sub><br/>
<sub><code>EfelerBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/elmadag-bel.svg" width="48" height="48" alt="Elmadağ Belediyesi" /><br/>
<sub><b>Elmadağ Belediyesi</b></sub><br/>
<sub><code>ElmadagBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/emet-bel.svg" width="48" height="48" alt="Emet Belediyesi" /><br/>
<sub><b>Emet Belediyesi</b></sub><br/>
<sub><code>EmetBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/erdemli-bel.svg" width="48" height="48" alt="Erdemli Belediyesi" /><br/>
<sub><b>Erdemli Belediyesi</b></sub><br/>
<sub><code>ErdemliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/eregli-bel.svg" width="48" height="48" alt="Ereğli Belediyesi" /><br/>
<sub><b>Ereğli Belediyesi</b></sub><br/>
<sub><code>EregliBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/erenler-bel.svg" width="48" height="48" alt="Erenler Belediyesi" /><br/>
<sub><b>Erenler Belediyesi</b></sub><br/>
<sub><code>ErenlerBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/erzincan-bel.svg" width="48" height="48" alt="Erzincan Belediyesi" /><br/>
<sub><b>Erzincan Belediyesi</b></sub><br/>
<sub><code>ErzincanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/esenler-bel.svg" width="48" height="48" alt="Esenler Belediyesi" /><br/>
<sub><b>Esenler Belediyesi</b></sub><br/>
<sub><code>EsenlerBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/esme-bel.svg" width="48" height="48" alt="Eşme Belediyesi" /><br/>
<sub><b>Eşme Belediyesi</b></sub><br/>
<sub><code>EsmeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/eynesil-bel.svg" width="48" height="48" alt="Eynesil Belediyesi" /><br/>
<sub><b>Eynesil Belediyesi</b></sub><br/>
<sub><code>EynesilBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/fatih-bel.svg" width="48" height="48" alt="Fatih Belediyesi" /><br/>
<sub><b>Fatih Belediyesi</b></sub><br/>
<sub><code>FatihBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/fethiye-bel.svg" width="48" height="48" alt="Fethiye Belediyesi" /><br/>
<sub><b>Fethiye Belediyesi</b></sub><br/>
<sub><code>FethiyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/gebze-bel.svg" width="48" height="48" alt="Gebze Belediyesi" /><br/>
<sub><b>Gebze Belediyesi</b></sub><br/>
<sub><code>GebzeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/germencik-bel.svg" width="48" height="48" alt="Germencik Belediyesi" /><br/>
<sub><b>Germencik Belediyesi</b></sub><br/>
<sub><code>GermencikBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/golbasi-bel.svg" width="48" height="48" alt="Gölbaşı Belediyesi" /><br/>
<sub><b>Gölbaşı Belediyesi</b></sub><br/>
<sub><code>GolbasiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/golbasi-ankara-bel.svg" width="48" height="48" alt="Gölbaşı Belediyesi" /><br/>
<sub><b>Gölbaşı Belediyesi</b></sub><br/>
<sub><code>GolbasiAnkaraBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/golyaka-bel.svg" width="48" height="48" alt="Gölyaka Belediyesi" /><br/>
<sub><b>Gölyaka Belediyesi</b></sub><br/>
<sub><code>GolyakaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/gumusgoze-bel.svg" width="48" height="48" alt="Gümüşgöze Belediyesi" /><br/>
<sub><b>Gümüşgöze Belediyesi</b></sub><br/>
<sub><code>GumusgozeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/gurcayir-bel.svg" width="48" height="48" alt="Gürçayır Belediyesi" /><br/>
<sub><b>Gürçayır Belediyesi</b></sub><br/>
<sub><code>GurcayirBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/gurpinar-bel.svg" width="48" height="48" alt="Gürpınar Belediyesi" /><br/>
<sub><b>Gürpınar Belediyesi</b></sub><br/>
<sub><code>GurpinarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/hacilar-bel.svg" width="48" height="48" alt="Hacılar Belediyesi" /><br/>
<sub><b>Hacılar Belediyesi</b></sub><br/>
<sub><code>HacilarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/haymana-bel.svg" width="48" height="48" alt="Haymana Belediyesi" /><br/>
<sub><b>Haymana Belediyesi</b></sub><br/>
<sub><code>HaymanaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/hendek-bel.svg" width="48" height="48" alt="Hendek Belediyesi" /><br/>
<sub><b>Hendek Belediyesi</b></sub><br/>
<sub><code>HendekBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/huyuk-bel.svg" width="48" height="48" alt="Hüyük Belediyesi" /><br/>
<sub><b>Hüyük Belediyesi</b></sub><br/>
<sub><code>HuyukBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/igneada-bel.svg" width="48" height="48" alt="İğneada Belediyesi" /><br/>
<sub><b>İğneada Belediyesi</b></sub><br/>
<sub><code>IgneadaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/incirliova-bel.svg" width="48" height="48" alt="İncirliova Belediyesi" /><br/>
<sub><b>İncirliova Belediyesi</b></sub><br/>
<sub><code>IncirliovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/inegol-bel.svg" width="48" height="48" alt="İnegöl Belediyesi" /><br/>
<sub><b>İnegöl Belediyesi</b></sub><br/>
<sub><code>InegolBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/isparta-bel.svg" width="48" height="48" alt="Isparta Belediyesi" /><br/>
<sub><b>Isparta Belediyesi</b></sub><br/>
<sub><code>IspartaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/izmir-bel.svg" width="48" height="48" alt="İzmir Büyükşehir Belediyesi" /><br/>
<sub><b>İzmir Büyükşehir Belediyesi</b></sub><br/>
<sub><code>IzmirBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/izmit-bel.svg" width="48" height="48" alt="İzmit Belediyesi" /><br/>
<sub><b>İzmit Belediyesi</b></sub><br/>
<sub><code>IzmitBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kadikoy-bel.svg" width="48" height="48" alt="Kadıköy Belediyesi" /><br/>
<sub><b>Kadıköy Belediyesi</b></sub><br/>
<sub><code>KadikoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kahramankazan-bel.svg" width="48" height="48" alt="Kahramankazan Belediyesi" /><br/>
<sub><b>Kahramankazan Belediyesi</b></sub><br/>
<sub><code>KahramankazanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kalecik-bel.svg" width="48" height="48" alt="Kalecik Belediyesi" /><br/>
<sub><b>Kalecik Belediyesi</b></sub><br/>
<sub><code>KalecikBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kalkandere-bel.svg" width="48" height="48" alt="Kalkandere Belediyesi" /><br/>
<sub><b>Kalkandere Belediyesi</b></sub><br/>
<sub><code>KalkandereBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karabaglar-bel.svg" width="48" height="48" alt="Karabağlar Belediyesi" /><br/>
<sub><b>Karabağlar Belediyesi</b></sub><br/>
<sub><code>KarabaglarBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karaburun-bel.svg" width="48" height="48" alt="Karaburun Belediyesi" /><br/>
<sub><b>Karaburun Belediyesi</b></sub><br/>
<sub><code>KaraburunBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karaman-bel.svg" width="48" height="48" alt="Karaman Belediyesi" /><br/>
<sub><b>Karaman Belediyesi</b></sub><br/>
<sub><code>KaramanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karamursel-bel.svg" width="48" height="48" alt="Karamürsel Belediyesi" /><br/>
<sub><b>Karamürsel Belediyesi</b></sub><br/>
<sub><code>KaramurselBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karayaka-bel.svg" width="48" height="48" alt="Karayaka Belediyesi" /><br/>
<sub><b>Karayaka Belediyesi</b></sub><br/>
<sub><code>KarayakaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karesi-bel.svg" width="48" height="48" alt="Karesi Belediyesi" /><br/>
<sub><b>Karesi Belediyesi</b></sub><br/>
<sub><code>KaresiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/karsiyaka-bel.svg" width="48" height="48" alt="Karşıyaka Belediyesi" /><br/>
<sub><b>Karşıyaka Belediyesi</b></sub><br/>
<sub><code>KarsiyakaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kastamonu-bel.svg" width="48" height="48" alt="Kastamonu Belediyesi" /><br/>
<sub><b>Kastamonu Belediyesi</b></sub><br/>
<sub><code>KastamonuBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kavakli-bel.svg" width="48" height="48" alt="Kavaklı Belediyesi" /><br/>
<sub><b>Kavaklı Belediyesi</b></sub><br/>
<sub><code>KavakliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kayapinar-bel.svg" width="48" height="48" alt="Kayapınar Belediyesi" /><br/>
<sub><b>Kayapınar Belediyesi</b></sub><br/>
<sub><code>KayapinarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kepsut-bel.svg" width="48" height="48" alt="Kepsut Belediyesi" /><br/>
<sub><b>Kepsut Belediyesi</b></sub><br/>
<sub><code>KepsutBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kestel-bel.svg" width="48" height="48" alt="Kestel Belediyesi" /><br/>
<sub><b>Kestel Belediyesi</b></sub><br/>
<sub><code>KestelBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kirikhan-bel.svg" width="48" height="48" alt="Kırıkhan Belediyesi" /><br/>
<sub><b>Kırıkhan Belediyesi</b></sub><br/>
<sub><code>KirikhanBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kirsehir-bel.svg" width="48" height="48" alt="Kırşehir Belediyesi" /><br/>
<sub><b>Kırşehir Belediyesi</b></sub><br/>
<sub><code>KirsehirBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kocaali-bel.svg" width="48" height="48" alt="Kocaali Belediyesi" /><br/>
<sub><b>Kocaali Belediyesi</b></sub><br/>
<sub><code>KocaaliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kocaeli-bel.svg" width="48" height="48" alt="Kocaeli Büyükşehir Belediyesi" /><br/>
<sub><b>Kocaeli Büyükşehir Belediyesi</b></sub><br/>
<sub><code>KocaeliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kocarli-bel.svg" width="48" height="48" alt="Koçarlı Belediyesi" /><br/>
<sub><b>Koçarlı Belediyesi</b></sub><br/>
<sub><code>KocarliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kocasinan-bel.svg" width="48" height="48" alt="Kocasinan Belediyesi" /><br/>
<sub><b>Kocasinan Belediyesi</b></sub><br/>
<sub><code>KocasinanBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kofcaz-bel.svg" width="48" height="48" alt="Kofçaz Belediyesi" /><br/>
<sub><b>Kofçaz Belediyesi</b></sub><br/>
<sub><code>KofcazBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/konak-bel.svg" width="48" height="48" alt="Konak Belediyesi" /><br/>
<sub><b>Konak Belediyesi</b></sub><br/>
<sub><code>KonakBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/konyaalti-bel.svg" width="48" height="48" alt="Konyaaltı Belediyesi" /><br/>
<sub><b>Konyaaltı Belediyesi</b></sub><br/>
<sub><code>KonyaaltiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/koru-bel.svg" width="48" height="48" alt="Koru Belediyesi" /><br/>
<sub><b>Koru Belediyesi</b></sub><br/>
<sub><code>KoruBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kovancilar-bel.svg" width="48" height="48" alt="Kovancılar Belediyesi" /><br/>
<sub><b>Kovancılar Belediyesi</b></sub><br/>
<sub><code>KovancilarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kucukcekmece-bel.svg" width="48" height="48" alt="Küçükçekmece Belediyesi" /><br/>
<sub><b>Küçükçekmece Belediyesi</b></sub><br/>
<sub><code>KucukcekmeceBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kula-bel.svg" width="48" height="48" alt="Kula Belediyesi" /><br/>
<sub><b>Kula Belediyesi</b></sub><br/>
<sub><code>KulaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kuleonu-bel.svg" width="48" height="48" alt="Kuleönü Belediyesi" /><br/>
<sub><b>Kuleönü Belediyesi</b></sub><br/>
<sub><code>KuleonuBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kusadasi-bel.svg" width="48" height="48" alt="Kuşadası Belediyesi" /><br/>
<sub><b>Kuşadası Belediyesi</b></sub><br/>
<sub><code>KusadasiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/kuyucak-bel.svg" width="48" height="48" alt="Kuyucak Belediyesi" /><br/>
<sub><b>Kuyucak Belediyesi</b></sub><br/>
<sub><code>KuyucakBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/luleburgaz-bel.svg" width="48" height="48" alt="Lüleburgaz Belediyesi" /><br/>
<sub><b>Lüleburgaz Belediyesi</b></sub><br/>
<sub><code>LuleburgazBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/mamak-bel.svg" width="48" height="48" alt="Mamak Belediyesi" /><br/>
<sub><b>Mamak Belediyesi</b></sub><br/>
<sub><code>MamakBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/meram-bel.svg" width="48" height="48" alt="Meram Belediyesi" /><br/>
<sub><b>Meram Belediyesi</b></sub><br/>
<sub><code>MeramBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/merkezefendi-bel.svg" width="48" height="48" alt="Merkezefendi Belediyesi" /><br/>
<sub><b>Merkezefendi Belediyesi</b></sub><br/>
<sub><code>MerkezefendiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/mollakoy-bel.svg" width="48" height="48" alt="Mollaköy Belediyesi" /><br/>
<sub><b>Mollaköy Belediyesi</b></sub><br/>
<sub><code>MollakoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/mugla-bel.svg" width="48" height="48" alt="Muğla Büyükşehir Belediyesi" /><br/>
<sub><b>Muğla Büyükşehir Belediyesi</b></sub><br/>
<sub><code>MuglaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/muratpasa-bel.svg" width="48" height="48" alt="Muratpaşa Belediyesi" /><br/>
<sub><b>Muratpaşa Belediyesi</b></sub><br/>
<sub><code>MuratpasaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/murgul-bel.svg" width="48" height="48" alt="Murgul Belediyesi" /><br/>
<sub><b>Murgul Belediyesi</b></sub><br/>
<sub><code>MurgulBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/niksar-bel.svg" width="48" height="48" alt="Niksar Belediyesi" /><br/>
<sub><b>Niksar Belediyesi</b></sub><br/>
<sub><code>NiksarBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/nilufer-bel.svg" width="48" height="48" alt="Nilüfer Belediyesi" /><br/>
<sub><b>Nilüfer Belediyesi</b></sub><br/>
<sub><code>NiluferBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/nurdagi-bel.svg" width="48" height="48" alt="Nurdağı Belediyesi" /><br/>
<sub><b>Nurdağı Belediyesi</b></sub><br/>
<sub><code>NurdagiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/odemis-bel.svg" width="48" height="48" alt="Ödemiş Belediyesi" /><br/>
<sub><b>Ödemiş Belediyesi</b></sub><br/>
<sub><code>OdemisBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/odunpazari-bel.svg" width="48" height="48" alt="Odunpazarı Belediyesi" /><br/>
<sub><b>Odunpazarı Belediyesi</b></sub><br/>
<sub><code>OdunpazariBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/oren-bel.svg" width="48" height="48" alt="Ören Belediyesi" /><br/>
<sub><b>Ören Belediyesi</b></sub><br/>
<sub><code>OrenBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/orhaneli-bel.svg" width="48" height="48" alt="Orhaneli Belediyesi" /><br/>
<sub><b>Orhaneli Belediyesi</b></sub><br/>
<sub><code>OrhaneliBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/orhangazi-bel.svg" width="48" height="48" alt="Orhangazi Belediyesi" /><br/>
<sub><b>Orhangazi Belediyesi</b></sub><br/>
<sub><code>OrhangaziBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/osmaniye-bel.svg" width="48" height="48" alt="Osmaniye Belediyesi" /><br/>
<sub><b>Osmaniye Belediyesi</b></sub><br/>
<sub><code>OsmaniyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/palandoken-bel.svg" width="48" height="48" alt="Palandöken Belediyesi" /><br/>
<sub><b>Palandöken Belediyesi</b></sub><br/>
<sub><code>PalandokenBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/pazaryeri-bel.svg" width="48" height="48" alt="Pazaryeri Belediyesi" /><br/>
<sub><b>Pazaryeri Belediyesi</b></sub><br/>
<sub><code>PazaryeriBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/pehlivankoy-bel.svg" width="48" height="48" alt="Pehlivanköy Belediyesi" /><br/>
<sub><b>Pehlivanköy Belediyesi</b></sub><br/>
<sub><code>PehlivankoyBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/pendik-bel.svg" width="48" height="48" alt="Pendik Belediyesi" /><br/>
<sub><b>Pendik Belediyesi</b></sub><br/>
<sub><code>PendikBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/pertek-bel.svg" width="48" height="48" alt="Pertek Belediyesi" /><br/>
<sub><b>Pertek Belediyesi</b></sub><br/>
<sub><code>PertekBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/polatli-bel.svg" width="48" height="48" alt="Polatlı Belediyesi" /><br/>
<sub><b>Polatlı Belediyesi</b></sub><br/>
<sub><code>PolatliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/refahiye-bel.svg" width="48" height="48" alt="Refahiye Belediyesi" /><br/>
<sub><b>Refahiye Belediyesi</b></sub><br/>
<sub><code>RefahiyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sakarya-bel.svg" width="48" height="48" alt="Sakarya Büyükşehir Belediyesi" /><br/>
<sub><b>Sakarya Büyükşehir Belediyesi</b></sub><br/>
<sub><code>SakaryaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/saltukova-bel.svg" width="48" height="48" alt="Saltukova Belediyesi" /><br/>
<sub><b>Saltukova Belediyesi</b></sub><br/>
<sub><code>SaltukovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/samsun-bel.svg" width="48" height="48" alt="Samsun Büyükşehir Belediyesi" /><br/>
<sub><b>Samsun Büyükşehir Belediyesi</b></sub><br/>
<sub><code>SamsunBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/selcuklu-bel.svg" width="48" height="48" alt="Selçuklu Belediyesi" /><br/>
<sub><b>Selçuklu Belediyesi</b></sub><br/>
<sub><code>SelcukluBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/seydisehir-bel.svg" width="48" height="48" alt="Seydişehir Belediyesi" /><br/>
<sub><b>Seydişehir Belediyesi</b></sub><br/>
<sub><code>SeydisehirBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/seyitgazi-bel.svg" width="48" height="48" alt="Seyitgazi Belediyesi" /><br/>
<sub><b>Seyitgazi Belediyesi</b></sub><br/>
<sub><code>SeyitgaziBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/silivri-bel.svg" width="48" height="48" alt="Silivri Belediyesi" /><br/>
<sub><b>Silivri Belediyesi</b></sub><br/>
<sub><code>SilivriBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/simav-bel.svg" width="48" height="48" alt="Simav Belediyesi" /><br/>
<sub><b>Simav Belediyesi</b></sub><br/>
<sub><code>SimavBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sincan-bel.svg" width="48" height="48" alt="Sincan Belediyesi" /><br/>
<sub><b>Sincan Belediyesi</b></sub><br/>
<sub><code>SincanBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sizir-bel.svg" width="48" height="48" alt="Sızır Belediyesi" /><br/>
<sub><b>Sızır Belediyesi</b></sub><br/>
<sub><code>SizirBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/soke-bel.svg" width="48" height="48" alt="Söke Belediyesi" /><br/>
<sub><b>Söke Belediyesi</b></sub><br/>
<sub><code>SokeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/suhut-bel.svg" width="48" height="48" alt="Şuhut Belediyesi" /><br/>
<sub><b>Şuhut Belediyesi</b></sub><br/>
<sub><code>SuhutBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/suleymanpasa-bel.svg" width="48" height="48" alt="Süleymanpaşa Belediyesi" /><br/>
<sub><b>Süleymanpaşa Belediyesi</b></sub><br/>
<sub><code>SuleymanpasaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sultanbeyli-bel.svg" width="48" height="48" alt="Sultanbeyli Belediyesi" /><br/>
<sub><b>Sultanbeyli Belediyesi</b></sub><br/>
<sub><code>SultanbeyliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sultangazi-bel.svg" width="48" height="48" alt="Sultangazi Belediyesi" /><br/>
<sub><b>Sultangazi Belediyesi</b></sub><br/>
<sub><code>SultangaziBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/sultanhani-bel.svg" width="48" height="48" alt="Sultanhanı Belediyesi" /><br/>
<sub><b>Sultanhanı Belediyesi</b></sub><br/>
<sub><code>SultanhaniBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tanoba-bel.svg" width="48" height="48" alt="Tanoba Belediyesi" /><br/>
<sub><b>Tanoba Belediyesi</b></sub><br/>
<sub><code>TanobaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tefenni-bel.svg" width="48" height="48" alt="Tefenni Belediyesi" /><br/>
<sub><b>Tefenni Belediyesi</b></sub><br/>
<sub><code>TefenniBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tekirdag-bel.svg" width="48" height="48" alt="Tekirdağ Büyükşehir Belediyesi" /><br/>
<sub><b>Tekirdağ Büyükşehir Belediyesi</b></sub><br/>
<sub><code>TekirdagBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tepebasi-bel.svg" width="48" height="48" alt="Tepebaşı Belediyesi" /><br/>
<sub><b>Tepebaşı Belediyesi</b></sub><br/>
<sub><code>TepebasiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tercan-bel.svg" width="48" height="48" alt="Tercan Belediyesi" /><br/>
<sub><b>Tercan Belediyesi</b></sub><br/>
<sub><code>TercanBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tillo-bel.svg" width="48" height="48" alt="Tillo Belediyesi" /><br/>
<sub><b>Tillo Belediyesi</b></sub><br/>
<sub><code>TilloBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tirebolu-bel.svg" width="48" height="48" alt="Tirebolu Belediyesi" /><br/>
<sub><b>Tirebolu Belediyesi</b></sub><br/>
<sub><code>TireboluBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/trabzon-bel.svg" width="48" height="48" alt="Trabzon Büyükşehir Belediyesi" /><br/>
<sub><b>Trabzon Büyükşehir Belediyesi</b></sub><br/>
<sub><code>TrabzonBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tuncbilek-bel.svg" width="48" height="48" alt="Tunçbilek Belediyesi" /><br/>
<sub><b>Tunçbilek Belediyesi</b></sub><br/>
<sub><code>TuncbilekBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/turkmen-bel.svg" width="48" height="48" alt="Türkmen Belediyesi" /><br/>
<sub><b>Türkmen Belediyesi</b></sub><br/>
<sub><code>TurkmenBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/tuzla-bel.svg" width="48" height="48" alt="Tuzla Belediyesi" /><br/>
<sub><b>Tuzla Belediyesi</b></sub><br/>
<sub><code>TuzlaBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/ulus-bel.svg" width="48" height="48" alt="Ulus Belediyesi" /><br/>
<sub><b>Ulus Belediyesi</b></sub><br/>
<sub><code>UlusBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/umraniye-bel.svg" width="48" height="48" alt="Ümraniye Belediyesi" /><br/>
<sub><b>Ümraniye Belediyesi</b></sub><br/>
<sub><code>UmraniyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/unlupinar-bel.svg" width="48" height="48" alt="Ünlüpınar Belediyesi" /><br/>
<sub><b>Ünlüpınar Belediyesi</b></sub><br/>
<sub><code>UnlupinarBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/unye-bel.svg" width="48" height="48" alt="Ünye Belediyesi" /><br/>
<sub><b>Ünye Belediyesi</b></sub><br/>
<sub><code>UnyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/urgup-bel.svg" width="48" height="48" alt="Ürgüp Belediyesi" /><br/>
<sub><b>Ürgüp Belediyesi</b></sub><br/>
<sub><code>UrgupBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/van-bel.svg" width="48" height="48" alt="Van Büyükşehir Belediyesi" /><br/>
<sub><b>Van Büyükşehir Belediyesi</b></sub><br/>
<sub><code>VanBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/vize-bel.svg" width="48" height="48" alt="Vize Belediyesi" /><br/>
<sub><b>Vize Belediyesi</b></sub><br/>
<sub><code>VizeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yakutiye-bel.svg" width="48" height="48" alt="Yakutiye Belediyesi" /><br/>
<sub><b>Yakutiye Belediyesi</b></sub><br/>
<sub><code>YakutiyeBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yalihuyuk-bel.svg" width="48" height="48" alt="Yalıhüyük Belediyesi" /><br/>
<sub><b>Yalıhüyük Belediyesi</b></sub><br/>
<sub><code>YalihuyukBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yalova-bel.svg" width="48" height="48" alt="Yalova Belediyesi" /><br/>
<sub><b>Yalova Belediyesi</b></sub><br/>
<sub><code>YalovaBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yarbasi-bel.svg" width="48" height="48" alt="Yarbaşı Belediyesi" /><br/>
<sub><b>Yarbaşı Belediyesi</b></sub><br/>
<sub><code>YarbasiBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yerkoy-bel.svg" width="48" height="48" alt="Yerköy Belediyesi" /><br/>
<sub><b>Yerköy Belediyesi</b></sub><br/>
<sub><code>YerkoyBelIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yesilyurt-bel.svg" width="48" height="48" alt="Yeşilyurt Belediyesi" /><br/>
<sub><b>Yeşilyurt Belediyesi</b></sub><br/>
<sub><code>YesilyurtBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yildizeli-bel.svg" width="48" height="48" alt="Yıldızeli Belediyesi" /><br/>
<sub><b>Yıldızeli Belediyesi</b></sub><br/>
<sub><code>YildizeliBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yozgat-bel.svg" width="48" height="48" alt="Yozgat Belediyesi" /><br/>
<sub><b>Yozgat Belediyesi</b></sub><br/>
<sub><code>YozgatBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yumurtalik-bel.svg" width="48" height="48" alt="Yumurtalık Belediyesi" /><br/>
<sub><b>Yumurtalık Belediyesi</b></sub><br/>
<sub><code>YumurtalikBelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/belediye/yunusemre-bel.svg" width="48" height="48" alt="Yunusemre Belediyesi" /><br/>
<sub><b>Yunusemre Belediyesi</b></sub><br/>
<sub><code>YunusemreBelIcon</code></sub>
</td>
<td width="16.67%"></td>
</tr>
</table>

### Göktürk Alfabesi

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-a.svg" width="48" height="48" alt="Göktürk harfi A" /><br/>
<sub><b>Göktürk harfi A</b></sub><br/>
<sub><code>GokturkAIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-b1.svg" width="48" height="48" alt="Göktürk harfi B1" /><br/>
<sub><b>Göktürk harfi B1</b></sub><br/>
<sub><code>GokturkB1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-b2.svg" width="48" height="48" alt="Göktürk harfi B2" /><br/>
<sub><b>Göktürk harfi B2</b></sub><br/>
<sub><code>GokturkB2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-ch.svg" width="48" height="48" alt="Göktürk harfi CH" /><br/>
<sub><b>Göktürk harfi CH</b></sub><br/>
<sub><code>GokturkChIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-d1.svg" width="48" height="48" alt="Göktürk harfi D1" /><br/>
<sub><b>Göktürk harfi D1</b></sub><br/>
<sub><code>GokturkD1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-d2.svg" width="48" height="48" alt="Göktürk harfi D2" /><br/>
<sub><b>Göktürk harfi D2</b></sub><br/>
<sub><code>GokturkD2Icon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-g1.svg" width="48" height="48" alt="Göktürk harfi G1" /><br/>
<sub><b>Göktürk harfi G1</b></sub><br/>
<sub><code>GokturkG1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-g2.svg" width="48" height="48" alt="Göktürk harfi G2" /><br/>
<sub><b>Göktürk harfi G2</b></sub><br/>
<sub><code>GokturkG2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-i.svg" width="48" height="48" alt="Göktürk harfi I" /><br/>
<sub><b>Göktürk harfi I</b></sub><br/>
<sub><code>GokturkIIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-ich.svg" width="48" height="48" alt="Göktürk harfi ICH" /><br/>
<sub><b>Göktürk harfi ICH</b></sub><br/>
<sub><code>GokturkIchIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-iq.svg" width="48" height="48" alt="Göktürk harfi IQ" /><br/>
<sub><b>Göktürk harfi IQ</b></sub><br/>
<sub><code>GokturkIqIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-k.svg" width="48" height="48" alt="Göktürk harfi K" /><br/>
<sub><b>Göktürk harfi K</b></sub><br/>
<sub><code>GokturkKIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-l1.svg" width="48" height="48" alt="Göktürk harfi L1" /><br/>
<sub><b>Göktürk harfi L1</b></sub><br/>
<sub><code>GokturkL1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-l2.svg" width="48" height="48" alt="Göktürk harfi L2" /><br/>
<sub><b>Göktürk harfi L2</b></sub><br/>
<sub><code>GokturkL2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-lt.svg" width="48" height="48" alt="Göktürk harfi LT" /><br/>
<sub><b>Göktürk harfi LT</b></sub><br/>
<sub><code>GokturkLtIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-m.svg" width="48" height="48" alt="Göktürk harfi M" /><br/>
<sub><b>Göktürk harfi M</b></sub><br/>
<sub><code>GokturkMIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-n1.svg" width="48" height="48" alt="Göktürk harfi N1" /><br/>
<sub><b>Göktürk harfi N1</b></sub><br/>
<sub><code>GokturkN1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-n2.svg" width="48" height="48" alt="Göktürk harfi N2" /><br/>
<sub><b>Göktürk harfi N2</b></sub><br/>
<sub><code>GokturkN2Icon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-nch.svg" width="48" height="48" alt="Göktürk harfi NCH" /><br/>
<sub><b>Göktürk harfi NCH</b></sub><br/>
<sub><code>GokturkNchIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-ng.svg" width="48" height="48" alt="Göktürk harfi NG" /><br/>
<sub><b>Göktürk harfi NG</b></sub><br/>
<sub><code>GokturkNgIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-nt.svg" width="48" height="48" alt="Göktürk harfi NT" /><br/>
<sub><b>Göktürk harfi NT</b></sub><br/>
<sub><code>GokturkNtIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-ny.svg" width="48" height="48" alt="Göktürk harfi NY" /><br/>
<sub><b>Göktürk harfi NY</b></sub><br/>
<sub><code>GokturkNyIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-o.svg" width="48" height="48" alt="Göktürk harfi O" /><br/>
<sub><b>Göktürk harfi O</b></sub><br/>
<sub><code>GokturkOIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-oq.svg" width="48" height="48" alt="Göktürk harfi OQ" /><br/>
<sub><b>Göktürk harfi OQ</b></sub><br/>
<sub><code>GokturkOqIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-p.svg" width="48" height="48" alt="Göktürk harfi P" /><br/>
<sub><b>Göktürk harfi P</b></sub><br/>
<sub><code>GokturkPIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-q.svg" width="48" height="48" alt="Göktürk harfi Q" /><br/>
<sub><b>Göktürk harfi Q</b></sub><br/>
<sub><code>GokturkQIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-r1.svg" width="48" height="48" alt="Göktürk harfi R1" /><br/>
<sub><b>Göktürk harfi R1</b></sub><br/>
<sub><code>GokturkR1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-r2.svg" width="48" height="48" alt="Göktürk harfi R2" /><br/>
<sub><b>Göktürk harfi R2</b></sub><br/>
<sub><code>GokturkR2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-s1.svg" width="48" height="48" alt="Göktürk harfi S1" /><br/>
<sub><b>Göktürk harfi S1</b></sub><br/>
<sub><code>GokturkS1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-s2.svg" width="48" height="48" alt="Göktürk harfi S2" /><br/>
<sub><b>Göktürk harfi S2</b></sub><br/>
<sub><code>GokturkS2Icon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-sep.svg" width="48" height="48" alt="Göktürk harfi SEP" /><br/>
<sub><b>Göktürk harfi SEP</b></sub><br/>
<sub><code>GokturkSepIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-sh.svg" width="48" height="48" alt="Göktürk harfi SH" /><br/>
<sub><b>Göktürk harfi SH</b></sub><br/>
<sub><code>GokturkShIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-t1.svg" width="48" height="48" alt="Göktürk harfi T1" /><br/>
<sub><b>Göktürk harfi T1</b></sub><br/>
<sub><code>GokturkT1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-t2.svg" width="48" height="48" alt="Göktürk harfi T2" /><br/>
<sub><b>Göktürk harfi T2</b></sub><br/>
<sub><code>GokturkT2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-u.svg" width="48" height="48" alt="Göktürk harfi U" /><br/>
<sub><b>Göktürk harfi U</b></sub><br/>
<sub><code>GokturkUIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-uk.svg" width="48" height="48" alt="Göktürk harfi UK" /><br/>
<sub><b>Göktürk harfi UK</b></sub><br/>
<sub><code>GokturkUkIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-y1.svg" width="48" height="48" alt="Göktürk harfi Y1" /><br/>
<sub><b>Göktürk harfi Y1</b></sub><br/>
<sub><code>GokturkY1Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-y2.svg" width="48" height="48" alt="Göktürk harfi Y2" /><br/>
<sub><b>Göktürk harfi Y2</b></sub><br/>
<sub><code>GokturkY2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/gokturk/gokturk-z.svg" width="48" height="48" alt="Göktürk harfi Z" /><br/>
<sub><b>Göktürk harfi Z</b></sub><br/>
<sub><code>GokturkZIcon</code></sub>
</td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
</tr>
</table>

### Anadolu Kilim Motifleri

<table>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/eli-belinde.svg" width="48" height="48" alt="Eli Belinde" /><br/>
<sub><b>Eli Belinde</b></sub><br/>
<sub><code>EliBelindeIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/koc-boynuzu.svg" width="48" height="48" alt="Koçboynuzu" /><br/>
<sub><b>Koçboynuzu</b></sub><br/>
<sub><code>KocBoynuzuIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/hayat-agaci.svg" width="48" height="48" alt="Hayat Ağacı" /><br/>
<sub><b>Hayat Ağacı</b></sub><br/>
<sub><code>HayatAgaciIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/bereket.svg" width="48" height="48" alt="Bereket" /><br/>
<sub><b>Bereket</b></sub><br/>
<sub><code>BereketIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/ask-ve-birlesim.svg" width="48" height="48" alt="Aşk ve Birleşim" /><br/>
<sub><b>Aşk ve Birleşim</b></sub><br/>
<sub><code>AskVeBirlesimIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/goz.svg" width="48" height="48" alt="Göz" /><br/>
<sub><b>Göz</b></sub><br/>
<sub><code>GozIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/goz2.svg" width="48" height="48" alt="Göz 2" /><br/>
<sub><b>Göz 2</b></sub><br/>
<sub><code>Goz2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/muska.svg" width="48" height="48" alt="Muska" /><br/>
<sub><b>Muska</b></sub><br/>
<sub><code>MuskaIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/akrep.svg" width="48" height="48" alt="Akrep" /><br/>
<sub><b>Akrep</b></sub><br/>
<sub><code>AkrepIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/pitrak.svg" width="48" height="48" alt="Pıtrak" /><br/>
<sub><b>Pıtrak</b></sub><br/>
<sub><code>PitrakIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/cengel.svg" width="48" height="48" alt="Çengel" /><br/>
<sub><b>Çengel</b></sub><br/>
<sub><code>CengelIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/tarak.svg" width="48" height="48" alt="Tarak" /><br/>
<sub><b>Tarak</b></sub><br/>
<sub><code>TarakIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/tarak2.svg" width="48" height="48" alt="Tarak 2" /><br/>
<sub><b>Tarak 2</b></sub><br/>
<sub><code>Tarak2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/yildiz.svg" width="48" height="48" alt="Yıldız" /><br/>
<sub><b>Yıldız</b></sub><br/>
<sub><code>YildizMotifIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/yildiz2.svg" width="48" height="48" alt="Yıldız 2" /><br/>
<sub><b>Yıldız 2</b></sub><br/>
<sub><code>Yildiz2Icon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/insan.svg" width="48" height="48" alt="İnsan" /><br/>
<sub><b>İnsan</b></sub><br/>
<sub><code>InsanIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/bukagi.svg" width="48" height="48" alt="Bukağı" /><br/>
<sub><b>Bukağı</b></sub><br/>
<sub><code>BukagiIcon</code></sub>
</td>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/sandikli.svg" width="48" height="48" alt="Sandıklı" /><br/>
<sub><b>Sandıklı</b></sub><br/>
<sub><code>SandikliIcon</code></sub>
</td>
</tr>
<tr>
<td align="center" valign="top" width="16.67%">
<img src="docs/readme/motif/sacbagi.svg" width="48" height="48" alt="Saçbağı" /><br/>
<sub><b>Saçbağı</b></sub><br/>
<sub><code>SacbagiIcon</code></sub>
</td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
<td width="16.67%"></td>
</tr>
</table>
<!-- CATALOG:END -->

## Geliştirme

```bash
pnpm install
pnpm build
```

`pnpm build` sırası: `optimize` (SVGO) → README önizleme (48×48 viewport) → README katalog ızgarası → `build:react` (SVGR) → `tsup` (ESM + CJS + d.ts).

## Katkı

Eksik üniversite, kamu, belediye logosu veya kilim motifini ekleyebilirsiniz. Dosyayı ilgili kategori klasörüne koyun, örneğin:

```
raw-icons/universite/ege-uni.svg
```

Ardından `scripts/data/brands.json` içine `id`, `title`, `hexColor` ve `website` ekleyip `pnpm build` çalıştırın.

Ayrıntılar: [CONTRIBUTING.md](./CONTRIBUTING.md).

## Yasal feragatname (Trademark Disclaimer)

Bu projede yer alan marka adları, logolar, amblemler ve diğer görsel varlıklar ilgili kurum, kuruluş ve şirketlerin tescilli veya tescilsiz markalarıdır. Bu varlıklara ilişkin telif, marka ve diğer fikri mülkiyet hakları ilgili hak sahiplerine aittir.

Anatolia Icons, söz konusu kurum, kuruluş veya şirketlerle bağlantılı, onaylı, desteklenen veya resmi bir proje değildir. Logolar; geliştirici kolaylığı, tanıtım ve eğitim amaçları doğrultusunda SVG ikonları olarak sunulmaktadır.

Bir marka veya logo hak sahibi tarafından projede yer almasının uygun olmadığı düşünülüyorsa, ilgili yetkili kişi veya kurum proje sahibiyle iletişime geçerek söz konusu varlığın kaldırılmasını talep edebilir. Kaldırma talepleri ayrıca ilgili ikon için Pull Request veya GitHub Issue üzerinden de iletilebilir.

Kaldırma talepleri makul süre içerisinde değerlendirilecek ve gerekli görülmesi halinde ilgili marka veya logo projeden kaldırılacaktır.

Marka ve logo varlıklarının ticari kullanımından önce ilgili hak sahibinin lisans, kullanım ve marka koşullarının ayrıca kontrol edilmesi önerilir.

Bu projedeki veriler scraping (web kazıma) ile elde edilmiş olabilir. Kullanmadan önce doğruluğunu kontrol ettiğinizden emin olunuz.

## Lisans

Kod [MIT](./LICENSE) lisansı altındadır. Marka varlıkları MIT kapsamına girmez; hakları sahiplerinde kalır.
