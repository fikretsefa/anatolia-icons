/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * ErzincanMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const ErzincanMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="643.16 142.46 119.88 73.48" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m667.5 148 2 .1 4.2-.3 1.9-.9 1.3.8 1.4.6 1.4.3 1.4.3 5.2 3.1 1.8.7 1.8 1.1.7 1.1.8.8 2.9.9 2.8 1.4 2.9.3 2.8-.3 2.8.2 2.7-.2 2.6-1.3 5.3-1.3 2.1-2.2 1.8-2.7 2.5-1 2.7.3 2.4-.3 1.9-1.8 2.3-.8 7.7 1.5-1.4 3.3-.4 3.6 2.5 1.3 8.1.1 3.2 4.2-.1 1.8.2 1.7.7 1.2.8 1.1 1.8 1.4 2 .8 1.6 1.8-1.1 2.6-1.7 3.1-.1 3.9-3.1-1.1-3.9-.1-3.8-.6-7.1-.2-.9-.5-1.8-.7h-.5l-.2.2-1.5.4-1.8.9-1 .1-4.4 1.6-3.7-1-2.5-1.5-1.8.6-2.2 2.7-3.3 1.1-7.2 1.1-3.8.1-3.6-1-3.7-.2-1.9 1-2 .5-2.4-.4-2.5.5-4.7 1.8-1.3 1-.9 1.7-1.2.6-1.3-.1-.7 1-.6 1-.5.3-2.9 1.1-.7 1.9.6 1.9.7 1.1-1.3.8-1.3.3-1.1.7-.7 3.5-1.1.5h-.2l-.4.4-.2 1.4.2 1.4.4.3.4.4.4 3.8-1.5.3-1.2.6-3.1-3.6-2-1.2-2.2-.9-4.5-.2-3.7-1.9 1-1.6.4-2.1-.2-1-.3-.9.1-1.2.2-1.1-.3-1.8-.6-1.8v-2l-.1-1.1-.2-.7.6-.1.4-.5.4-.5.5-.5 1.7-1.1.4-1-1.1-1.5-1.5-1-1.7-1.6-.6-2.3 1.1-2.2.6-6.4 2.3-3.1 1.2-2.1 1.8-.9h.9l1-.2.5-1.7-1-1.2-3.5.9-3.3.1-.4-1.9 1.8-5.2 2.1-1.2 2.2 1.7 2.3.4 2.3-1.6 2.5-.6 2.1.4h2.2l1-2.4z" /></svg>);

ErzincanMapIcon.displayName = 'ErzincanMapIcon';
