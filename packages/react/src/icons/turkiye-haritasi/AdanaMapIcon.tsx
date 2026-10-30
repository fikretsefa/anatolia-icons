/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AdanaMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AdanaMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="474.27 240.27 90.66 125.06" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m539.2 332.9-1-.4-1-.2-.9.5-3.9 4.5v2.5l.7 1.2-1.8 2.3-.7.5-.8.2-.4.4-1.6 1.8-.7.6-1.8.4-4 .2-1.7.7-.6.5-.5 1.1-.5.4.2-.4v-.3l-.2-.3-.4-.2-.4.9-.7.7-.5.7.4.9.7-.9 1 .3.2-1 .2.1.2.2.1.2.1.3.3-.4v-.8l-.3-.4.7-.4.3.3.2.6.3.3.5-.1.5-.4.5-.2.6.3-2.8 1.3-1.3 1-.8 1.4.1.6.7-.4 2.1-2.5.6-.4.8-.2-1.8 1.8-.3.5-.4 1.1-.3.5-.2.5v.8l-.1.7-.4.2-.4.1-.7.6-.5.1-1.5.1-.6-.1-1.5-1.4-.4-.2-.7.2-.4.3-.1.6.4.1.4.1 1.7.7-2.1-.6-2-.2-.4.1-1.1.6-.3.3-.2.4-.4.3-1 .3-1.2 1.1-.1.2-.5-.3-.8-1.1-.5-.3-.7-.2-12-7.3-1.3-.4-1.5-1.1-1-.3-.7-.1h-.6v-.1l2.5-1.7 2-.6 1.8-1.6.2-1.6-.2-1.7-.7-3.3v-3.4l1.4-3.7-1.8-1.9-2.9.2-2.3-1.7-1-3.4-.1-6.1-2.3-1.8-1.8-3.3-1.6-3.6v-2.8l.2-1.3 1.2-1.9.7-.6.7-.7.7-2.5-.3-1.7-1.2-3-.2-3 1.5-2.2 2.4.2 2.4.8 4.7-.8 6.2-6.3 8.2.7 4.3 1.1 5.8 2.3 2.5-1.2-1-11 17.6-12.2 2.6-3.5 2-4.1 1.3-1.9 2.1-5 2-1.7 3.7-2.1 3.8-1 2.5 1.1 1.8 2.8 1.2 3.2 2 2.1-2.6 2.5-1.5 3.8-2.4 10.7-1.4 3.8-.6 4-.1 1.8.3 2.9 1.5 3.7-.1 2.4-1.6 1.6-.9.5-1.3 1.7H546l-4.5.3-2.2 3.7-2.7 6.2-3.1 7.7v4.6l1.4 4.4 1-.1 3.1.6 1.3 1.1.4.8.6 3.4-.7 3.1z" /></svg>);

AdanaMapIcon.displayName = 'AdanaMapIcon';
