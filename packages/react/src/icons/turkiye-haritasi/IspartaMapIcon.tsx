/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * IspartaMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const IspartaMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="249.05 239.35 82.4 76.2" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m314.6 308.3-2.5-.4-2.4.9-2.2 1.6-2.6.4-4.9 1.7-4.2-1.7-.7-1.7-1-1.4-1.4-.2-.7.1-.9-1.1-.4-1-2.9-4.4-1.3-2.9-1.6-4.8-2.8-1.8-3 .1-3.3-.6-2.1-1.6-1.8-2-2.2-3-2.3-1.6-2.2 2.3-1.3.9-1.4.7-5.2 3.8-1.8.8-1.8-.6-.9-1.8-.7-2 3.7-.1 3.4-1.9 1.6-2.9.6-6.2 1-1.9 3.2-1.9 4.3-4.2 1.9-1.1 2.4-2.2 2.4-2.7 1.7-.7 1.9-.5 2.6-2.2 1-.2 1.1-.1 3.6-1.4 3-2.8 2.9-3.4 5.9-4.8 2.4-2.6.9-.8 1.2.2.9.6.9.7 2.1 3.1 1.1.7 1.2.3 1.3 4.5 3.7 3 2.9 3.7 3.3 2.8 1.6.7 1.1 1.6 3.5 3-.4 2-3 1.9-3.3 1.3-1.6.9-1 4 1.1 4.7.1 4.7-2 3.1-.2 2.8-1.5 2-2.1.6v2.1l1.2 1.8.6 2.2-.4 3.6z" /></svg>);

IspartaMapIcon.displayName = 'IspartaMapIcon';
