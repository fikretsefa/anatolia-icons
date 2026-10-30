/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * RizeMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const RizeMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="741.04 67.94 53.03 51.63" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m783.2 69.9.1.2 1.3 3.3.4 2.5.9 2.1.9.9.9.6.6 1.1.5 1.1 1.9.9 1.4 1.6-1.3 2.9-2.6 1.7-.7 1.3-.4 1.3-1 .9-1.1.6-4.5 5.3-.7 2.5-3.6 2.1-5.1 4.4-2 .7H767l-1.7.7-1.4 3.6-2.9.8-1.9.2-1.9.6-7.7 3.8-.7-3.9.6-4.3-3-7.6-.5-4.4-1.2-4.2-1.7-3.9 5.3-3.6 1.7.8 1.4.1 1.3-.4 1.5-.9 1.8-1.6.6-.1 1.5-.2.7-.3.6-.4 2.8-3.8 3.4-2.5.5-.2.7.2 2.1.7 1.2-.2 1.8-1.3.7-.3 1-.1 1.1-.4 1.1-.5.9-.7 1.8-2 1-.7 1.2-.3h1.3l.8-.3z" /></svg>);

RizeMapIcon.displayName = 'RizeMapIcon';
