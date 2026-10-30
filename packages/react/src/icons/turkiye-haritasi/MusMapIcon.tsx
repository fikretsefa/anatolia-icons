/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * MusMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const MusMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="778.79 179.99 75.82 64.12" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m841.7 182.8 1.4 3.8 1.9 3.4 1.5 1.4 1.5 1.7.8 1.7 1.2 1.2 1.7 2.5-.2 4 .2.8.1.9-.5 2.4-.4 3 .2 3.2-3.5 2.8-3.9 1.5-7.7-.9-1.7.6-1.5 1.1-1.9.8-2.1.2-.9.7-.6 2.8-1 .9-4.2-.1-.9 2.2 1.5 2.4.3 2.6-2 1.7-2.8 3.1-3.3 1.9-8.1-.6-7.3 2.8-.5.8-2.7.3-2.6.9-1.4-.5-.6-1.6.6-2.5-.6-2.4-3.2-2.3-2.4-3.2-.3-1.6-.6-1.4-1-.9-.6-.2-1-1.4-1-3.5 1.4-4.8 3.3-4.1.6-2.4-.3-2.7-1.3-2.4-.9-.9-1.1-1.9.1-1.9v-1l-.4-1.1-.3-.5-.8-1.8.3-1.4 1.3-2.4 7.6-1.3 3.8.9 1.8 1.2 4.6 4.6 2.8 3.9 1.1 1 4.1 1.6 4.1.2 1.8-1.4 2-1.2 5.8-1 1.5-1.3.9-1.1 3.2-2 1.4-2.3-.3-2.8 1-2.7 6.5-3.3 1.8-.1 1.8-.3z" /></svg>);

MusMapIcon.displayName = 'MusMapIcon';
