/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

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
export const brands: BrandCategory[] = [
  {
    "category": "kamu",
    "categoryTitle": "Kamu & Devlet Kurumları",
    "icons": [
      {
        "id": "edevlet",
        "title": "e-Devlet Kapısı",
        "hexColor": "#E30A17",
        "website": "https://www.turkiye.gov.tr",
        "componentName": "EdevletIcon"
      },
      {
        "id": "tc-cumhurbaskanligi",
        "title": "T.C. Cumhurbaşkanlığı Forsu",
        "hexColor": "#C60B1E",
        "website": "https://www.tccb.gov.tr",
        "componentName": "TcCumhurbaskanligiIcon"
      },
      {
        "id": "tubitak",
        "title": "TÜBİTAK",
        "hexColor": "#0055A4",
        "website": "https://www.tubitak.gov.tr",
        "componentName": "TubitakIcon"
      },
      {
        "id": "ptt",
        "title": "PTT",
        "hexColor": "#FFDD00",
        "website": "https://www.ptt.gov.tr",
        "componentName": "PttIcon"
      },
      {
        "id": "tcdd",
        "title": "TCDD",
        "hexColor": "#00539F",
        "website": "https://www.tcdd.gov.tr",
        "componentName": "TcddIcon"
      },
      {
        "id": "kgm",
        "title": "Karayolları Genel Müdürlüğü",
        "hexColor": "#E30A17",
        "website": "https://www.kgm.gov.tr",
        "componentName": "KgmIcon"
      },
      {
        "id": "tse",
        "title": "Türk Standardları Enstitüsü",
        "hexColor": "#004B87",
        "website": "https://www.tse.org.tr",
        "componentName": "TseIcon"
      }
    ]
  },
  {
    "category": "universite",
    "categoryTitle": "Devlet Üniversiteleri",
    "icons": [
      {
        "id": "gazi-uni",
        "title": "Gazi Üniversitesi",
        "hexColor": "#005C99",
        "website": "https://gazi.edu.tr",
        "componentName": "GaziUniIcon"
      },
      {
        "id": "odtu",
        "title": "Orta Doğu Teknik Üniversitesi",
        "hexColor": "#C72439",
        "website": "https://www.metu.edu.tr",
        "componentName": "OdtuIcon"
      },
      {
        "id": "itu",
        "title": "İstanbul Teknik Üniversitesi",
        "hexColor": "#002855",
        "website": "https://www.itu.edu.tr",
        "componentName": "ItuIcon"
      },
      {
        "id": "boun",
        "title": "Boğaziçi Üniversitesi",
        "hexColor": "#003A70",
        "website": "https://bogazici.edu.tr",
        "componentName": "BounIcon"
      },
      {
        "id": "ankara-uni",
        "title": "Ankara Üniversitesi",
        "hexColor": "#002060",
        "website": "https://ankara.edu.tr",
        "componentName": "AnkaraUniIcon"
      },
      {
        "id": "kocaeli-uni",
        "title": "Kocaeli Üniversitesi",
        "hexColor": "#007A3D",
        "website": "https://www.kocaeli.edu.tr",
        "componentName": "KocaeliUniIcon"
      },
      {
        "id": "agu",
        "title": "Abdullah Gül Üniversitesi",
        "hexColor": "#16130F",
        "website": "https://www.agu.edu.tr",
        "componentName": "AguIcon"
      },
      {
        "id": "adiyaman",
        "title": "Adıyaman Üniversitesi",
        "hexColor": "#0071B4",
        "website": "https://www.adiyaman.edu.tr/",
        "componentName": "AdiyamanIcon"
      },
      {
        "id": "altinbas",
        "title": "Altınbaş Üniversitesi",
        "hexColor": "#212C55",
        "website": "https://www.altinbas.edu.tr/tr",
        "componentName": "AltinbasIcon"
      },
      {
        "id": "amasya",
        "title": "Amasya Üniversitesi",
        "hexColor": "#1D1D1B",
        "website": "https://www.amasya.edu.tr",
        "componentName": "AmasyaIcon"
      },
      {
        "id": "anadolu",
        "title": "Anadolu Üniversitesi",
        "hexColor": "#A52632",
        "website": "https://www.anadolu.edu.tr/",
        "componentName": "AnadoluIcon"
      },
      {
        "id": "hacibayram",
        "title": "Ankara Hacı Bayram Veli Üniversitesi",
        "hexColor": "#E6282D",
        "website": "https://hacibayram.edu.tr",
        "componentName": "HacibayramIcon"
      },
      {
        "id": "aybu",
        "title": "Ankara Yıldırım Beyazıt Üniversitesi",
        "hexColor": "#002D74",
        "website": "https://www.aybu.edu.tr",
        "componentName": "AybuIcon"
      },
      {
        "id": "belek",
        "title": "Antalya Belek Üniversitesi",
        "hexColor": "#E4000C",
        "website": "https://www.belek.edu.tr",
        "componentName": "BelekIcon"
      },
      {
        "id": "antalya",
        "title": "Antalya Bilim Üniversitesi",
        "hexColor": "#00ABC8",
        "website": "https://www.antalya.edu.tr/",
        "componentName": "AntalyaIcon"
      },
      {
        "id": "adiguzel",
        "title": "Ataşehir Adıgüzel Meslek Yüksekokulu",
        "hexColor": "#1A4988",
        "website": "https://www.adiguzel.edu.tr/",
        "componentName": "AdiguzelIcon"
      },
      {
        "id": "atilim",
        "title": "Atılım Üniversitesi",
        "hexColor": "#233574",
        "website": "https://www.atilim.edu.tr",
        "componentName": "AtilimIcon"
      },
      {
        "id": "adu",
        "title": "Aydın Adnan Menderes Üniversitesi",
        "hexColor": "#25338B",
        "website": "https://www.adu.edu.tr",
        "componentName": "AduIcon"
      },
      {
        "id": "bayburt",
        "title": "Bayburt Üniversitesi",
        "hexColor": "#004C98",
        "website": "https://bayburt.edu.tr",
        "componentName": "BayburtIcon"
      },
      {
        "id": "baskent",
        "title": "Başkent Üniversitesi",
        "hexColor": "#DD2027",
        "website": "https://www.baskent.edu.tr",
        "componentName": "BaskentIcon"
      },
      {
        "id": "beykoz",
        "title": "Beykoz Üniversitesi",
        "hexColor": "#7F262A",
        "website": "https://www.beykoz.edu.tr",
        "componentName": "BeykozIcon"
      },
      {
        "id": "biruni",
        "title": "Biruni Üniversitesi",
        "hexColor": "#0C4C8F",
        "website": "https://www.biruni.edu.tr/",
        "componentName": "BiruniIcon"
      },
      {
        "id": "mehmetakif",
        "title": "Burdur Mehmet Akif Ersoy Üniversitesi",
        "hexColor": "#3A2667",
        "website": "https://www.mehmetakif.edu.tr",
        "componentName": "MehmetakifIcon"
      },
      {
        "id": "uludag",
        "title": "Bursa Uludağ Üniversitesi",
        "hexColor": "#14387F",
        "website": "https://www.uludag.edu.tr/",
        "componentName": "UludagIcon"
      },
      {
        "id": "duzce",
        "title": "Düzce Üniversitesi",
        "hexColor": "#1ECAD3",
        "website": "https://www.duzce.edu.tr/",
        "componentName": "DuzceIcon"
      },
      {
        "id": "ege",
        "title": "Ege Üniversitesi",
        "hexColor": "#252468",
        "website": "https://www.ege.edu.tr",
        "componentName": "EgeIcon"
      },
      {
        "id": "erciyes",
        "title": "Erciyes Üniversitesi",
        "hexColor": "#1F3685",
        "website": "https://www.erciyes.edu.tr",
        "componentName": "ErciyesIcon"
      },
      {
        "id": "ebyu",
        "title": "Erzincan Binali Yıldırım Üniversitesi",
        "hexColor": "#9A8244",
        "website": "https://www.ebyu.edu.tr",
        "componentName": "EbyuIcon"
      },
      {
        "id": "erzurum",
        "title": "Erzurum Teknik Üniversitesi",
        "hexColor": "#77ACD4",
        "website": "https://www.erzurum.edu.tr/",
        "componentName": "ErzurumIcon"
      },
      {
        "id": "eskisehir",
        "title": "Eskişehir Teknik Üniversitesi",
        "hexColor": "#B11A29",
        "website": "https://www.eskisehir.edu.tr/",
        "componentName": "EskisehirIcon"
      },
      {
        "id": "fsm",
        "title": "Fatih Sultan Mehmet Vakıf Üniversitesi",
        "hexColor": "#006580",
        "website": "https://www.fsm.edu.tr",
        "componentName": "FsmIcon"
      },
      {
        "id": "fbu",
        "title": "Fenerbahçe Üniversitesi",
        "hexColor": "#01427F",
        "website": "https://www.fbu.edu.tr",
        "componentName": "FbuIcon"
      },
      {
        "id": "firat",
        "title": "Fırat Üniversitesi",
        "hexColor": "#1D1D1B",
        "website": "https://www.firat.edu.tr/",
        "componentName": "FiratIcon"
      },
      {
        "id": "gantep",
        "title": "Gaziantep Üniversitesi",
        "hexColor": "#CA0928",
        "website": "https://www.gantep.edu.tr",
        "componentName": "GantepIcon"
      },
      {
        "id": "gumushane",
        "title": "Gümüşhane Üniversitesi",
        "hexColor": "#CF0A2C",
        "website": "https://www.gumushane.edu.tr",
        "componentName": "GumushaneIcon"
      },
      {
        "id": "hacettepe",
        "title": "Hacettepe Üniversitesi",
        "hexColor": "#ED1E24",
        "website": "https://hacettepe.edu.tr",
        "componentName": "HacettepeIcon"
      },
      {
        "id": "hakkari",
        "title": "Hakkari Üniversitesi",
        "hexColor": "#1955A6",
        "website": "https://www.hakkari.edu.tr / www.hu.edu.tr",
        "componentName": "HakkariIcon"
      },
      {
        "id": "halic",
        "title": "Haliç Üniversitesi",
        "hexColor": "#CFAD45",
        "website": "https://www.halic.edu.tr",
        "componentName": "HalicIcon"
      },
      {
        "id": "hitit",
        "title": "Hitit Üniversitesi",
        "hexColor": "#EE7623",
        "website": "https://www.hitit.edu.tr/",
        "componentName": "HititIcon"
      },
      {
        "id": "igdir",
        "title": "Iğdır Üniversitesi",
        "hexColor": "#006EAA",
        "website": "https://www.igdir.edu.tr",
        "componentName": "IgdirIcon"
      },
      {
        "id": "kafkas",
        "title": "Kafkas Üniversitesi",
        "hexColor": "#00ADBA",
        "website": "https://www.kafkas.edu.tr",
        "componentName": "KafkasIcon"
      },
      {
        "id": "ktu",
        "title": "Karadeniz Teknik Üniversitesi",
        "hexColor": "#00406C",
        "website": "https://www.ktu.edu.tr",
        "componentName": "KtuIcon"
      },
      {
        "id": "ktun",
        "title": "Konya Teknik Üniversitesi",
        "hexColor": "#BB1616",
        "website": "https://www.ktun.edu.tr/",
        "componentName": "KtunIcon"
      },
      {
        "id": "ku",
        "title": "Koç Üniversitesi",
        "hexColor": "#AB162B",
        "website": "https://www.ku.edu.tr",
        "componentName": "KuIcon"
      },
      {
        "id": "kku",
        "title": "Kırıkkale Üniversitesi",
        "hexColor": "#2C3E50",
        "website": "https://kku.edu.tr",
        "componentName": "KkuIcon"
      },
      {
        "id": "ahievran",
        "title": "Kırşehir Ahi Evran Üniversitesi",
        "hexColor": "#0053A2",
        "website": "https://www.ahievran.edu.tr",
        "componentName": "AhievranIcon"
      },
      {
        "id": "lokmanhekim",
        "title": "Lokman Hekim Üniversitesi",
        "hexColor": "#0089CF",
        "website": "https://www.lokmanhekim.edu.tr",
        "componentName": "LokmanhekimIcon"
      },
      {
        "id": "ozal",
        "title": "Malatya Turgut Özal Üniversitesi",
        "hexColor": "#EF7D00",
        "website": "https://www.ozal.edu.tr",
        "componentName": "OzalIcon"
      },
      {
        "id": "artuklu",
        "title": "Mardin Artuklu Üniversitesi",
        "hexColor": "#901860",
        "website": "https://www.artuklu.edu.tr/",
        "componentName": "ArtukluIcon"
      },
      {
        "id": "marmara",
        "title": "Marmara Üniversitesi",
        "hexColor": "#1C1C1A",
        "website": "https://www.marmara.edu.tr",
        "componentName": "MarmaraIcon"
      },
      {
        "id": "mersin",
        "title": "Mersin Üniversitesi",
        "hexColor": "#1F2855",
        "website": "https://www.mersin.edu.tr/idari/genel-sekreterlik",
        "componentName": "MersinIcon"
      },
      {
        "id": "msgsu",
        "title": "Mimar Sinan Güzel Sanatlar Üniversitesi",
        "hexColor": "#0C0C84",
        "website": "https://www.msgsu.edu.tr",
        "componentName": "MsgsuIcon"
      },
      {
        "id": "munzur",
        "title": "Munzur Üniversitesi",
        "hexColor": "#D5C694",
        "website": "https://www.munzur.edu.tr",
        "componentName": "MunzurIcon"
      },
      {
        "id": "mu",
        "title": "Muğla Sıtkı Koçman Üniversitesi",
        "hexColor": "#2B3089",
        "website": "https://www.mu.edu.tr/",
        "componentName": "MuIcon"
      },
      {
        "id": "alparslan",
        "title": "Muş Alparslan Üniversitesi",
        "hexColor": "#010101",
        "website": "https://www.alparslan.edu.tr",
        "componentName": "AlparslanIcon"
      },
      {
        "id": "ohu",
        "title": "Niğde Ömer Halisdemir Üniversitesi",
        "hexColor": "#008DA3",
        "website": "https://www.ohu.edu.tr/",
        "componentName": "OhuIcon"
      },
      {
        "id": "omu",
        "title": "Ondokuz Mayıs Üniversitesi",
        "hexColor": "#C0303C",
        "website": "https://www.omu.edu.tr/",
        "componentName": "OmuIcon"
      },
      {
        "id": "odu",
        "title": "Ordu Üniversitesi",
        "hexColor": "#4B4E69",
        "website": "https://www.odu.edu.tr",
        "componentName": "OduIcon"
      },
      {
        "id": "pau",
        "title": "Pamukkale Üniversitesi",
        "hexColor": "#004684",
        "website": "https://www.pau.edu.tr",
        "componentName": "PauIcon"
      },
      {
        "id": "sabanciuniv",
        "title": "Sabancı Üniversitesi",
        "hexColor": "#004288",
        "website": "https://www.sabanciuniv.edu",
        "componentName": "SabanciunivIcon"
      },
      {
        "id": "subu",
        "title": "Sakarya Uygulamalı Bilimler Üniversitesi",
        "hexColor": "#003AA7",
        "website": "https://www.subu.edu.tr",
        "componentName": "SubuIcon"
      },
      {
        "id": "sakarya",
        "title": "Sakarya Üniversitesi",
        "hexColor": "#0D3174",
        "website": "https://www.sakarya.edu.tr",
        "componentName": "SakaryaIcon"
      },
      {
        "id": "sanko",
        "title": "Sanko Üniversitesi",
        "hexColor": "#2D297D",
        "website": "https://www.sanko.edu.tr",
        "componentName": "SankoIcon"
      },
      {
        "id": "tarsus",
        "title": "Tarsus Üniversitesi",
        "hexColor": "#21416A",
        "website": "https://www.tarsus.edu.tr",
        "componentName": "TarsusIcon"
      },
      {
        "id": "nku",
        "title": "Tekirdağ Namık Kemal Üniversitesi",
        "hexColor": "#000F9F",
        "website": "https://www.nku.edu.tr",
        "componentName": "NkuIcon"
      },
      {
        "id": "gop",
        "title": "Tokat Gaziosmanpaşa Üniversitesi",
        "hexColor": "#0097BF",
        "website": "https://www.gop.edu.tr",
        "componentName": "GopIcon"
      },
      {
        "id": "usak",
        "title": "Uşak Üniversitesi",
        "hexColor": "#234577",
        "website": "https://www.usak.edu.tr",
        "componentName": "UsakIcon"
      },
      {
        "id": "yildiz",
        "title": "Yıldız Teknik Üniversitesi",
        "hexColor": "#222B57",
        "website": "https://www.yildiz.edu.tr",
        "componentName": "YildizUniversiteIcon"
      },
      {
        "id": "karatekin",
        "title": "Çankırı Karatekin Üniversitesi",
        "hexColor": "#063653",
        "website": "https://www.karatekin.edu.tr",
        "componentName": "KaratekinIcon"
      },
      {
        "id": "cu",
        "title": "Çukurova Üniversitesi",
        "hexColor": "#005D22",
        "website": "https://www.cu.edu.tr",
        "componentName": "CuIcon"
      },
      {
        "id": "ozyegin",
        "title": "Özyeğin Üniversitesi",
        "hexColor": "#C80065",
        "website": "https://www.ozyegin.edu.tr",
        "componentName": "OzyeginIcon"
      },
      {
        "id": "ihu",
        "title": "İbn Haldun Üniversitesi",
        "hexColor": "#A32035",
        "website": "https://www.ihu.edu.tr",
        "componentName": "IhuIcon"
      },
      {
        "id": "29mayis",
        "title": "İstanbul 29 Mayıs Üniversitesi",
        "hexColor": "#006CA7",
        "website": "https://www.29mayis.edu.tr",
        "componentName": "YirmiDokuzMayisIcon"
      },
      {
        "id": "arel",
        "title": "İstanbul Arel Üniversitesi",
        "hexColor": "#B59555",
        "website": "https://www.arel.edu.tr",
        "componentName": "ArelIcon"
      },
      {
        "id": "atlas",
        "title": "İstanbul Atlas Üniversitesi",
        "hexColor": "#005581",
        "website": "https://www.atlas.edu.tr",
        "componentName": "AtlasIcon"
      },
      {
        "id": "aydin",
        "title": "İstanbul Aydın Üniversitesi",
        "hexColor": "#1B3281",
        "website": "https://www.aydin.edu.tr",
        "componentName": "AydinIcon"
      },
      {
        "id": "bilgi",
        "title": "İstanbul Bilgi Üniversitesi",
        "hexColor": "#231F20",
        "website": "https://www.bilgi.edu.tr",
        "componentName": "BilgiIcon"
      },
      {
        "id": "iku",
        "title": "İstanbul Kültür Üniversitesi",
        "hexColor": "#FC0000",
        "website": "https://www.iku.edu.tr",
        "componentName": "IkuIcon"
      },
      {
        "id": "medeniyet",
        "title": "İstanbul Medeniyet Üniversitesi",
        "hexColor": "#10CFC9",
        "website": "https://www.medeniyet.edu.tr",
        "componentName": "MedeniyetIcon"
      },
      {
        "id": "istun",
        "title": "İstanbul Sağlık ve Teknoloji Üniversitesi",
        "hexColor": "#B40C18",
        "website": "https://www.istun.edu.tr",
        "componentName": "IstunIcon"
      },
      {
        "id": "topkapi",
        "title": "İstanbul Topkapı Üniversitesi",
        "hexColor": "#8A1328",
        "website": "https://www.topkapi.edu.tr",
        "componentName": "TopkapiIcon"
      },
      {
        "id": "istanbul",
        "title": "İstanbul Üniversitesi",
        "hexColor": "#00733D",
        "website": "https://www.istanbul.edu.tr",
        "componentName": "IstanbulIcon"
      },
      {
        "id": "iuc",
        "title": "İstanbul Üniversitesi-cerrahpaşa",
        "hexColor": "#D4A940",
        "website": "https://iuc.edu.tr",
        "componentName": "IucIcon"
      },
      {
        "id": "sisli",
        "title": "İstanbul Şişli Meslek Yüksekokulu",
        "hexColor": "#74AF27",
        "website": "https://www.sisli.edu.tr",
        "componentName": "SisliIcon"
      },
      {
        "id": "istinye",
        "title": "İstinye Üniversitesi",
        "hexColor": "#0080BB",
        "website": "https://www.istinye.edu.tr",
        "componentName": "IstinyeIcon"
      },
      {
        "id": "bakircay",
        "title": "İzmir Bakırçay Üniversitesi",
        "hexColor": "#00A5B5",
        "website": "https://bakircay.edu.tr",
        "componentName": "BakircayIcon"
      }
    ]
  },
  {
    "category": "teknoloji",
    "categoryTitle": "Teknoloji, Savunma & Açık Kaynak",
    "icons": [
      {
        "id": "pardus",
        "title": "Pardus",
        "hexColor": "#F7941E",
        "website": "https://www.pardus.org.tr",
        "componentName": "PardusIcon"
      },
      {
        "id": "aselsan",
        "title": "ASELSAN",
        "hexColor": "#00579A",
        "website": "https://www.aselsan.com",
        "componentName": "AselsanIcon"
      },
      {
        "id": "havelsan",
        "title": "HAVELSAN",
        "hexColor": "#003A70",
        "website": "https://www.havelsan.com",
        "componentName": "HavelsanIcon"
      },
      {
        "id": "roketsan",
        "title": "ROKETSAN",
        "hexColor": "#E30613",
        "website": "https://www.roketsan.com.tr",
        "componentName": "RoketsanIcon"
      },
      {
        "id": "kodluyoruz",
        "title": "Kodluyoruz",
        "hexColor": "#FF6B00",
        "website": "https://www.kodluyoruz.org",
        "componentName": "KodluyoruzIcon"
      },
      {
        "id": "lkd",
        "title": "Linux Kullanıcıları Derneği",
        "hexColor": "#2C3E50",
        "website": "https://www.lkd.org.tr",
        "componentName": "LkdIcon"
      }
    ]
  },
  {
    "category": "finans",
    "categoryTitle": "Finans & Ödeme Standartları",
    "icons": [
      {
        "id": "tl-simgesi",
        "title": "Türk Lirası Simgesi (₺)",
        "hexColor": "#000000",
        "website": "https://www.tcmb.gov.tr",
        "componentName": "TlSimgesiIcon"
      },
      {
        "id": "troy",
        "title": "TROY",
        "hexColor": "#00AEEF",
        "website": "https://troyodeme.com",
        "componentName": "TroyIcon"
      },
      {
        "id": "bkm",
        "title": "BKM Express",
        "hexColor": "#E30A17",
        "website": "https://bkmexpress.com.tr",
        "componentName": "BkmIcon"
      }
    ]
  },
  {
    "category": "belediye",
    "categoryTitle": "Büyükşehir Belediyeleri",
    "icons": [
      {
        "id": "ibb",
        "title": "İstanbul Büyükşehir Belediyesi",
        "hexColor": "#1D3A6B",
        "website": "https://www.ibb.istanbul",
        "componentName": "IbbIcon"
      },
      {
        "id": "abb",
        "title": "Ankara Büyükşehir Belediyesi",
        "hexColor": "#003366",
        "website": "https://www.ankara.bel.tr",
        "componentName": "AbbIcon"
      },
      {
        "id": "kocaeli-bb",
        "title": "Kocaeli Büyükşehir Belediyesi",
        "hexColor": "#00A859",
        "website": "https://www.kocaeli.bel.tr",
        "componentName": "KocaeliBbIcon"
      },
      {
        "id": "adapazari-bel",
        "title": "Adapazarı Belediyesi",
        "hexColor": "#102D5D",
        "website": "https://www.adapazari.bel.tr",
        "componentName": "AdapazariBelIcon"
      },
      {
        "id": "adiyaman-bel",
        "title": "Adıyaman Belediyesi",
        "hexColor": "#102757",
        "website": "https://www.adiyaman.bel.tr",
        "componentName": "AdiyamanBelIcon"
      },
      {
        "id": "agri-bel",
        "title": "Ağrı Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.agri.bel.tr",
        "componentName": "AgriBelIcon"
      },
      {
        "id": "aliaga-bel",
        "title": "Aliağa Belediyesi",
        "hexColor": "#00A0E3",
        "website": "https://www.aliaga.bel.tr",
        "componentName": "AliagaBelIcon"
      },
      {
        "id": "altindag-bel",
        "title": "Altındağ Belediyesi",
        "hexColor": "#5F95AE",
        "website": "https://www.altindag.bel.tr",
        "componentName": "AltindagBelIcon"
      },
      {
        "id": "altinozu-bel",
        "title": "Altınözü Belediyesi",
        "hexColor": "#C6C734",
        "website": "https://www.altinozu.bel.tr",
        "componentName": "AltinozuBelIcon"
      },
      {
        "id": "arifiye-bel",
        "title": "Arifiye Belediyesi",
        "hexColor": "#F7A600",
        "website": "https://www.arifiye.bel.tr",
        "componentName": "ArifiyeBelIcon"
      },
      {
        "id": "armutlu-bel",
        "title": "Armutlu Belediyesi",
        "hexColor": "#1A1A18",
        "website": "https://www.armutlu.bel.tr",
        "componentName": "ArmutluBelIcon"
      },
      {
        "id": "arnavutkoy-bel",
        "title": "Arnavutköy Belediyesi",
        "hexColor": "#00539F",
        "website": "http://www.arnavutkoy.gov.tr/",
        "componentName": "ArnavutkoyBelIcon"
      },
      {
        "id": "arsin-bel",
        "title": "Arsin Belediyesi",
        "hexColor": "#0090D3",
        "website": "https://www.arsin.bel.tr",
        "componentName": "ArsinBelIcon"
      },
      {
        "id": "arsuz-bel",
        "title": "Arsuz Belediyesi",
        "hexColor": "#E5791C",
        "website": "https://www.arsuz.bel.tr",
        "componentName": "ArsuzBelIcon"
      },
      {
        "id": "atakum-bel",
        "title": "Atakum Belediyesi",
        "hexColor": "#1D1D1B",
        "website": "https://www.atakum.bel.tr",
        "componentName": "AtakumBelIcon"
      },
      {
        "id": "avanos-bel",
        "title": "Avanos Belediyesi",
        "hexColor": "#1E1A19",
        "website": "https://www.avanos.bel.tr",
        "componentName": "AvanosBelIcon"
      },
      {
        "id": "ayas-bel",
        "title": "Ayaş Belediyesi",
        "hexColor": "#0A83D3",
        "website": "https://www.ayas.bel.tr",
        "componentName": "AyasBelIcon"
      },
      {
        "id": "aydintepe-bel",
        "title": "Aydıntepe Belediyesi",
        "hexColor": "#1E7CC4",
        "website": "https://www.aydintepe.bel.tr",
        "componentName": "AydintepeBelIcon"
      },
      {
        "id": "ayvalik-bel",
        "title": "Ayvalık Belediyesi",
        "hexColor": "#BEAC4D",
        "website": "https://www.ayvalik.bel.tr",
        "componentName": "AyvalikBelIcon"
      },
      {
        "id": "bahcelievler-bel",
        "title": "Bahçelievler Belediyesi",
        "hexColor": "#00890D",
        "website": "http://www.bahcelievler.bel.tr/",
        "componentName": "BahcelievlerBelIcon"
      },
      {
        "id": "balcova-bel",
        "title": "Balçova Belediyesi",
        "hexColor": "#291F6C",
        "website": "https://www.balcova.bel.tr",
        "componentName": "BalcovaBelIcon"
      },
      {
        "id": "basaksehir-bel",
        "title": "Başakşehir Belediyesi",
        "hexColor": "#00ABC8",
        "website": "http://www.basaksehir.gov.tr/",
        "componentName": "BasaksehirBelIcon"
      },
      {
        "id": "basiskele-bel",
        "title": "Başiskele Belediyesi",
        "hexColor": "#00A5C2",
        "website": "https://www.basiskele.bel.tr",
        "componentName": "BasiskeleBelIcon"
      },
      {
        "id": "bayburt-bel",
        "title": "Bayburt Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bayburt.bel.tr",
        "componentName": "BayburtBelIcon"
      },
      {
        "id": "bayrakli-bel",
        "title": "Bayraklı Belediyesi",
        "hexColor": "#61BFE6",
        "website": "https://www.bayrakli.bel.tr",
        "componentName": "BayrakliBelIcon"
      },
      {
        "id": "beyagac-bel",
        "title": "Beyağaç Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.beyagac.bel.tr",
        "componentName": "BeyagacBelIcon"
      },
      {
        "id": "beylikova-bel",
        "title": "Beylikova Belediyesi",
        "hexColor": "#2B2A29",
        "website": "https://www.beylikova.bel.tr",
        "componentName": "BeylikovaBelIcon"
      },
      {
        "id": "beypazari-bel",
        "title": "Beypazarı Belediyesi",
        "hexColor": "#B2CDEE",
        "website": "https://www.beypazari.bel.tr",
        "componentName": "BeypazariBelIcon"
      },
      {
        "id": "biga-bel",
        "title": "Biga Belediyesi",
        "hexColor": "#2A80C0",
        "website": "https://www.biga.bel.tr",
        "componentName": "BigaBelIcon"
      },
      {
        "id": "bogazkale-bel",
        "title": "Boğazkale Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bogazkale.bel.tr",
        "componentName": "BogazkaleBelIcon"
      },
      {
        "id": "bogazliyan-bel",
        "title": "Boğazlıyan Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bogazliyan.bel.tr",
        "componentName": "BogazliyanBelIcon"
      },
      {
        "id": "bornova-bel",
        "title": "Bornova Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bornova.bel.tr",
        "componentName": "BornovaBelIcon"
      },
      {
        "id": "bozdogan-bel",
        "title": "Bozdoğan Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bozdogan.bel.tr",
        "componentName": "BozdoganBelIcon"
      },
      {
        "id": "bozkurt-bel",
        "title": "Bozkurt Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.bozkurt.bel.tr",
        "componentName": "BozkurtBelIcon"
      },
      {
        "id": "buca-bel",
        "title": "Buca Belediyesi",
        "hexColor": "#232E43",
        "website": "https://www.buca.bel.tr",
        "componentName": "BucaBelIcon"
      },
      {
        "id": "bursa-bel",
        "title": "Bursa Büyükşehir Belediyesi",
        "hexColor": "#224382",
        "website": "http://www.bursa.bel.tr/",
        "componentName": "BursaBelIcon"
      },
      {
        "id": "cadirkaya-bel",
        "title": "Çadırkaya Belediyesi",
        "hexColor": "#E42018",
        "website": "https://www.cadirkaya.bel.tr",
        "componentName": "CadirkayaBelIcon"
      },
      {
        "id": "camoluk-bel",
        "title": "Çamoluk Belediyesi",
        "hexColor": "#EDB63C",
        "website": "https://www.camoluk.bel.tr",
        "componentName": "CamolukBelIcon"
      },
      {
        "id": "cankiri-bel",
        "title": "Çankırı Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.cankiri.bel.tr",
        "componentName": "CankiriBelIcon"
      },
      {
        "id": "caybasi-bel",
        "title": "Çaybaşı Belediyesi",
        "hexColor": "#EBEBE0",
        "website": "https://www.caybasi.bel.tr",
        "componentName": "CaybasiBelIcon"
      },
      {
        "id": "cayiralan-bel",
        "title": "Çayıralan Belediyesi",
        "hexColor": "#259A3F",
        "website": "https://www.cayiralan.bel.tr",
        "componentName": "CayiralanBelIcon"
      },
      {
        "id": "cayirova-bel",
        "title": "Çayırova Belediyesi",
        "hexColor": "#1B9AD6",
        "website": "https://www.cayirova.bel.tr",
        "componentName": "CayirovaBelIcon"
      },
      {
        "id": "cekmekoy-bel",
        "title": "Çekmeköy Belediyesi",
        "hexColor": "#085F73",
        "website": "https://www.cekmekoy.bel.tr",
        "componentName": "CekmekoyBelIcon"
      },
      {
        "id": "cemisgezek-bel",
        "title": "Çemişgezek Belediyesi",
        "hexColor": "#B8CC48",
        "website": "https://www.cemisgezek.bel.tr",
        "componentName": "CemisgezekBelIcon"
      },
      {
        "id": "cerkezkoy-bel",
        "title": "Çerkezköy Belediyesi",
        "hexColor": "#E41D2D",
        "website": "https://www.cerkezkoy.bel.tr",
        "componentName": "CerkezkoyBelIcon"
      },
      {
        "id": "cesme-bel",
        "title": "Çeşme Belediyesi",
        "hexColor": "#004987",
        "website": "https://www.cesme.bel.tr",
        "componentName": "CesmeBelIcon"
      },
      {
        "id": "cilimli-bel",
        "title": "Çilimli Belediyesi",
        "hexColor": "#000000",
        "website": "https://www.cilimli.bel.tr",
        "componentName": "CilimliBelIcon"
      },
      {
        "id": "cukurca-bel",
        "title": "Çukurca Belediyesi",
        "hexColor": "#511514",
        "website": "https://www.cukurca.bel.tr",
        "componentName": "CukurcaBelIcon"
      },
      {
        "id": "cumayeri-bel",
        "title": "Cumayeri Belediyesi",
        "hexColor": "#000000",
        "website": "https://www.cumayeri.bel.tr",
        "componentName": "CumayeriBelIcon"
      },
      {
        "id": "demirkoy-bel",
        "title": "Demirköy Belediyesi",
        "hexColor": "#1A1A18",
        "website": "https://www.demirkoy.bel.tr",
        "componentName": "DemirkoyBelIcon"
      },
      {
        "id": "demirozu-bel",
        "title": "Demirözü Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.demirozu.bel.tr",
        "componentName": "DemirozuBelIcon"
      },
      {
        "id": "dumlupinar-bel",
        "title": "Dumlupınar Belediyesi",
        "hexColor": "#1D1D1B",
        "website": "https://www.dumlupinar.bel.tr",
        "componentName": "DumlupinarBelIcon"
      },
      {
        "id": "dursunbey-bel",
        "title": "Dursunbey Belediyesi",
        "hexColor": "#94C122",
        "website": "https://www.dursunbey.bel.tr",
        "componentName": "DursunbeyBelIcon"
      },
      {
        "id": "duzici-bel",
        "title": "Düziçi Belediyesi",
        "hexColor": "#B8EDCD",
        "website": "https://www.duzici.bel.tr",
        "componentName": "DuziciBelIcon"
      },
      {
        "id": "edirne-bel",
        "title": "Edirne Belediyesi",
        "hexColor": "#00843F",
        "website": "https://www.edirne.bel.tr",
        "componentName": "EdirneBelIcon"
      },
      {
        "id": "efeler-bel",
        "title": "Efeler Belediyesi",
        "hexColor": "#F9423A",
        "website": "https://www.efeler.bel.tr",
        "componentName": "EfelerBelIcon"
      },
      {
        "id": "elmadag-bel",
        "title": "Elmadağ Belediyesi",
        "hexColor": "#030202",
        "website": "https://www.elmadag.bel.tr",
        "componentName": "ElmadagBelIcon"
      },
      {
        "id": "emet-bel",
        "title": "Emet Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.emet.bel.tr",
        "componentName": "EmetBelIcon"
      },
      {
        "id": "erdemli-bel",
        "title": "Erdemli Belediyesi",
        "hexColor": "#FFED00",
        "website": "https://www.erdemli.bel.tr",
        "componentName": "ErdemliBelIcon"
      },
      {
        "id": "eregli-bel",
        "title": "Ereğli Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.eregli.bel.tr",
        "componentName": "EregliBelIcon"
      },
      {
        "id": "erenler-bel",
        "title": "Erenler Belediyesi",
        "hexColor": "#164D76",
        "website": "https://www.erenler.bel.tr",
        "componentName": "ErenlerBelIcon"
      },
      {
        "id": "erzincan-bel",
        "title": "Erzincan Belediyesi",
        "hexColor": "#DD7D21",
        "website": "https://www.erzincan.bel.tr",
        "componentName": "ErzincanBelIcon"
      },
      {
        "id": "esenler-bel",
        "title": "Esenler Belediyesi",
        "hexColor": "#F89931",
        "website": "http://www.esenler.gov.tr/",
        "componentName": "EsenlerBelIcon"
      },
      {
        "id": "esme-bel",
        "title": "Eşme Belediyesi",
        "hexColor": "#093064",
        "website": "https://www.esme.bel.tr",
        "componentName": "EsmeBelIcon"
      },
      {
        "id": "eynesil-bel",
        "title": "Eynesil Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.eynesil.bel.tr",
        "componentName": "EynesilBelIcon"
      },
      {
        "id": "fatih-bel",
        "title": "Fatih Belediyesi",
        "hexColor": "#A91B2D",
        "website": "http://www.fatih.gov.tr/",
        "componentName": "FatihBelIcon"
      },
      {
        "id": "fethiye-bel",
        "title": "Fethiye Belediyesi",
        "hexColor": "#1A1A18",
        "website": "https://www.fethiye.bel.tr",
        "componentName": "FethiyeBelIcon"
      },
      {
        "id": "gebze-bel",
        "title": "Gebze Belediyesi",
        "hexColor": "#F7A609",
        "website": "https://www.gebze.bel.tr",
        "componentName": "GebzeBelIcon"
      },
      {
        "id": "germencik-bel",
        "title": "Germencik Belediyesi",
        "hexColor": "#004E7D",
        "website": "https://www.germencik.bel.tr",
        "componentName": "GermencikBelIcon"
      },
      {
        "id": "golbasi-bel",
        "title": "Gölbaşı Belediyesi",
        "hexColor": "#5EAA3F",
        "website": "https://www.golbasi.bel.tr",
        "componentName": "GolbasiBelIcon"
      },
      {
        "id": "golbasi-ankara-bel",
        "title": "Gölbaşı Belediyesi",
        "hexColor": "#179367",
        "website": "https://www.golbasi.bel.tr",
        "componentName": "GolbasiAnkaraBelIcon"
      },
      {
        "id": "golyaka-bel",
        "title": "Gölyaka Belediyesi",
        "hexColor": "#D49835",
        "website": "https://www.golyaka.bel.tr",
        "componentName": "GolyakaBelIcon"
      },
      {
        "id": "gumusgoze-bel",
        "title": "Gümüşgöze Belediyesi",
        "hexColor": "#2B2A29",
        "website": "https://www.gumusgoze.bel.tr",
        "componentName": "GumusgozeBelIcon"
      },
      {
        "id": "gurcayir-bel",
        "title": "Gürçayır Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.gurcayir.bel.tr",
        "componentName": "GurcayirBelIcon"
      },
      {
        "id": "gurpinar-bel",
        "title": "Gürpınar Belediyesi",
        "hexColor": "#7FAE50",
        "website": "https://www.gurpinar.bel.tr",
        "componentName": "GurpinarBelIcon"
      },
      {
        "id": "hacilar-bel",
        "title": "Hacılar Belediyesi",
        "hexColor": "#FAC215",
        "website": "https://www.hacilar.bel.tr",
        "componentName": "HacilarBelIcon"
      },
      {
        "id": "haymana-bel",
        "title": "Haymana Belediyesi",
        "hexColor": "#00335A",
        "website": "https://www.haymana.bel.tr",
        "componentName": "HaymanaBelIcon"
      },
      {
        "id": "hendek-bel",
        "title": "Hendek Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.hendek.bel.tr",
        "componentName": "HendekBelIcon"
      },
      {
        "id": "huyuk-bel",
        "title": "Hüyük Belediyesi",
        "hexColor": "#1A3865",
        "website": "https://www.huyuk.bel.tr",
        "componentName": "HuyukBelIcon"
      },
      {
        "id": "igneada-bel",
        "title": "İğneada Belediyesi",
        "hexColor": "#3FC0F0",
        "website": "https://www.igneada.bel.tr",
        "componentName": "IgneadaBelIcon"
      },
      {
        "id": "incirliova-bel",
        "title": "İncirliova Belediyesi",
        "hexColor": "#076633",
        "website": "https://www.incirliova.bel.tr",
        "componentName": "IncirliovaBelIcon"
      },
      {
        "id": "inegol-bel",
        "title": "İnegöl Belediyesi",
        "hexColor": "#1A1A18",
        "website": "https://www.inegol.bel.tr",
        "componentName": "InegolBelIcon"
      },
      {
        "id": "isparta-bel",
        "title": "Isparta Belediyesi",
        "hexColor": "#09A34A",
        "website": "https://www.isparta.bel.tr",
        "componentName": "IspartaBelIcon"
      },
      {
        "id": "izmir-bel",
        "title": "İzmir Büyükşehir Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.izmir.bel.tr/",
        "componentName": "IzmirBelIcon"
      },
      {
        "id": "izmit-bel",
        "title": "İzmit Belediyesi",
        "hexColor": "#00963F",
        "website": "https://www.izmit.bel.tr",
        "componentName": "IzmitBelIcon"
      },
      {
        "id": "kadikoy-bel",
        "title": "Kadıköy Belediyesi",
        "hexColor": "#008BCA",
        "website": "http://v2.kadikoy.bel.tr/",
        "componentName": "KadikoyBelIcon"
      },
      {
        "id": "kahramankazan-bel",
        "title": "Kahramankazan Belediyesi",
        "hexColor": "#093372",
        "website": "https://www.kahramankazan.bel.tr",
        "componentName": "KahramankazanBelIcon"
      },
      {
        "id": "kalecik-bel",
        "title": "Kalecik Belediyesi",
        "hexColor": "#172B49",
        "website": "https://www.kalecik.bel.tr",
        "componentName": "KalecikBelIcon"
      },
      {
        "id": "kalkandere-bel",
        "title": "Kalkandere Belediyesi",
        "hexColor": "#F47E20",
        "website": "https://www.kalkandere.bel.tr",
        "componentName": "KalkandereBelIcon"
      },
      {
        "id": "karabaglar-bel",
        "title": "Karabağlar Belediyesi",
        "hexColor": "#1A3B50",
        "website": "https://www.karabaglar.bel.tr",
        "componentName": "KarabaglarBelIcon"
      },
      {
        "id": "karaburun-bel",
        "title": "Karaburun Belediyesi",
        "hexColor": "#000000",
        "website": "https://www.karaburun.bel.tr",
        "componentName": "KaraburunBelIcon"
      },
      {
        "id": "karaman-bel",
        "title": "Karaman Belediyesi",
        "hexColor": "#000094",
        "website": "https://www.karaman.bel.tr",
        "componentName": "KaramanBelIcon"
      },
      {
        "id": "karamursel-bel",
        "title": "Karamürsel Belediyesi",
        "hexColor": "#202967",
        "website": "https://www.karamursel.bel.tr",
        "componentName": "KaramurselBelIcon"
      },
      {
        "id": "karayaka-bel",
        "title": "Karayaka Belediyesi",
        "hexColor": "#005B50",
        "website": "https://www.karayaka.bel.tr",
        "componentName": "KarayakaBelIcon"
      },
      {
        "id": "karesi-bel",
        "title": "Karesi Belediyesi",
        "hexColor": "#002E6D",
        "website": "https://www.karesi.bel.tr",
        "componentName": "KaresiBelIcon"
      },
      {
        "id": "karsiyaka-bel",
        "title": "Karşıyaka Belediyesi",
        "hexColor": "#231F20",
        "website": "https://www.karsiyaka.bel.tr",
        "componentName": "KarsiyakaBelIcon"
      },
      {
        "id": "kastamonu-bel",
        "title": "Kastamonu Belediyesi",
        "hexColor": "#BE1E1A",
        "website": "https://www.kastamonu.bel.tr",
        "componentName": "KastamonuBelIcon"
      },
      {
        "id": "kavakli-bel",
        "title": "Kavaklı Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.kavakli.bel.tr",
        "componentName": "KavakliBelIcon"
      },
      {
        "id": "kayapinar-bel",
        "title": "Kayapınar Belediyesi",
        "hexColor": "#7BC800",
        "website": "https://www.kayapinar.bel.tr",
        "componentName": "KayapinarBelIcon"
      },
      {
        "id": "kepsut-bel",
        "title": "Kepsut Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.kepsut.bel.tr",
        "componentName": "KepsutBelIcon"
      },
      {
        "id": "kestel-bel",
        "title": "Kestel Belediyesi",
        "hexColor": "#169DC0",
        "website": "https://www.kestel.bel.tr",
        "componentName": "KestelBelIcon"
      },
      {
        "id": "kirikhan-bel",
        "title": "Kırıkhan Belediyesi",
        "hexColor": "#C69E67",
        "website": "https://www.kirikhan.bel.tr",
        "componentName": "KirikhanBelIcon"
      },
      {
        "id": "kirsehir-bel",
        "title": "Kırşehir Belediyesi",
        "hexColor": "#E30612",
        "website": "https://www.kirsehir.bel.tr",
        "componentName": "KirsehirBelIcon"
      },
      {
        "id": "kocaali-bel",
        "title": "Kocaali Belediyesi",
        "hexColor": "#D7B46A",
        "website": "https://www.kocaali.bel.tr",
        "componentName": "KocaaliBelIcon"
      },
      {
        "id": "kocaeli-bel",
        "title": "Kocaeli Büyükşehir Belediyesi",
        "hexColor": "#00406E",
        "website": "http://www.kocaeli.bel.tr/",
        "componentName": "KocaeliBelIcon"
      },
      {
        "id": "kocarli-bel",
        "title": "Koçarlı Belediyesi",
        "hexColor": "#7E996F",
        "website": "https://www.kocarli.bel.tr",
        "componentName": "KocarliBelIcon"
      },
      {
        "id": "kocasinan-bel",
        "title": "Kocasinan Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.kocasinan.bel.tr",
        "componentName": "KocasinanBelIcon"
      },
      {
        "id": "kofcaz-bel",
        "title": "Kofçaz Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.kofcaz.bel.tr",
        "componentName": "KofcazBelIcon"
      },
      {
        "id": "konak-bel",
        "title": "Konak Belediyesi",
        "hexColor": "#1A32AF",
        "website": "https://www.konak.bel.tr",
        "componentName": "KonakBelIcon"
      },
      {
        "id": "konyaalti-bel",
        "title": "Konyaaltı Belediyesi",
        "hexColor": "#001689",
        "website": "https://www.konyaalti.bel.tr",
        "componentName": "KonyaaltiBelIcon"
      },
      {
        "id": "koru-bel",
        "title": "Koru Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.koru.bel.tr",
        "componentName": "KoruBelIcon"
      },
      {
        "id": "kovancilar-bel",
        "title": "Kovancılar Belediyesi",
        "hexColor": "#38B2E6",
        "website": "https://www.kovancilar.bel.tr",
        "componentName": "KovancilarBelIcon"
      },
      {
        "id": "kucukcekmece-bel",
        "title": "Küçükçekmece Belediyesi",
        "hexColor": "#004892",
        "website": "http://www.kucukcekmece.gov.tr/",
        "componentName": "KucukcekmeceBelIcon"
      },
      {
        "id": "kula-bel",
        "title": "Kula Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.kula.bel.tr",
        "componentName": "KulaBelIcon"
      },
      {
        "id": "kuleonu-bel",
        "title": "Kuleönü Belediyesi",
        "hexColor": "#D97B2B",
        "website": "https://www.kuleonu.bel.tr",
        "componentName": "KuleonuBelIcon"
      },
      {
        "id": "kusadasi-bel",
        "title": "Kuşadası Belediyesi",
        "hexColor": "#977040",
        "website": "https://www.kusadasi.bel.tr",
        "componentName": "KusadasiBelIcon"
      },
      {
        "id": "kuyucak-bel",
        "title": "Kuyucak Belediyesi",
        "hexColor": "#291505",
        "website": "https://www.kuyucak.bel.tr",
        "componentName": "KuyucakBelIcon"
      },
      {
        "id": "luleburgaz-bel",
        "title": "Lüleburgaz Belediyesi",
        "hexColor": "#FAB800",
        "website": "https://www.luleburgaz.bel.tr",
        "componentName": "LuleburgazBelIcon"
      },
      {
        "id": "mamak-bel",
        "title": "Mamak Belediyesi",
        "hexColor": "#0C4529",
        "website": "https://www.mamak.bel.tr",
        "componentName": "MamakBelIcon"
      },
      {
        "id": "meram-bel",
        "title": "Meram Belediyesi",
        "hexColor": "#6AB453",
        "website": "https://www.meram.bel.tr",
        "componentName": "MeramBelIcon"
      },
      {
        "id": "merkezefendi-bel",
        "title": "Merkezefendi Belediyesi",
        "hexColor": "#0063AD",
        "website": "https://www.merkezefendi.bel.tr",
        "componentName": "MerkezefendiBelIcon"
      },
      {
        "id": "mollakoy-bel",
        "title": "Mollaköy Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.mollakoy.bel.tr",
        "componentName": "MollakoyBelIcon"
      },
      {
        "id": "mugla-bel",
        "title": "Muğla Büyükşehir Belediyesi",
        "hexColor": "#0D3274",
        "website": "http://www.mugla.bel.tr/",
        "componentName": "MuglaBelIcon"
      },
      {
        "id": "muratpasa-bel",
        "title": "Muratpaşa Belediyesi",
        "hexColor": "#F1872D",
        "website": "https://www.muratpasa.bel.tr",
        "componentName": "MuratpasaBelIcon"
      },
      {
        "id": "murgul-bel",
        "title": "Murgul Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.murgul.bel.tr",
        "componentName": "MurgulBelIcon"
      },
      {
        "id": "niksar-bel",
        "title": "Niksar Belediyesi",
        "hexColor": "#0D4DA3",
        "website": "https://www.niksar.bel.tr",
        "componentName": "NiksarBelIcon"
      },
      {
        "id": "nilufer-bel",
        "title": "Nilüfer Belediyesi",
        "hexColor": "#0094AA",
        "website": "https://www.nilufer.bel.tr",
        "componentName": "NiluferBelIcon"
      },
      {
        "id": "nurdagi-bel",
        "title": "Nurdağı Belediyesi",
        "hexColor": "#8BB8C9",
        "website": "https://www.nurdagi.bel.tr",
        "componentName": "NurdagiBelIcon"
      },
      {
        "id": "odemis-bel",
        "title": "Ödemiş Belediyesi",
        "hexColor": "#E32125",
        "website": "https://www.odemis.bel.tr",
        "componentName": "OdemisBelIcon"
      },
      {
        "id": "odunpazari-bel",
        "title": "Odunpazarı Belediyesi",
        "hexColor": "#0067AC",
        "website": "https://www.odunpazari.bel.tr",
        "componentName": "OdunpazariBelIcon"
      },
      {
        "id": "oren-bel",
        "title": "Ören Belediyesi",
        "hexColor": "#46AD33",
        "website": "https://www.oren.bel.tr",
        "componentName": "OrenBelIcon"
      },
      {
        "id": "orhaneli-bel",
        "title": "Orhaneli Belediyesi",
        "hexColor": "#00966B",
        "website": "https://www.orhaneli.bel.tr",
        "componentName": "OrhaneliBelIcon"
      },
      {
        "id": "orhangazi-bel",
        "title": "Orhangazi Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.orhangazi.bel.tr",
        "componentName": "OrhangaziBelIcon"
      },
      {
        "id": "osmaniye-bel",
        "title": "Osmaniye Belediyesi",
        "hexColor": "#005333",
        "website": "https://www.osmaniye.bel.tr",
        "componentName": "OsmaniyeBelIcon"
      },
      {
        "id": "palandoken-bel",
        "title": "Palandöken Belediyesi",
        "hexColor": "#0080C9",
        "website": "https://www.palandoken.bel.tr",
        "componentName": "PalandokenBelIcon"
      },
      {
        "id": "pazaryeri-bel",
        "title": "Pazaryeri Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.pazaryeri.bel.tr",
        "componentName": "PazaryeriBelIcon"
      },
      {
        "id": "pehlivankoy-bel",
        "title": "Pehlivanköy Belediyesi",
        "hexColor": "#834922",
        "website": "https://www.pehlivankoy.bel.tr",
        "componentName": "PehlivankoyBelIcon"
      },
      {
        "id": "pendik-bel",
        "title": "Pendik Belediyesi",
        "hexColor": "#0093C9",
        "website": "https://pendik.net/",
        "componentName": "PendikBelIcon"
      },
      {
        "id": "pertek-bel",
        "title": "Pertek Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.pertek.bel.tr",
        "componentName": "PertekBelIcon"
      },
      {
        "id": "polatli-bel",
        "title": "Polatlı Belediyesi",
        "hexColor": "#C42627",
        "website": "https://www.polatli.bel.tr",
        "componentName": "PolatliBelIcon"
      },
      {
        "id": "refahiye-bel",
        "title": "Refahiye Belediyesi",
        "hexColor": "#EA6D2A",
        "website": "https://www.refahiye.bel.tr",
        "componentName": "RefahiyeBelIcon"
      },
      {
        "id": "sakarya-bel",
        "title": "Sakarya Büyükşehir Belediyesi",
        "hexColor": "#176FC1",
        "website": "http://www.sakarya.bel.tr",
        "componentName": "SakaryaBelIcon"
      },
      {
        "id": "saltukova-bel",
        "title": "Saltukova Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.saltukova.bel.tr",
        "componentName": "SaltukovaBelIcon"
      },
      {
        "id": "samsun-bel",
        "title": "Samsun Büyükşehir Belediyesi",
        "hexColor": "#2C3E50",
        "website": "http://www.samsun.bel.tr/",
        "componentName": "SamsunBelIcon"
      },
      {
        "id": "selcuklu-bel",
        "title": "Selçuklu Belediyesi",
        "hexColor": "#184184",
        "website": "https://www.selcuklu.bel.tr",
        "componentName": "SelcukluBelIcon"
      },
      {
        "id": "seydisehir-bel",
        "title": "Seydişehir Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.seydisehir.bel.tr",
        "componentName": "SeydisehirBelIcon"
      },
      {
        "id": "seyitgazi-bel",
        "title": "Seyitgazi Belediyesi",
        "hexColor": "#0091B3",
        "website": "https://www.seyitgazi.bel.tr",
        "componentName": "SeyitgaziBelIcon"
      },
      {
        "id": "silivri-bel",
        "title": "Silivri Belediyesi",
        "hexColor": "#FCC500",
        "website": "http://www.silivri.bel.tr/",
        "componentName": "SilivriBelIcon"
      },
      {
        "id": "simav-bel",
        "title": "Simav Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.simav.bel.tr",
        "componentName": "SimavBelIcon"
      },
      {
        "id": "sincan-bel",
        "title": "Sincan Belediyesi",
        "hexColor": "#003C70",
        "website": "https://www.sincan.bel.tr",
        "componentName": "SincanBelIcon"
      },
      {
        "id": "sizir-bel",
        "title": "Sızır Belediyesi",
        "hexColor": "#BFD5BF",
        "website": "https://www.sizir.bel.tr",
        "componentName": "SizirBelIcon"
      },
      {
        "id": "soke-bel",
        "title": "Söke Belediyesi",
        "hexColor": "#009F3C",
        "website": "https://www.soke.bel.tr",
        "componentName": "SokeBelIcon"
      },
      {
        "id": "suhut-bel",
        "title": "Şuhut Belediyesi",
        "hexColor": "#6F2620",
        "website": "https://www.suhut.bel.tr",
        "componentName": "SuhutBelIcon"
      },
      {
        "id": "suleymanpasa-bel",
        "title": "Süleymanpaşa Belediyesi",
        "hexColor": "#38A8A7",
        "website": "http://www.suleymanpasa.gov.tr/",
        "componentName": "SuleymanpasaBelIcon"
      },
      {
        "id": "sultanbeyli-bel",
        "title": "Sultanbeyli Belediyesi",
        "hexColor": "#F9B221",
        "website": "http://www.sultanbeyli.gov.tr/",
        "componentName": "SultanbeyliBelIcon"
      },
      {
        "id": "sultangazi-bel",
        "title": "Sultangazi Belediyesi",
        "hexColor": "#F7941E",
        "website": "http://www.sultangazi.gov.tr/",
        "componentName": "SultangaziBelIcon"
      },
      {
        "id": "sultanhani-bel",
        "title": "Sultanhanı Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.sultanhani.bel.tr",
        "componentName": "SultanhaniBelIcon"
      },
      {
        "id": "tanoba-bel",
        "title": "Tanoba Belediyesi",
        "hexColor": "#3976B3",
        "website": "https://www.tanoba.bel.tr",
        "componentName": "TanobaBelIcon"
      },
      {
        "id": "tefenni-bel",
        "title": "Tefenni Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.tefenni.bel.tr",
        "componentName": "TefenniBelIcon"
      },
      {
        "id": "tekirdag-bel",
        "title": "Tekirdağ Büyükşehir Belediyesi",
        "hexColor": "#71AE2D",
        "website": "http://www.tekirdag.bel.tr/",
        "componentName": "TekirdagBelIcon"
      },
      {
        "id": "tepebasi-bel",
        "title": "Tepebaşı Belediyesi",
        "hexColor": "#ADC90E",
        "website": "https://www.tepebasi.bel.tr",
        "componentName": "TepebasiBelIcon"
      },
      {
        "id": "tercan-bel",
        "title": "Tercan Belediyesi",
        "hexColor": "#235C94",
        "website": "https://www.tercan.bel.tr",
        "componentName": "TercanBelIcon"
      },
      {
        "id": "tillo-bel",
        "title": "Tillo Belediyesi",
        "hexColor": "#102D69",
        "website": "https://www.tillo.bel.tr",
        "componentName": "TilloBelIcon"
      },
      {
        "id": "tirebolu-bel",
        "title": "Tirebolu Belediyesi",
        "hexColor": "#007430",
        "website": "https://www.tirebolu.bel.tr",
        "componentName": "TireboluBelIcon"
      },
      {
        "id": "trabzon-bel",
        "title": "Trabzon Büyükşehir Belediyesi",
        "hexColor": "#113767",
        "website": "https://www.trabzon.bel.tr/",
        "componentName": "TrabzonBelIcon"
      },
      {
        "id": "tuncbilek-bel",
        "title": "Tunçbilek Belediyesi",
        "hexColor": "#ED1C24",
        "website": "https://www.tuncbilek.bel.tr",
        "componentName": "TuncbilekBelIcon"
      },
      {
        "id": "turkmen-bel",
        "title": "Türkmen Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.turkmen.bel.tr",
        "componentName": "TurkmenBelIcon"
      },
      {
        "id": "tuzla-bel",
        "title": "Tuzla Belediyesi",
        "hexColor": "#5BC5F2",
        "website": "http://www.tuzla.gov.tr",
        "componentName": "TuzlaBelIcon"
      },
      {
        "id": "ulus-bel",
        "title": "Ulus Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.ulus.bel.tr",
        "componentName": "UlusBelIcon"
      },
      {
        "id": "umraniye-bel",
        "title": "Ümraniye Belediyesi",
        "hexColor": "#E20D40",
        "website": "https://www.umraniye.bel.tr",
        "componentName": "UmraniyeBelIcon"
      },
      {
        "id": "unlupinar-bel",
        "title": "Ünlüpınar Belediyesi",
        "hexColor": "#049EE1",
        "website": "https://www.unlupinar.bel.tr",
        "componentName": "UnlupinarBelIcon"
      },
      {
        "id": "unye-bel",
        "title": "Ünye Belediyesi",
        "hexColor": "#001689",
        "website": "https://www.unye.bel.tr",
        "componentName": "UnyeBelIcon"
      },
      {
        "id": "urgup-bel",
        "title": "Ürgüp Belediyesi",
        "hexColor": "#ED9064",
        "website": "https://www.urgup.bel.tr",
        "componentName": "UrgupBelIcon"
      },
      {
        "id": "van-bel",
        "title": "Van Büyükşehir Belediyesi",
        "hexColor": "#FBC024",
        "website": "https://van.bel.tr/",
        "componentName": "VanBelIcon"
      },
      {
        "id": "vize-bel",
        "title": "Vize Belediyesi",
        "hexColor": "#2F8640",
        "website": "https://www.vize.bel.tr",
        "componentName": "VizeBelIcon"
      },
      {
        "id": "yakutiye-bel",
        "title": "Yakutiye Belediyesi",
        "hexColor": "#123963",
        "website": "https://www.yakutiye.bel.tr",
        "componentName": "YakutiyeBelIcon"
      },
      {
        "id": "yalihuyuk-bel",
        "title": "Yalıhüyük Belediyesi",
        "hexColor": "#28A8E1",
        "website": "https://www.yalihuyuk.bel.tr",
        "componentName": "YalihuyukBelIcon"
      },
      {
        "id": "yalova-bel",
        "title": "Yalova Belediyesi",
        "hexColor": "#2B6DB5",
        "website": "https://www.yalova.bel.tr",
        "componentName": "YalovaBelIcon"
      },
      {
        "id": "yarbasi-bel",
        "title": "Yarbaşı Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.yarbasi.bel.tr",
        "componentName": "YarbasiBelIcon"
      },
      {
        "id": "yerkoy-bel",
        "title": "Yerköy Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.yerkoy.bel.tr",
        "componentName": "YerkoyBelIcon"
      },
      {
        "id": "yesilyurt-bel",
        "title": "Yeşilyurt Belediyesi",
        "hexColor": "#009EC1",
        "website": "https://www.yesilyurt.bel.tr",
        "componentName": "YesilyurtBelIcon"
      },
      {
        "id": "yildizeli-bel",
        "title": "Yıldızeli Belediyesi",
        "hexColor": "#6C541C",
        "website": "https://www.yildizeli.bel.tr",
        "componentName": "YildizeliBelIcon"
      },
      {
        "id": "yozgat-bel",
        "title": "Yozgat Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.yozgat.bel.tr",
        "componentName": "YozgatBelIcon"
      },
      {
        "id": "yumurtalik-bel",
        "title": "Yumurtalık Belediyesi",
        "hexColor": "#2C3E50",
        "website": "https://www.yumurtalik.bel.tr",
        "componentName": "YumurtalikBelIcon"
      },
      {
        "id": "yunusemre-bel",
        "title": "Yunusemre Belediyesi",
        "hexColor": "#DA1F26",
        "website": "https://www.yunusemre.bel.tr",
        "componentName": "YunusemreBelIcon"
      }
    ]
  },
  {
    "category": "gokturk",
    "categoryTitle": "Göktürk Alfabesi",
    "icons": [
      {
        "id": "gokturk-a",
        "title": "Göktürk harfi A",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_A.svg",
        "componentName": "GokturkAIcon"
      },
      {
        "id": "gokturk-b1",
        "title": "Göktürk harfi B1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_B1.svg",
        "componentName": "GokturkB1Icon"
      },
      {
        "id": "gokturk-b2",
        "title": "Göktürk harfi B2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_B2.svg",
        "componentName": "GokturkB2Icon"
      },
      {
        "id": "gokturk-ch",
        "title": "Göktürk harfi CH",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_CH.svg",
        "componentName": "GokturkChIcon"
      },
      {
        "id": "gokturk-d1",
        "title": "Göktürk harfi D1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_D1.svg",
        "componentName": "GokturkD1Icon"
      },
      {
        "id": "gokturk-d2",
        "title": "Göktürk harfi D2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_D2.svg",
        "componentName": "GokturkD2Icon"
      },
      {
        "id": "gokturk-g1",
        "title": "Göktürk harfi G1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_G1.svg",
        "componentName": "GokturkG1Icon"
      },
      {
        "id": "gokturk-g2",
        "title": "Göktürk harfi G2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_G2.svg",
        "componentName": "GokturkG2Icon"
      },
      {
        "id": "gokturk-i",
        "title": "Göktürk harfi I",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_I.svg",
        "componentName": "GokturkIIcon"
      },
      {
        "id": "gokturk-ich",
        "title": "Göktürk harfi ICH",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_ICH.svg",
        "componentName": "GokturkIchIcon"
      },
      {
        "id": "gokturk-iq",
        "title": "Göktürk harfi IQ",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_IQ.svg",
        "componentName": "GokturkIqIcon"
      },
      {
        "id": "gokturk-k",
        "title": "Göktürk harfi K",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_K.svg",
        "componentName": "GokturkKIcon"
      },
      {
        "id": "gokturk-l1",
        "title": "Göktürk harfi L1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_L1.svg",
        "componentName": "GokturkL1Icon"
      },
      {
        "id": "gokturk-l2",
        "title": "Göktürk harfi L2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_L2.svg",
        "componentName": "GokturkL2Icon"
      },
      {
        "id": "gokturk-lt",
        "title": "Göktürk harfi LT",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_LT.svg",
        "componentName": "GokturkLtIcon"
      },
      {
        "id": "gokturk-m",
        "title": "Göktürk harfi M",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_M.svg",
        "componentName": "GokturkMIcon"
      },
      {
        "id": "gokturk-n1",
        "title": "Göktürk harfi N1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_N1.svg",
        "componentName": "GokturkN1Icon"
      },
      {
        "id": "gokturk-n2",
        "title": "Göktürk harfi N2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_N2.svg",
        "componentName": "GokturkN2Icon"
      },
      {
        "id": "gokturk-nch",
        "title": "Göktürk harfi NCH",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_NCH.svg",
        "componentName": "GokturkNchIcon"
      },
      {
        "id": "gokturk-ng",
        "title": "Göktürk harfi NG",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_NG.svg",
        "componentName": "GokturkNgIcon"
      },
      {
        "id": "gokturk-nt",
        "title": "Göktürk harfi NT",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_NT.svg",
        "componentName": "GokturkNtIcon"
      },
      {
        "id": "gokturk-ny",
        "title": "Göktürk harfi NY",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_NY.svg",
        "componentName": "GokturkNyIcon"
      },
      {
        "id": "gokturk-o",
        "title": "Göktürk harfi O",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_O.svg",
        "componentName": "GokturkOIcon"
      },
      {
        "id": "gokturk-oq",
        "title": "Göktürk harfi OQ",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_OQ.svg",
        "componentName": "GokturkOqIcon"
      },
      {
        "id": "gokturk-p",
        "title": "Göktürk harfi P",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_P.svg",
        "componentName": "GokturkPIcon"
      },
      {
        "id": "gokturk-q",
        "title": "Göktürk harfi Q",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_Q.svg",
        "componentName": "GokturkQIcon"
      },
      {
        "id": "gokturk-r1",
        "title": "Göktürk harfi R1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_R1.svg",
        "componentName": "GokturkR1Icon"
      },
      {
        "id": "gokturk-r2",
        "title": "Göktürk harfi R2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_R2.svg",
        "componentName": "GokturkR2Icon"
      },
      {
        "id": "gokturk-s1",
        "title": "Göktürk harfi S1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_S1.svg",
        "componentName": "GokturkS1Icon"
      },
      {
        "id": "gokturk-s2",
        "title": "Göktürk harfi S2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_S2.svg",
        "componentName": "GokturkS2Icon"
      },
      {
        "id": "gokturk-sep",
        "title": "Göktürk harfi SEP",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_SEP.svg",
        "componentName": "GokturkSepIcon"
      },
      {
        "id": "gokturk-sh",
        "title": "Göktürk harfi SH",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_SH.svg",
        "componentName": "GokturkShIcon"
      },
      {
        "id": "gokturk-t1",
        "title": "Göktürk harfi T1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_T1.svg",
        "componentName": "GokturkT1Icon"
      },
      {
        "id": "gokturk-t2",
        "title": "Göktürk harfi T2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_T2.svg",
        "componentName": "GokturkT2Icon"
      },
      {
        "id": "gokturk-u",
        "title": "Göktürk harfi U",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_U.svg",
        "componentName": "GokturkUIcon"
      },
      {
        "id": "gokturk-uk",
        "title": "Göktürk harfi UK",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_UK.svg",
        "componentName": "GokturkUkIcon"
      },
      {
        "id": "gokturk-y1",
        "title": "Göktürk harfi Y1",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_Y1.svg",
        "componentName": "GokturkY1Icon"
      },
      {
        "id": "gokturk-y2",
        "title": "Göktürk harfi Y2",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_Y2.svg",
        "componentName": "GokturkY2Icon"
      },
      {
        "id": "gokturk-z",
        "title": "Göktürk harfi Z",
        "hexColor": "#000000",
        "website": "https://commons.wikimedia.org/wiki/File:Old_Turkic_letter_Z.svg",
        "componentName": "GokturkZIcon"
      }
    ]
  },
  {
    "category": "motif",
    "categoryTitle": "Anadolu Kilim Motifleri",
    "icons": [
      {
        "id": "eli-belinde",
        "title": "Eli Belinde",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "EliBelindeIcon"
      },
      {
        "id": "koc-boynuzu",
        "title": "Koçboynuzu",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "KocBoynuzuIcon"
      },
      {
        "id": "hayat-agaci",
        "title": "Hayat Ağacı",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Hayat_a%C4%9Fac%C4%B1",
        "componentName": "HayatAgaciIcon"
      },
      {
        "id": "bereket",
        "title": "Bereket",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "BereketIcon"
      },
      {
        "id": "ask-ve-birlesim",
        "title": "Aşk ve Birleşim",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "AskVeBirlesimIcon"
      },
      {
        "id": "goz",
        "title": "Göz",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Nazar",
        "componentName": "GozIcon"
      },
      {
        "id": "goz2",
        "title": "Göz 2",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Nazar",
        "componentName": "Goz2Icon"
      },
      {
        "id": "muska",
        "title": "Muska",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Muska",
        "componentName": "MuskaIcon"
      },
      {
        "id": "akrep",
        "title": "Akrep",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "AkrepIcon"
      },
      {
        "id": "pitrak",
        "title": "Pıtrak",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "PitrakIcon"
      },
      {
        "id": "cengel",
        "title": "Çengel",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "CengelIcon"
      },
      {
        "id": "tarak",
        "title": "Tarak",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "TarakIcon"
      },
      {
        "id": "tarak2",
        "title": "Tarak 2",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "Tarak2Icon"
      },
      {
        "id": "yildiz",
        "title": "Yıldız",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "YildizMotifIcon"
      },
      {
        "id": "yildiz2",
        "title": "Yıldız 2",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "Yildiz2Icon"
      },
      {
        "id": "insan",
        "title": "İnsan",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "InsanIcon"
      },
      {
        "id": "bukagi",
        "title": "Bukağı",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "BukagiIcon"
      },
      {
        "id": "sandikli",
        "title": "Sandıklı",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "SandikliIcon"
      },
      {
        "id": "sacbagi",
        "title": "Saçbağı",
        "hexColor": "#EF792B",
        "website": "https://tr.wikipedia.org/wiki/Kilim",
        "componentName": "SacbagiIcon"
      }
    ]
  }
];
