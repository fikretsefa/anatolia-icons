/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkG1Icon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkG1Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 201" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m204.553 360.121-17.657 7.594s26.5 11.141 26.5 34.125c0 23.69-27.406 36.938-27.406 36.938l20.344 7.25s33.75-16.44 33.75-44.375c0-28.816-35.531-41.532-35.531-41.532zm108 0s-35.563 12.716-35.563 41.532c0 27.935 33.781 44.375 33.781 44.375l20.313-7.25s-27.375-13.247-27.375-36.938c0-22.984 26.5-34.125 26.5-34.125zm-67.313 72.125-.187 77.969h26.875v-77.969z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.037 -334.668)" /></svg>);

GokturkG1Icon.displayName = 'GokturkG1Icon';
