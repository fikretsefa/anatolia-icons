/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * NigdeMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const NigdeMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="446.37 246.67 57.26 68.36" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m478.9 310.3-3.3-.8-3.3 1.4-1.5.9-1.6.6-3.5.1-1.1-2.6-1.8-1.9-1.2-1-1.8-2.6v-1.7l.3-2.7.7-1.6 1.1-1.3 1.1-3.1-.5-3.4-1.5-2.2-1.9-1.8-1.7-2.9-1.8-2.6-2.2-1.2-2.3-.9-1.5-2.4-.7-3.1 15.7-23.4 2.7.4 4.1-1.2 2.7-.1 1.3.7 2 2 2.4.7 5-1.9 3.3 9.2 2.8 2.9 7.7.1 1.3 4.1-.5 2.5.3 2.6.9 2.1.5 2.2-2.2 1.4-.2 3.1-.8 3.6-6.2 6.3-4.7.8-2.4-.8-2.4-.2-1.5 2.2.2 3 1.2 3 .3 1.7-.7 2.5-.7.7-.7.6-1.2 1.9-.2 1.3z" /></svg>);

NigdeMapIcon.displayName = 'NigdeMapIcon';
