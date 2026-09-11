/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AkrepIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AkrepIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round"
}} viewBox="0 0 97 98" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M491.5 819.01c18.62 32.33 37.23 64.66 55.85 96.99H527.5c1.91-3.97 3.82-7.94 5.73-11.9h-17.21c1.95 3.93 3.9 7.87 5.84 11.8h-19.92c1.82-3.93 3.64-7.86 5.47-11.8h-17.39c2.03 3.94 4.05 7.88 6.08 11.81h-19.97c1.97-3.93 3.94-7.87 5.91-11.81h-17.79l5.91 11.94H450.6c14.15-25.36 28.31-50.73 42.46-76.09h-13.42c3.95-6.98 7.91-13.96 11.86-20.94Zm7 36.98c-6.79 11.97-13.57 23.95-20.36 35.93h41.71c-4.39-8.66-9.42-17.43-14.63-25.64-2.17-3.44-3.59-7.9-6.72-10.29Z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-450.475 -818.885)" /></svg>);

AkrepIcon.displayName = 'AkrepIcon';
