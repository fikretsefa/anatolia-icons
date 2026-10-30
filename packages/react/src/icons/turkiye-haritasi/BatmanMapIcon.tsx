/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BatmanMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BatmanMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="772.9 237.6 42.19 67.39" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m812.6 290.8-8.8 6.3-5.3 3.9-7.3 1.5-5.1-3.2-3.3-6.9-3.4-4.3-.9-.4h-1.2l-1-1.8-.4-2.3-.5-1.7.5-1.4 2.3-1.6 1.9-2.2 2.2-7.3.9-1.3.7-1.4.4-3.4-.6-6.6.5-3.5 1-3.3.4-2.2 1.1-1.5 2.5-1.2 1.5-.5 1.5-.2 1.8-1-.3-2 2.6-.9 2.7-.3 4 1.5 1.7 8.2 1.1 3.3.2 2.2v2.2l-.2 1.4.1 1.3-2.1 2.6-1 3.2-2.4 2.7-5.5 1.5-1.5 2.8.4 4 5.1 4.7 8.6 3.5z" /></svg>);

BatmanMapIcon.displayName = 'BatmanMapIcon';
