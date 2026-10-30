# Değişiklik günlüğü

## 0.3.0 — 2026-10-30

Katalog 344 ikondan 324 ikona indi. `@anatolia-icons/react` ve `@anatolia-icons/svg` sürümü 0.3.0.

### Kaldırılanlar

Yalnızca gömülü raster içeren, temizlikten sonra vektör şekli kalmayan 20 ikon katalogdan çıkarıldı:

- Üniversite: Kırıkkale Üniversitesi (`kku`)
- Belediye: Ağrı, Boğazkale, Bozkurt, Emet, Gürçayır, Kavaklı, Kocasinan, Kofçaz, Mollaköy, Murgul, Pazaryeri, Pertek, Saltukova, Sultanhanı, Tefenni, Türkmen, Ulus, Yerköy, Yumurtalık

### Düzeltmeler

- Tamamen beyaz boyalı 15 belediye logosu `currentColor` kullanıyor. Önizlemede siyah görünürler; React tarafında `color` ve `className` ile boyanırlar. Etkilenenler: Bayburt, Boğazlıyan, Bornova, Çankırı, Cumayeri, Demirözü, Ereğli, Eynesil, Hendek, İzmir, Kepsut, Koru, Orhangazi, Samsun, Seydişehir.
- `tillo-bel` içindeki repoda bulunmayan harici `tillo-bel-logo-yatay-N.png` parçaları kaldırıldı. Aynı raster temizliği, vektörü duran karışık logolara da uygulandı: Aydıntepe, Beypazarı, Bozdoğan, Çemişgezek, Erenler, Eşme, İğneada, Karaburun, Kula, Simav, Tirebolu, İstanbul Aydın, İstanbul Bilgi, Biruni ve Niğde Ömer Halisdemir.
- Beyağaç logosu iç içe base64 SVG sarmalayıcısından çıkarılıp düz vektör olarak yayınlandı.
- Belediye kategori başlığı **Belediyeler** oldu. Kategori ilçe ve belde logolarını da kapsar.
