/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * SinopMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const SinopMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="445.41 16.61 69.98 62.18" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m512.6 48.4-1.9 4.2-.2 3.2.8 3.1.1 1.8-.2 1.9.3 1.5.6 1.3.3 1.8.4 3.8-.9.7-2.5-.6-.9.4-1.5 1-2 .4-2.1-.3-1.5-.8-.8-.9-.4-.2-2.1-.3-.5-.3.5-.8-1.5-.8-.8-.5-.3-.6-.1-1.1-.3-1.2-.4-.9-.5-.5-.5.9-1.2.7-2.5 1-1.6 1.5-.6.2-1.2.1-.4.3-.5.5.4 1.1-.7.8-1.1.5-.8.6-.1.4-.1 1.1-.1.5-.2.3-.9.8-1 1.2-5.4-1.7-.8-.6-.5-.9-1.2-.9-1.4-.3-1.6.4-1.6-.3-.8-.9-1-.2-1.8.1-1.2-1.6.3-8.3-.5-1.2-.3-1.2.5-2.4.9-2.2 1.4-1.4 1.5-1 1.7-4.3-2.7-3.5-3.1-.9-5.8-.3-2.9-.8-2-.3-1.7.1-3.1-1.2.1-2.1 2.4-2.9 1.3-3.7-.2-3.6 5.5.7 5.4-1.6 1.8-.1.7.2 1.4.7 1.6.6 6.3.4 2.5-.3 2.5-.8.8-.4 1.7-1.4 1.8-1.1 1.4-1.8 1.1-2.1.3-1.9.6.2 1.4.3.6.4.1-.4.2-.1h.7l.3.8.5.5.4.4-.3.5v.4l1.8 1.4 1.1.5 1.4-.1.5-.3.8-.8.5-.2.7.1.4.3 1 .9v.4l-2.5-.3-1.2.2-1 .8-.5.9-.4 1.4-.2 1.5-.1 1.2.3 1 1.3 2.4 1.4 1.9 2.6 2.1v.5h-.7l.3.8.5 1 .6.9 1.4.7 1.4 1.7.7.6 2.8 1.1 2.1.4.8.5 1.5 1.4 1.7 1z" /></svg>);

SinopMapIcon.displayName = 'SinopMapIcon';
