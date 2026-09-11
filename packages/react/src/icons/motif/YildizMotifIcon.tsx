/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * YildizMotifIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const YildizMotifIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 93 93" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M512.194 407.683c-1.599 3.695-3.193 7.396-4.794 11.097h18.67c-1.92 4.41-3.83 8.82-5.75 13.22h18.87c-1.87 4.3-3.73 8.6-5.6 12.9h12.39v14.13h-12.51c1.83 4.35 3.67 8.69 5.51 13.04h-18.51c1.84 4.14 3.69 8.29 5.53 12.43-5.81 1.36-13.42-1.09-18.5 1.88 1.86 3.7 3.71 7.41 5.57 11.12-5.16 1.63-21.24 1.44-26.57.06 1.76-4.15 3.52-8.31 5.28-12.47h-18.6l1.329-3.246 2.662-6.488 1.329-3.246h-18c1.84-4.37 3.67-8.74 5.51-13.11h-12.65v-14.08h12.51c-1.89-4.31-3.77-8.61-5.66-12.91h18.68l-5.64-13.26h18.34c-1.82-4.22-3.65-8.44-5.47-12.65h26.76zM499.5 432.83c-6.23 6.55-12.45 13.11-18.68 19.67 6.23 6.37 12.45 12.74 18.68 19.11 6.39-6.37 12.77-12.74 19.16-19.11-1.91-4.09-15.23-17.36-19.16-19.67Z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-453.235 -405.975)" /></svg>);

YildizMotifIcon.displayName = 'YildizMotifIcon';
