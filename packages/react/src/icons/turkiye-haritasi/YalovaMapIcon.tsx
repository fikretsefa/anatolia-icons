/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * YalovaMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const YalovaMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="191.96 106.06 33.59 17.89" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M224.3 108.3v5.6l-.4 2.4-3-.6-3 3.2-3 .6-7.3-3.2-1.4.2-3.3-.8.1 6.8-.5.2-2.5-.6-4.2-2.7-2.6-.6.9-1.9 1.6-1.1 3.4-1.3 1.4-.9 2-2.1.8-.3 14-1.3 2-.7 1.9-1.1 1-.8h.3l.4.3.3.6.5.4z" /></svg>);

YalovaMapIcon.displayName = 'YalovaMapIcon';
