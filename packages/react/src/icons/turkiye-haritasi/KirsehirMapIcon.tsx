/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KirsehirMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KirsehirMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="416.41 159.81 62.38 64.48" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m438 212.8.4-2-3-1.1-.6-.7-1.6-.6-2.5-.2-1-.7-.7-1.2-.7-.6-.8-.3-2.4-2-5.4-3.4-.9-3.4 5.3-9.3 7.7-6.3 3.3-5.2 2.1-6.3 7.6-7.3 1 1 .9.8 2.6.1 2.5 2.3 2.4 2.7 2.2.7 3.7.1.9 1.3.4 1.4.6 1.3 6.6 8 2.1 1.4 2.4.4 2 1.8 1.3 2.9-2.8.5-3-.8-1 .6-.2 1.4.4 2.2 1 1.9.6 3.1-.6 4 1.4 2.5 1 2.3-1.9 2.6-3 1.3-2.6 1.6-5.7 2.4-1 3.3.5 2.7.2 1.4-1.9.5-5.3-4.5-1 .2-2-.3-1 .3-2.4 1.4-1.9-1.6-.7-2.5-1.8-.8-1.1.1-1.9-.4z" /></svg>);

KirsehirMapIcon.displayName = 'KirsehirMapIcon';
