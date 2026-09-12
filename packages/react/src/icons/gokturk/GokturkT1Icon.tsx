/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkT1Icon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkT1Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m258.412 356.293-46 44.75h32.5v17.75l-40.75 41 54 54.25 54.75-54.5-41-41v-17.75h29.75zm-.5 79 24.75 24.75-24.75 24-25-24.5z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkT1Icon.displayName = 'GokturkT1Icon';
