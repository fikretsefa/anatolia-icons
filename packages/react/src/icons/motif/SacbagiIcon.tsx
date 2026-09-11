/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * SacbagiIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const SacbagiIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 93 95" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M909.27 199.5c-13.12 13.33-26.24 26.67-39.35 40 1.67 2 3.35 4 5.03 6-1.6 1.67-3.2 3.33-4.8 5 2.09 4.63 7.29 8.34 10.9 11.96 9.15 9.18 19.52 18.03 27.74 28.04-6.66 2.49-18.84.85-26.29.83-14.67-.04-29.33-.05-44-.02-6.01.02-15.48 1.38-21-.26 1.32-4.21 6.77-7.94 9.92-11.12 6.81-6.87 13.69-13.65 20.47-20.54 2.86-2.9 6.16-5.52 8.4-8.89l-4.92-6 4.73-5c-1.94-3.73-5.63-6.48-8.6-9.48-6.97-7.03-14.1-13.92-21.01-21-3.1-3.17-7.77-6.38-9.17-10.52 7.47-1.1 15.6-.33 23.18-.34 14.67-.02 29.33 0 44 .04 5.67.01 11.33-.04 17-.04 1.85 0 5.11-.57 6.8.21.45.21.56.85.97 1.13Zm-45.77 58.84c-7.78 7.84-15.55 15.69-23.33 23.53h45.96zm22.36-50.22h-45.8c3.46 6.08 10 11.34 15.06 16.27 2.57 2.51 5.19 5.65 8.38 7.17 7.45-7.81 14.9-15.63 22.36-23.44Z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-817.195 -197.782)" /></svg>);

SacbagiIcon.displayName = 'SacbagiIcon';
