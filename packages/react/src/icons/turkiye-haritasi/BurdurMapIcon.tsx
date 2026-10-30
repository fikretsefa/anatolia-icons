/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BurdurMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BurdurMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="219.46 279.96 79.27 61.47" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m236.6 338.5-4-5.6-5.7.8-2.3 2.9-1.9-.7.8-3.5-1.1-3 .4-3.2.8-3.1 1.3-2.9 4.7-7 2.1-4.2.1-.5-.2-.9-.3-.4-.3-.3h-.6l-.6-2.2.1-2.4-.5-1.7.1-1.5 6-3.3.5-1.3.6-1.3 1.4-.8.7-.3 2-1.2 3.4-2.8 3.8-1.4 4.2.3.7 2 .9 1.8 1.8.6 1.8-.8 5.2-3.8 1.4-.7 1.3-.9 2.2-2.3 2.3 1.6 2.2 3 1.8 2 2.1 1.6 3.3.6 3-.1 2.8 1.8 1.6 4.8 1.3 2.9 2.9 4.4.4 1 .9 1.1.7-.1 1.4.2 1 1.4.7 1.7-3.3 2.9-.9 2.6-2.9 3.1-1.8.5h-3.7l-4.3-.5-6.6.3-1.1-.4-2.9-3.6-2.9-.4-7 3-2.9.5-8.6 4.4-2.6 3.6-.7 4.4-1.9 3.5-1.3 1.3-1.1 1.6-1.3.7z" /></svg>);

BurdurMapIcon.displayName = 'BurdurMapIcon';
