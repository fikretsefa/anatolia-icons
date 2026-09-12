/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkSepIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkSepIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M258.568 410.246a8.56 8.56 0 0 0-8.562 8.563c0 4.732 3.83 8.594 8.562 8.594 4.733 0 8.594-3.862 8.594-8.594 0-4.733-3.861-8.563-8.594-8.563zm-.094 32.719a8.56 8.56 0 0 0-8.562 8.563 8.56 8.56 0 0 0 8.562 8.562c4.733 0 8.594-3.83 8.594-8.562 0-4.733-3.86-8.563-8.594-8.563z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkSepIcon.displayName = 'GokturkSepIcon';
