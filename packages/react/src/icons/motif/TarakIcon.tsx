/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * TarakIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const TarakIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 122 74" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M108.85 625.67h8.88v27.68h9.17v-27.56h9.28v27.4h9.4v-27.4h9.44v26.71l22.48-22.21c4.97 8.4 9.93 16.81 14.9 25.21-4.9 4.76-9.8 9.51-14.7 14.27v-24.48c-5.48 1.77-12.23 10.94-16.65 15.26-1.75 1.7-4.95 3.79-5.72 6.18-.75 2.32-.26 5.37-.26 7.77.01 7.93 1.17 16.99-.57 24.67h-45c-2.6-9.2 1.51-23.17-1.26-31.75-1.01-3.14-3.83-4.9-6.07-7.11-5.23-5.16-10.57-10.23-15.67-15.52-2.81 4.57.37 18.56-1 25.11l-14.76-14.4c4.92-8.44 9.84-16.89 14.76-25.33 7.78 7.55 15.57 15.1 23.35 22.65z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-70.615 -625.545)" /></svg>);

TarakIcon.displayName = 'TarakIcon';
