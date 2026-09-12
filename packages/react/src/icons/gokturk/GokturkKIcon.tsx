/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkKIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkKIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M259.686 511.359h27.047v-69.473l26.516-37.654-74.487-45.88-9.835 13.884 54.977 34.118-15.202 22.273-55.332-34.294-9.545 13.788 55.861 35.886z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -334.856)" /></svg>);

GokturkKIcon.displayName = 'GokturkKIcon';
