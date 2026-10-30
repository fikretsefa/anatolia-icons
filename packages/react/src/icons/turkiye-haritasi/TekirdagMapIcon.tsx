/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * TekirdagMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const TekirdagMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="92.7 55 75.71 64.21" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m99.9 68.1 7.2-1.6 7.7-.6h5.5l2.7 1.8 2.1 2.8 2.6 1.7 3.1-.8 2.7-2.1 1.7-3.5 2.3-3.4 4.6-1.4 5.2-1.2 8.2-1.1 8.3-.9 1.3 4.5.5 4.2-1.4 5.2-.7 3.8.7 4.8.5 3.5-.4-.2-2.3.8-.4.3h-.4l-2.6 1-.7.2-.9.5-.7.5-.5.5-1.1 1.8-.3.8.1.5-.9.2-3.8-.4-.7-.5-.7-.6-.8-.4-1.8-.6-1.8-.1-10.2 1.5-1.4.9-1.1 2.1-1.2 5-1 1.9-4.5 4.4-2 3.6-4.3 3.2-.2.3-.5.7-.2.3-.5.1-1.2.2-1.3.9-2.2-.1-1 .1-.8.7-1.4 2-.6.4-1.2.1-1.5-4.6v-5l-6.9-.7-1.2-4.1-1.8-3.9-.3-5.1.8-4.4 1.5-3.8 2.3-3 .7-3.8-.3-8.8z" /></svg>);

TekirdagMapIcon.displayName = 'TekirdagMapIcon';
