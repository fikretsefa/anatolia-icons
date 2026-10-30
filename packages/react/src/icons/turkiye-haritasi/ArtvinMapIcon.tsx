/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * ArtvinMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const ArtvinMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="777.12 53.72 72.36 65.76" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m842.7 61.7.7 3.6.3 2.7.5 1.5.4.7.9 2.3 1.3 4.4-1.2 4.2-4 2-4.1 4.6-3 5.9-2.8.3-2.8.6-3.3-.3-3.2.3-1.6.8-1.5 1.3-.6 2.5.3 2.7-1.2 2.5-1.9 1.9-.9 2.5-.1 2.8-2.2 3.3-4-2.3-3.8-1.1-3.7 1.1-4 2.6-4.4 1.7-3.2-2.9.6-5.3 1.3-2.2-.4-2.1-1.7-.6-5.9-.9-3.7-2.1.7-2.5 4.5-5.3 1.1-.6 1-.9.4-1.3.7-1.3 2.6-1.7 1.3-2.9-1.4-1.6-1.9-.9-.5-1.1-.6-1.1-.9-.6-.9-.9-.9-2.1-.4-2.5-1.3-3.3-.1-.2 4.1-3.3 1.2-.4 1-.6.5-.2 1.7-.2.6-.2.9-.7.7-1.1.5-1.4.2-1.4.5-.3 2.7-2.5.7-1.2 5 2.2.7.1 1.4-.1 1.2-.6h.3l.1.3-.1.5v.5l.2.4.6.2 1.4.2.6.2 1.9 1.7.6.3.4-.3 1.9-1.6 1.5-2.1.7-.5 1.9-.8 3.4 1.3 1.7-.5.6-.4.7-.1.7.1.7.4 1.4-.5h.8l.6.5.8.7 1.2.1 2.3-.1 8.3 3.2z" /></svg>);

ArtvinMapIcon.displayName = 'ArtvinMapIcon';
