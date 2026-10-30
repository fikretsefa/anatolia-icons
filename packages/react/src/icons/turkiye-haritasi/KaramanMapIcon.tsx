/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KaramanMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KaramanMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="364.78 291.58 86.83 78.73" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m377.3 366.7-.9-1.9-1.9-1-1.6-1.1-1.3-1.6-1.9-4-1.7-4.3 5.4-4.1 6.8-6.7 1.4-2.2.2-1.8-.7-1.6-2.9-.2-2.9-1.3-.3-2.1 1.2-4 4.5-5.8 5.7-7.9 5.6-6.2 2.5-2.8 4.5-1.8 7.1-.9 7.4-.5 4.8-1.8 2.3-3.1 1.4-1.8 2.2-1.4 4.7.2 1.9.7.4 3-.2.9 1.1 3.8 5.3 5.9 3.9 4.1 2.8 3.1 3.2 5.4 1.1 2.3-3.3 1.3-3.6.3-1.7.7-4.6 3.5-3.5.7-1.7.9-1.2.1-1.6-.5-3.9.4-3.8 1.5-6 .5-2 .6-1.7 1-1.5 1.4-1.6 1.1-1.8.6-1.5 1.9-.6 2.6-1 1.7-1.7-.4-.4-.7-.1-.5-.6-.3-1.4.5-2.1 1.4-.8.3-1.8.3.1 1.9 1 1.2.8 1.4.4 1.7.7 1.6 1.2.5.9 1.2 1 .8 2.5.7 2.2 1.6 1.1 1.8-1.2 1.6-1.8-.7-1.7-.9-.7.1-.7.3-.7 1.9-.5 2.1-1.2 1.2-1.5.2-2.9-.1-2.8.6-2.7 1.3h-2.9l-3.1-.8z" /></svg>);

KaramanMapIcon.displayName = 'KaramanMapIcon';
