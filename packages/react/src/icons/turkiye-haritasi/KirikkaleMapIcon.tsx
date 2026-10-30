/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KirikkaleMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KirikkaleMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="404.15 127.65 44.7 71.6" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m418.8 196.6-3.8-7.4-1.9-8.8-1.3-2.3-3.8-4.6-1.2-5.3 1.4-5.2 1.2-5.2 2.2-5.3 3.5-1.5 5.5-.6.6-3.6-.3-3.7v-4.2l.6-3.5.6-5.1 13.1 4.2 4.4.4.6 2.9 1.9 4.5 1.2 1.2 1.2.1.9 1 .1.7v.7l.7 1.8-.2 2.1-1 1.5-1.2 2.5v3.2l.5 1.2.2 1.3-.2 1.3.5 1.3-7.6 7.3-2.1 6.3-3.3 5.2-7.7 6.3z" /></svg>);

KirikkaleMapIcon.displayName = 'KirikkaleMapIcon';
