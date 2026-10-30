/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AdiyamanMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AdiyamanMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="600.31 256.31 94.18 56.08" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m687.8 271-1.9 1.3-2.9.9-.8.4-.6.7-.2.9-.2 2-.5.9-.6.4-2.3.8.4.9.1.7-.3.8-.6.9.3.3.1.4-.1.5-.3.5-.3-.1-.9-.3h-.4l-.7.2-.7.5-.5.8-.4.9.7-.2 1.3-.9.6-.1.5.5-.1 1.5.6.9-.9.2-1.1.1-1 .2-.6.7.4.3 1.2 1.3-.3.3-.4.2h-.4l-.8-.6-.4.3-.2.5-.2.2-.2.1-.3.1-.3.1-.4.1-.2-.1-.6-.6-.1-.2-1 .6.9 1 2.3 1.8-10.5 1.6-2.3 2.4-.5.3-.6 1-2.8 3.1-1 .6-5.8 1-1.5-.6-2.8 1h-.5l-.3 1.4-.7.3-2.1-.3-.4.3-.1.8.1.7-.2.3-.2.1-.1.1-.1.1-.2.1-.2-.1-.1-.5-.2-.2-2.1-.5-.9-.4-.6-.8-1.4 1h-.5l-.7-.5-3.7-3.3-5.6-2.1-5.2-.1-5.2 1.1-5.2-3.2-2.8-1-1.7-2.8.1-3.5 1.8-2.4 2.7-2.3 2.3-2.9 6.7-1.3 4.2-1.7 4.4-.6 2 .6 2 .3 1.7-.6 1.7-.8 4-1 2.9-2.6.1-3.2 1.2-2.3 3.7-2.1 3-4.5 3.5-3.9 3.3-.1 2.8-.8 2.8.6.2 1.9-1.8 1.8-1 .6.3 1.3.8.4.8.5 2.8.8h3.3l3.3.4 3.5-.7h1.4l1.3-.3 1.9-.9 2-.5 2.6-1.2 2.1-2.5 1.3.8 3.8-1.6 1.5 1.6.2 1.6-.4 1.3-1.1 2.5.4.8-.4.8z" /></svg>);

AdiyamanMapIcon.displayName = 'AdiyamanMapIcon';
