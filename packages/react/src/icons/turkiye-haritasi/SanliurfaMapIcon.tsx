/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * SanliurfaMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const SanliurfaMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="619.1 266.4 124.2 91.9" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m726.3 311.1.6 7 1.4 1.5 1.5 1.3 2.4 2.5.6 1.2-.5 4.8 4.3 7.5 2.1 1.1-3.4 2.3-1.8.9-1.8.3-1.7.6-4.7 2.8-10.2 3.9-15.3 2.9-9.6 1.9-2.6.1-7.3-2.5-2.5.2-1 .3-7.7.3-3.4-.4-2.9-1.5-1.3-1.5-5.1-5.3-2.3-1.3-9-2.7-3.2-.4-1.6.2-3.2 1.2-4.6 3v-.1l-.2-.5-.1-.8.1-.8.4-.3.5-.2-.2-.5-.8-.9-.2-.6-.1-.6v-1.5l-.2-.5-1.3-1.2-.7-.8-.1-.5v-.9l.6-1.4.1-.7-.5-.3-.7.1-1.1.6-.4.1-.4-.3-.5-.5-.4-.3-.6.3-.6-.6-.1-.8.3-1.7.1-1.4-.1-.6-.3-.7-.8-1.3-.3-.8-.2-.9.2-1 .4-.4.4.1.3.7h.3v-1.3l-.3-.9-.6-.6-.7-.5.6-2.1.2-.6.4-.3.4-.2.2-.2.4-1.5.5-.8 1.6-1.6 2.1-2.7.7-.6h.8l.8.1.8-.1.7.5h.5l1.4-1 .6.8.9.4 2.1.5.2.2.1.5.2.1.2-.1.1-.1.1-.1.2-.1.2-.3-.1-.7.1-.8.4-.3 2.1.3.7-.3.3-1.4h.5l2.8-1 1.5.6 5.8-1 1-.6 2.8-3.1.6-1 .5-.3 2.3-2.4 10.5-1.6-2.3-1.8-.9-1 1-.6.1.2.6.6.2.1.4-.1.3-.1.3-.1.2-.1.2-.2.2-.5.4-.3.8.6h.4l.4-.2.3-.3-1.2-1.3-.4-.3.6-.7 1-.2 1.1-.1.9-.2-.6-.9.1-1.5-.5-.5-.6.1-1.3.9-.7.2.4-.9.5-.8.7-.5.7-.2h.4l.9.3.3.1.3-.5.1-.5-.1-.4-.3-.3.6-.9.3-.8-.1-.7-.4-.9 2.3-.8.6-.4.5-.9.2-2 .2-.9.6-.7.8-.4 2.9-.9 1.9-1.3 3.7 2 3.8.7 2.9.1 2.6 1.2 2.8 3 3.1 2.6 1.5.8 1.6.5 1.8 1.7 2.3 1 .5-.7.4-.8 1.4.6 1.2 1.1.8.5.9.2.7 1.5-.3 6.5.7 4.5.4 1.7.2.9 1.7 4.9 1.6 3.1z" /></svg>);

SanliurfaMapIcon.displayName = 'SanliurfaMapIcon';
