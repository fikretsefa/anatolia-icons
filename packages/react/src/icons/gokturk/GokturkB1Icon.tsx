/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkB1Icon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkB1Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 201" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M257.817 360.105s-11.314 18.537-11.314 38.537c0 37.505 35.002 56.254 35.002 71.771 0 9.752-10.859 18.385-20.86 18.385-14.41 0-20.484-21.795-20.484-21.795l-25.124 6.946s10.513 41.72 45.962 41.72c28.788 0 47.73-28.255 47.73-45.256 0-25.42-35.356-45.772-35.356-73.892 0-10.79 7.778-23.335 7.778-23.335z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.037 -334.668)" /></svg>);

GokturkB1Icon.displayName = 'GokturkB1Icon';
