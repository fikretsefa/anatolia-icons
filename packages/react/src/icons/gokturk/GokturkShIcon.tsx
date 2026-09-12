/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkShIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkShIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M247.312 415.37h-38.273v20.063h38.007v75.926h27.047v-75.926h32.97v-20.152h-33.147l49.144-51.442-24.925-4.42-38.184 40.305-41.984-40.747-23.954 4.95z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkShIcon.displayName = 'GokturkShIcon';
