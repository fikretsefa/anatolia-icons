/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GumushaneMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GumushaneMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="668.95 99.85 53.4 60.7" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m685.6 103.3.9.7 1 .1 1-.9.8-1.1 2 1.2.7 3.7 3.2 3.3 11.1 4.5 2.8.3 1-.2.7-.8.6-2.6 1.4-1.1 3.3 2.2 2.3 3.9 1.6 9.2-.4 9.1-1.5 3.6-.6 2-.2 2 1 4.2 1.8 3.9-1.8 2.7-2.1 2.2-5.3 1.3-2.6 1.3-2.7.2-2.8-.2-2.8.3-2.9-.3-2.8-1.4-2.9-.9-.8-.8-.7-1.1-1.8-1.1-1.8-.7-5.2-3.1-1.4-.3-1.4-.3-1.4-.6-1.3-.8.4-2-1.3-1.7-.4-2.2.2-2.2-.2-2.1.1-2.1 1-1.3 4.8-2.6 1.4-1.2.3-2.3-1.1-.3-1.3-1.3-1.3-1.1-5.6-1.4-1.3-1.6-.1-2.2.3-2.8.1-.5.5-.7 1.4-1.5.9-1.7-.6-1.9.6-1.6 1.5-1 1.4-1.2 1.2-.3.9-.5.2-.9.3-.7z" /></svg>);

GumushaneMapIcon.displayName = 'GumushaneMapIcon';
