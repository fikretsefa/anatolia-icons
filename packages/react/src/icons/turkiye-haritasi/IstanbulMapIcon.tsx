/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * IstanbulMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const IstanbulMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="160.2 51.5 88.99 48.49" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M163.8 57.8h.1l2.2-3 1.4 1.3 7.2 4.6 10.3 4.4 14.6 7 4.7 1.1.2.1.1.1.2.2h.3l.3-.1.3-.6.4-.1 1.1.1 1.2.5.7.7-.4 1.6-.7 1.1-.8 1.1-.8.5-.6.2.2.4.4.5.2.5.3.4.1.1.3.2-.1.4-.2.3h-.1l-.2 1.2-.3 1.2-.5.9-.5.8-.4.3-.8.3-.4.3-.4.6-.1.3.1.3v.2l.2.3-.1.3-.2.4h-.2l-1.1-.1-.4-.3-.2-.1-.3.2-.4.6-.2.1-.5.1-.9.6-1.9.4-.4.2-.3.2-.2.3-.3.2-.5.1h-1.2l-.6-.2-.2-.4-.5-.5h-1.2l-5.7.7-1.4-.6.4-2-.6-.6-.3-.2-.4-.1.3-1.4-.5-1.3-1-.8-1.1-.3.2.9 1.1 1 .3 1.1v.6l-.1.9-.3.9-.6.6-1.3-.2-2.5-2.5-1.2-.7-1.6-.3-3.3-1.2-1.6-.2H169l-.4-.2-.5-.6-.4-.1-1.8.4h-.9l-.3-.2-.5-3.5-.7-4.8.7-3.8 1.4-5.2-.5-4.2zM216 96.7l-.6-.4-1 .2-.9-.9-2.7-1.3-1-.8-1-1.2-.9-.8-2.7-1.5.2-.1h.1v-.1l.1-.2-.6-.3-.2-.6-.2-.9-.3-.8.8-.5 1-1.1.8-1.3.6-2.4.6-.9.1-.8-1-.7 1.1-1.7 1.8-2 1.9-1.4 1.4.3h.3l.5-.7.7-.1 8.9 1.7 9.5 2.2 12.6 1.9-1 .5.5 1.9.2 2-1.4 3.2-2.5 1.4-3.1 1.2-2.7 1.9-.5 1.5-.8 1.5-1.7.2-1.4-1.2-1.4-3.1-2.3-1.9-2.5-.2-2.1 1.5-2 2-1.1.6-2.5 2.1z" /></svg>);

IstanbulMapIcon.displayName = 'IstanbulMapIcon';
