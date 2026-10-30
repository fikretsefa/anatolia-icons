/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BayburtMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BayburtMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="715.42 111.42 50.76 40.96" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m718.4 116.5 1-.1.7-.8-.3-1.5.6-.6.3-.2 1.5.5 2.9 3.3 1.9 1.1 4.1.1 3.9 1.3h2.1l2.3-.8 2.4-.4h4.9l1.9-.6.9-.2 1.5 3.8 1.4 8.5 1.2 3.8 2.9 1.7 3.1.7 1.4.6 3.1.3.2 1.2-1.2 2.2-1.3 1.7-5.9 2.1-2.7 1.3-2 2-2.1 1.6-1.7.3-7.8-1-7.7-1.5-2.3.8-1.9 1.8-2.4.3-2.7-.3-2.5 1-1.8-3.9-1-4.2.2-2 .6-2 1.5-3.6.4-9.1z" /></svg>);

BayburtMapIcon.displayName = 'BayburtMapIcon';
