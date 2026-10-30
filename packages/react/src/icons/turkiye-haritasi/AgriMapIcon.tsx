/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AgriMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AgriMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="829.94 147.84 112.21 69.11" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M938 173.5v.2l-.3.8-1.6 3.2-.2.8-.1 1 .1.9.1.8v.7l-.5.7-.2 1.4.2 1.2-.1 1.1-.8 1.2-.9.7-2.4 1.1-1.1.3-1.2-.1-3.3-1.7-1.1-.1-2.6.7-1.1.1-1-.1h-.8l-.7.2-.9.7-.6.7.3.7 1.3 1.5-6.7 1.8-1.8-.3-.8-.3-2.8-.3-2.4-.7-1.8-.3-1.8.2-1.3 1-1.2 1.3-1.7-.1-4.1-.8-2.1-1.3-2.8-2.9-3.2-1.5-3.7-.2-2.1 1.6-1.7 2.3-1.6.5-2.9.6-1.1.4-.4 1.9 1.8 1 1.9.8.3 1.9-.3 2.1-.1 2.1-1.2 1.3-5.5 2.3-8.8 1.9-1.6 1.3-1.6 1-2.3.7-2 1.3-.2-3.2.4-3 .5-2.4-.1-.9-.2-.8.2-4-1.7-2.5-1.2-1.2-.8-1.7-1.5-1.7-1.5-1.4-1.9-3.4-1.4-3.8 1.5-2.5.5-2.9-.1-8.3.5-1.7.6-.4-6.7-2.8-3.9-4.7 1.7-.7 3.6.6 1.7-.6 1-1.5 1.2-.5.6-.1 1.2.1 1.6-.9 1.3-1.5 9.2 1.8 14.6-4.2 5.2.1 2.2.6 2.1-.5 2.6 1.1 1 3.5-.2 2.9v1.5l.7 2.3.7.7 1.6.6 3.1-2.1 3.2-1.3 1.5.3.6.5 1.6.7h1l1.5 1.1 1.1 2.3 1.4 1.9 4.3 2 3 .7.3.9.3.9 4.4.7 4.7-.6 3.5 1.1 3.7.5 8.5-2 1.8.5z" /></svg>);

AgriMapIcon.displayName = 'AgriMapIcon';
