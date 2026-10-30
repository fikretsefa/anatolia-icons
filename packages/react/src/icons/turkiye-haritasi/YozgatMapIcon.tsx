/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * YozgatMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const YozgatMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="439.7 132.7 110.81 83.51" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m513 139.7 3.3 3.7 3.8 2.6 4.4-.4 3.7.8 2.2-.2 2.3-.5 1.9-.8 2-.6 2 1.9-.3 3.5-.1 2.4.9 1.8.9.9.5 1.3 1.4 4.5 2.3 4.1 1.6.9.5 1.4.1 1.4-1.4 5.1-3.4 3.4-4.1 3.2-1.7 2-1.4 2.3-1.2 2.3-1.5 2-2.1 1.6-1.8 2.1-4 5.6-15.4 10-2.1.7-5.4 3.4-10.7-1.7-.7-1.5-.7-1.5-.4-1.3-.2-1.4.5-1.4-1.1-1.9-3.8-2.4-.6-2.4-1-1.9-1.5-.8-1.2-1.4-.4-1.2-.2-1.3-.4-.8-1.4-.6-.7-.2-1.3-2.9-2-1.8-2.4-.4-2.1-1.4-6.6-8-.6-1.3-.4-1.4-.9-1.3-3.7-.1-2.2-.7-2.4-2.7-2.5-2.3-2.6-.1-.9-.8-1-1-.5-1.3.2-1.3-.2-1.3-.5-1.2 2.7-1.3 7.5-.9 4.5-2.1 4.6-1.5 7.3 1.3 2.8-1.1 1.9.2 3.8-.2 7.2-3.5 4 1.2 2.2-.2 3.7-2.3 1.3-1.7.1-1.2.5-1.4.1-1-.6-.7.5-2.8 4.6-.4 1.9-.7.4.2.4 1.3.9.6 2.1.2 2.5-.2z" /></svg>);

YozgatMapIcon.displayName = 'YozgatMapIcon';
