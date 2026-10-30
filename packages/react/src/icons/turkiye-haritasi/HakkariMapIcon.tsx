/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * HakkariMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const HakkariMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="883.06 276.06 73.98 61.98" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m886 315.3.6-1.2 1.2-3.2.4-5.2-1.6-3.9-.8-3.2 1-3.5.3-5.5h6.4l6.3-1.1 1.3-.7 1.4-.5 2 .3 2 .8h3l3.1-.6 2.6-1.6 1.2-3.3 1.9-3.4 3.5-.7 4.1.5h.1l-.2.5.9 1.3 1.6.3 3.1-.4.6.2 1.7.8.5.4.3.5.1.7.3.8.5.6.4.2.3-.1.3-.1.4.3v.3l-.2.9v.4l.3.7h.7l.8-.2.6-.4 1.3-.1 1.3.6 1.2 1 1.7 2.2.1.5-.4.8-1.7 1.3-.4.6-.2 1.8 1 1.1 1 .8.2 1-.4 1.2-.3 1.5-.1 1.5.2 1.2.2 1-.6 1.8.3 1 .6.3 1.8.2.7.6.7 1.7.4.5 1.8-.3.4.5.3.9.4.8 2.7 1.8 1.1 1.2-.2 2-.5.7-.7.4-.6.5-.3 1 .2 1.2.4 1 .3 1.1-.3 1.1-.6-1-.9-.5-5-.7h-.9l-1.5.7-1.9 1.4-1.7 1.6-1.1 1.5-1.2.9-1.2.7-4.1 1.3-.4.7-.1.9-.8 1.3-.4 1-.5.4-.6.1-1.9-.5-.5-.4-.3-.6-1.9-4.3-.3-1.3V327l.4-1.2.8-1.1.6-.3.6-.1.4-.2.4-.7.1-.6-.1-.8-.2-1.3-.4-1.3-.6-1.1-.8-.8-1-.7-4.6-1.9-.9-.1-1.6-.3-2.1.3-1.8 1.5-1.4 2.1-1.4 1.7-2.6.4-.8.9-.6.2-.4-.3-1-1-.5-.3-1.1-.3-1.2-.1-4.9.3-1.1-.1-1.2-.5-.9-.7-.4-.2-.6-.1-.6.1-1.2.5-.6.1-.8-.4-2.2-1.8-1.9-1z" /></svg>);

HakkariMapIcon.displayName = 'HakkariMapIcon';
