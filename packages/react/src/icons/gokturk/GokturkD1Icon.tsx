/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkD1Icon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkD1Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 201" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m199.537 362.168 33.25 34.375-34.125 37.625 36.125 37.375-35.25 36.625h29.125l34.25-36.125-35.5-37.875 34.375-37.625-33.25-34.375zm55.5 0 33.25 34.375-34.125 37.625 36.125 37.375-35.25 36.625h29.125l34.25-36.125-35.5-37.875 34.375-37.625-33.25-34.375z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.037 -334.668)" /></svg>);

GokturkD1Icon.displayName = 'GokturkD1Icon';
