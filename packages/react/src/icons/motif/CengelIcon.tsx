/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * CengelIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const CengelIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 111 57" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M126.46 839.28c12.14-2.02 25.69-.49 38.04-.5 6.81-.01 14.96-1.18 21.42.72l-27.81 27.18v-18.63h-22.95v46.1H76.12c9.03-9.09 18.07-18.18 27.11-27.26v18.17h23.23z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-75.995 -838.109)" /></svg>);

CengelIcon.displayName = 'CengelIcon';
