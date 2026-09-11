/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BukagiIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BukagiIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 67 93" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M308.99 406.02h14.67v12.59h12.8v13.32h13.13v13.86h-25.91v12.09h25.78v14.26h-12.84v12.92h-13.01v13.15h-14.57v-13h-12.97v-13.03h-12.94v-14.27h25.75v-12.17h-25.74v-13.86h13.04v-13.37h12.81z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-283.005 -405.895)" /></svg>);

BukagiIcon.displayName = 'BukagiIcon';
