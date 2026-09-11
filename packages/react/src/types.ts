import type { SVGProps } from 'react';

/**
 * Tüm Anatolia ikon bileşenlerinin ortak props arayüzü.
 * @remarks `size` ve `color` kısayolları SVG `width`/`height`/`fill` değerlerini yönetir; kalan özellikler doğrudan `<svg>` elemanına aktarılır.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * İkonun genişlik ve yüksekliği (piksel veya CSS birimi).
   */
  size?: number | string;

  /**
   * İkon rengi. Verilmezse SVG'deki orijinal marka renkleri kullanılır.
   * @remarks Tek renk baskısı için (ör. `className="icon-recolor"` ile) CSS `color` olarak uygulanır.
   */
  color?: string;

  /**
   * Erişilebilirlik için SVG `<title>` metni.
   */
  title?: string;

  /**
   * `<title>` öğesine bağlanan `aria-labelledby` kimliği.
   */
  titleId?: string;

  /**
   * SVG köküne uygulanacak CSS sınıfı (Tailwind ile kullanım için).
   */
  className?: string;
}
