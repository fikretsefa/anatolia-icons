/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * MardinMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const MardinMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="722.68 284.08 97.63 57.53" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m812.6 290.8 2.8 7.5 1.3 5.2-.6 4-3.5 1.7-4.5 2.5-2 2.2.8 2.5 5.5 1.7 3 2.4.9 3.8-19.8 4.7-13.2.6-1-.3-2.1-.9-11.4-2.2-8.9 1.3-2.3.9-6.4 3.5-2.1.7H748l-1.1.2-1 .4-.9.6-6.3 4.2-2.1-1.1-4.3-7.5.5-4.8-.6-1.2-2.4-2.5-1.5-1.3-1.4-1.5-.6-7 4.6-6 2.1-2 5.2-3.6 2.4-.9 5.2-4.1 3.8-.3 2.3-3 .6-1.4 5.2-1.1 16.6.5 3-1.5h1.2l.9.4 3.4 4.3 3.3 6.9 5.1 3.2 7.3-1.5 5.3-3.9z" /></svg>);

MardinMapIcon.displayName = 'MardinMapIcon';
