/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkY2Icon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkY2Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M255.162 357.918c-15.258 0-36.25 11.998-36.25 36 0 27 26.5 46 26.5 46s-9.5 18.5-9.5 35.25c0 19.502 12 37.25 12 37.25l23.5-13s-8.75-12-8.75-26c0-23.251 35.5-50.75 35.5-72.25 0-9.263-8.998-43.25-43-43.25zm.75 26.25c9.625 0 15.5 10.622 15.5 15.75 0 5.876-10.25 18.25-10.25 18.25s-16.125-10.744-16.125-23.5c0-4.882 4.5-10.5 10.875-10.5z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkY2Icon.displayName = 'GokturkY2Icon';
