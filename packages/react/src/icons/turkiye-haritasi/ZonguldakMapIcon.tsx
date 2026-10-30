/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * ZonguldakMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const ZonguldakMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="313.47 49.17 49.36 40.36" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m352.7 51 2.7 2.7 2.9 1.3.9 3.3 1.8 4.4-1 5.4-2.5 3.5-1.7 2.1-.8 3.3-1.5 5.1v5.6l-10.2-.3-3-.8-3.5-.3-11.5-1.1-8.2-4-1.8-1.8 1.6-1.5.6-.9.4-.8.2-1 .1-1.4.1-.5.4-1.3.1-.8-.2-.3-.9-.6-.2-.5.5-.8 1.1-.4 2.2-.2.2-.2.8-1.2.2-.3.5-.1 7.2-2.8 10.1-6.8 5.8-2.8 1.7-1.4.4-.3z" /></svg>);

ZonguldakMapIcon.displayName = 'ZonguldakMapIcon';
