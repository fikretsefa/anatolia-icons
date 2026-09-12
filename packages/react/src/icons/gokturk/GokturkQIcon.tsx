/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkQIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkQIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M279.75 361.983h25.986v146.194h-26.163v-56.922l-34.648-10.96L237.854 508l-26.516.354 8.308-91.57 59.927 17.677z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkQIcon.displayName = 'GokturkQIcon';
