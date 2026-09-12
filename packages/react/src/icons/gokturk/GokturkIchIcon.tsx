/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkIchIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkIchIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M247.135 511.359h27.223v-96.874l48.968-50.735-24.926-4.42-24.042 25.28v-25.456h-27.223v28.284l-29.345-28.46-24.042 5.126 53.387 51.442z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.037 -334.668)" /></svg>);

GokturkIchIcon.displayName = 'GokturkIchIcon';
