/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * OsmaniyeMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const OsmaniyeMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="531.8 291.8 40.51 46.01" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m570.6 317.3-2.2 2.5-1.8 2.8-2.6 5.1-3.3 4.2-1.8 1.7-1.1 2.2-2.4.3-2.4-.1-1.8-1.1-1.6-1.7-2.1-.7-2.3.6h-1.9l-2-.6-2.1.4 1.4-3.6.7-3.1-.6-3.4-.4-.8-1.3-1.1-3.1-.6-1 .1-1.4-4.4v-4.6l3.1-7.7 2.7-6.2 2.2-3.7 4.5-.3h3.6v4.7l-1.1 1.8-1.3 1.4-.4 1.8.6 1.7.6.7.5.7.3 4 1.9 2.4.5-.1.3-.6.5-.2.5-.2.6-.3.8.9 1.6-.3 1.8-.6 1.3-.3 3.9-.8 1.8.5 1.6 1.1 2.6 2.4z" /></svg>);

OsmaniyeMapIcon.displayName = 'OsmaniyeMapIcon';
