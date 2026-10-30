/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AksarayMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AksarayMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="403.8 210.2 63.39 70.09" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m416 234.6 4.1-1.1 3.9-2.2 4.2-1.2 4.2.2 1.8-.9 4-3.8.1-3.6-1.9-5.1 1.6-4.1.7 1 1.9.4 1.1-.1 1.8.8.7 2.5 1.9 1.6 2.4-1.4 1-.3 2 .3 1-.2-.5 2.5 1.6 5.4-.8 3.1-1.7 2.7.7 3.1 2.2 1.4 2.4.7 2-.4 1 .3.4 2.8-1.4 3.1v2.9l.9.8 1.9 1.5 1.6 1.7 1.8 1.1-15.7 23.4-3.5-.6-3.6.8-3.7 1.5-3.7.9-3.8-.1-7.4.5-5.6 1.2-2.1-.1-1.9-1.8-3.2-4-.7-2.3-.4-2.5-.5-.6-.6-.5-1.8-4.6.4-5 .7-2 .3-2.3 1.1-3.2 1.7-2.6.7-4.8 1.1-2 2.7-3.1z" /></svg>);

AksarayMapIcon.displayName = 'AksarayMapIcon';
