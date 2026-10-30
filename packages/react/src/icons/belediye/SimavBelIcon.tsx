/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * SimavBelIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const SimavBelIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 76" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="simav-bel__a"><path d="M0 0h300v76H0z" /></clipPath></defs><g clipPath="url(#simav-bel__a)"><path fill="rgba(0,0,0,0)" d="M0 0h300v76H0z" /></g></svg>);

SimavBelIcon.displayName = 'SimavBelIcon';
