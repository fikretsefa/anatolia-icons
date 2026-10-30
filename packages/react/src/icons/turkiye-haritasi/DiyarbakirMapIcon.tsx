/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * DiyarbakirMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const DiyarbakirMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="679.81 224.41 118.58 91.08" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m777.3 287.7-3 1.5-16.6-.5-5.2 1.1-.6 1.4-2.3 3-3.8.3-5.2 4.1-2.4.9-5.2 3.6-2.1 2-4.6 6-2.2-2.5-1.6-3.1-1.7-4.9-.2-.9-.4-1.7-.7-4.5.3-6.5-.7-1.5-.9-.2-.8-.5-1.2-1.1-1.4-.6-.4.8-.5.7-2.3-1-1.8-1.7-1.6-.5-1.5-.8-3.1-2.6-2.8-3-2.6-1.2-2.9-.1-3.8-.7-3.7-2 1.7-1.2.4-.8-.4-.8 1.1-2.5.4-1.3-.2-1.6-1.5-1.6-3.8 1.6-1.3-.8 1.6-5.6-.1-1.4-.6-1.3-.9-.9 6.6-1.1 3.9 1 4 .3 2-.8 3.7-.5 1.3-.8 3.6-.3 3.7.2 1.6-.6 1.4-.9 1.2-1.9 1.1-1.9.7-2 2.2-.4 1 .5 1.7 1.3.8.3 15.9-.5 5.5-.2 1.9-.9 1.3-2v-1.8l.3-1.7 2.7-1.3 4.6-.7 1.7.2 2.3.6 8.1.3 3.1-.9 5.9-3.6 5.8-2.2 2.3-1.7 2.4 3.2 3.2 2.3.6 2.4-.6 2.5.6 1.6 1.4.5.3 2-1.8 1-1.5.2-1.5.5-2.5 1.2-1.1 1.5-.4 2.2-1 3.3-.5 3.5.6 6.6-.4 3.4-.7 1.4-.9 1.3-2.2 7.3-1.9 2.2-2.3 1.6-.5 1.4.5 1.7.4 2.3z" /></svg>);

DiyarbakirMapIcon.displayName = 'DiyarbakirMapIcon';
