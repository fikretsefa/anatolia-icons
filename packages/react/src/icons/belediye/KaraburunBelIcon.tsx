/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KaraburunBelIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KaraburunBelIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 180" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<g fill="none"><path fill="#000000" d="M0 0h165v97.5c0 45.563-36.937 82.5-82.5 82.5S0 143.063 0 97.5z" /><path fill="#00153A" d="M0 0h165v97.5c0 45.563-36.937 82.5-82.5 82.5S0 143.063 0 97.5z" /></g></svg>);

KaraburunBelIcon.displayName = 'KaraburunBelIcon';
