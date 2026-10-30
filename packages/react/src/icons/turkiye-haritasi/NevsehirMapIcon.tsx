/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * NevsehirMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const NevsehirMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="448.52 185.52 46.46 69.66" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m484.8 250.7-5 1.9-2.4-.7-2-2-1.3-.7-2.7.1-4.1 1.2-2.7-.4-1.8-1.1-1.6-1.7-1.9-1.5-.9-.8v-2.9l1.4-3.1-.4-2.8-1-.3-2 .4-2.4-.7-2.2-1.4-.7-3.1 1.7-2.7.8-3.1-1.6-5.4.5-2.5 5.3 4.5 1.9-.5-.2-1.4-.5-2.7 1-3.3 5.7-2.4 2.6-1.6 3-1.3 1.9-2.6-1-2.3-1.4-2.5.6-4-.6-3.1-1-1.9-.4-2.2.2-1.4 1-.6 3 .8 2.8-.5.7.2 1.4.6.4.8.2 1.3.4 1.2 1.2 1.4 1.5.8 1 1.9.6 2.4 3.8 2.4 1.1 1.9-.5 1.4.2 1.4.4 1.3.7 1.5.7 1.5-.7 1.1-.5 1.3-.1 1.5v1.5l-1 3.3-1.3 3.1 2.2 4.4 3.3 4.3-.2 2.8.5 2.8-.2 2.9-4.2 6.7-1.9 2z" /></svg>);

NevsehirMapIcon.displayName = 'NevsehirMapIcon';
