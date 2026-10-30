/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * SamsunMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const SamsunMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="479.2 38 116.1 64.8" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M591 79.7v.3l-2.5 3.5-2.7 2.8-2 3.9-3.8 2.1-1.9 2.1-.7.6-1.7 1-1.9.6-2.1.2-.9.5-1 .3-.8-1.6-1.7-1.1-2.5-.1-.3-.2-.3.4-1.6.8-5.2 1.3-5.1-3.7-.8-1.4-.6-1.4-1.3-1.5-1.7-.6-1.9 1.2-.9 2.9-1.4 2.5-2.2 1.5-1.7 1.4-2 .5-3.7-1.8-6.3-.1-1.8-.3-3.6.2-1.6-.4-1.6-2.8-6.9-5.3-1.6-.9-2.9.5-14.7-4.2-1.8-.4-3.7.4-.7-2.3-.3-2.5-.6-2.3-2.5-4.4.8-.6 1.1-.5.7-.8-.4-1.1.5-.5.4-.3 1.2-.1.6-.2 1.6-1.5 2.5-1 1.2-.7.5-.9.5.5.4.9.3 1.2.1 1.1.3.6.8.5 1.5.8-.5.8.5.3 2.1.3.4.2.8.9 1.5.8 2.1.3 2-.4 1.5-1 .9-.4 2.5.6.9-.7-.4-3.8-.3-1.8-.6-1.3-.3-1.5.2-1.9-.1-1.8-.8-3.1.2-3.2 1.9-4.2 1.4.4 2.2.3 2.1-.2 1-.4 1.8-1.1 2.9-.5 5-2.2 1.2-.2 1.1-.3 1.9-1.6 1.1-.3v.5l-.2.4-.3.3-.4.4-.5.2.1.9-.9 2 .2 1.1h.4l.1-1.6.4-1.4.6-1.1.7-.8.5-.4.3-.1 2.8 2.7v-.9h.4l3.5 4.7.7 1.9v2.5l-.2.7-.4 1v.3l-.1 2.1.2 1 .5 1.1 2.1 2.6 1.2.9 1.6 3 .7.6 2.4 1.3 1.4.3.2.3.2.5v.7l.1.7.4.3.6.2.5.3.3.3.4.7.3.3.5.1.8.2.5.3.8.4 1.2-.3 2-1.1 2.5-2.3.4-.6.2-.6.7-1.1.1-.4.1-.2.3-1.3-.1-.1.7-.5h.6l.8.3 1 .2h4.1l3.8 1 7 3.5 1.4 1.3.8 2 .1 2.8.3 1.1.8.4 1 .3 1.8 1.1.9.4z" /></svg>);

SamsunMapIcon.displayName = 'SamsunMapIcon';
