/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * TrabzonMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const TrabzonMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="681.8 79.2 70.31 43.01" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m743 89.3 1.7 3.9 1.2 4.2.5 4.4 3 7.6-.6 4.3.7 3.9-.9.2-1.9.6h-4.9l-2.4.4-2.3.8H735l-3.9-1.3-4.1-.1-1.9-1.1-2.9-3.3-1.5-.5-.3.2-.6.6.3 1.5-.7.8-1 .1-2.3-3.9-3.3-2.2-1.4 1.1-.6 2.6-.7.8-1 .2-2.8-.3-11.1-4.5-3.2-3.3-.7-3.7-2-1.2-.8 1.1-1 .9-1-.1-.9-.7-.8-2.4-.4-5.8.1-3.1 1.3-7.6.4-.4.6-.1 1.5.1.9.3 1.5 1.3 1.1.1.8-.2 1.2-.9 1-.1.6-.2 2.5-1.6.3-.2.2-.3.2-.2.6-.2 3 .8.7.6 1.2 1.7 2.8 2.4 1.8 1.1 1.9.4.9-.4 1-.4 1-.2 1.2 1h1.6l.4.1 2.9 2.3.8.4.9.2.8-.6 3-1 1.1-.2 2.8 2.6 1.3.9 2 .4.8-.1 1.4-.6 1.1-.3 1.7-.6 1.1-.8 2.2-.6z" /></svg>);

TrabzonMapIcon.displayName = 'TrabzonMapIcon';
