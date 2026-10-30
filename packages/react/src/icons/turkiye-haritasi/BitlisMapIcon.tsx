/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BitlisMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BitlisMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="795.9 203.5 83.59 76.59" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m851.1 212.8 2-1.3 2.3-.7 1.6-1 1.6-1.3 8.8-1.9.1 4.6 1.4 3.1 5.6 3.4 1.9 3-1.4 4.5-3.4 2.6-2.6 2.8-4.4 6.5-.8 1.9-1 1.7-3 2.1-5.1 2.9-.8.9-.5 2.5.3 1.3 1.7 3.9.2.7.1 1.6-.5 2.1.9 3.1 2.5.9-1.3 4-.6.7-.5.8v1.8l.2 1.9-.2 2.8-1.4 2.1-1.8.2-3.2-2.4-4.8-2.7-3-2.2-2.1-.9-3.3-.8-3.4-1.4-3.1-2.4-2.8-2.8-3.2-1.5-4.1 1.6-4.1 1-5.1-.4-4.9-1.9-.1-1.3.2-1.4v-2.2l-.2-2.2-1.1-3.3-1.7-8.2-4-1.5.5-.8 7.3-2.8 8.1.6 3.3-1.9 2.8-3.1 2-1.7-.3-2.6-1.5-2.4.9-2.2 4.2.1 1-.9.6-2.8.9-.7 2.1-.2 1.9-.8 1.5-1.1 1.7-.6 7.7.9 3.9-1.5z" /></svg>);

BitlisMapIcon.displayName = 'BitlisMapIcon';
