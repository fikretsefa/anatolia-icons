/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * UsakMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const UsakMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="194.2 217.9 53.89 44.89" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m205.4 229.4 2.6-2.3h2.8l2.9 1.9 3.2.4 3.4-.1 6-1.7 2.7-.2 1.2-2.8.8-3.5 1.2-.7 1.4-.4 3-.1 5.9 1.4 1.4.6 2.2 2.6v6.3l-.3 2.5-.7 2.3-2.9 2.8-.6 2.4-.9 2.5-1.1 1.4.1 1.7-5.9 1.3-.5 3.6.4 3.6-1.5 1.4-1.7.5-3.6.1-3.4-.4-2.4 1.9v.7l-.7 1.2-.5.1-1.2-.8-.6.3-.7.4-1.5.5-1.6-.1-1.5-1.7-1.7-.3-2.4 1.7H206l-2.5-1.6-2.9-.6-1.7-2h-1.5l-1.2-.9.5-.9 1.3-1.2.9-1.5.7-1.9.3-2.8-.4-3v-1.4l-.2-1.4-1.1-1.3-1.3-.5-.2-2.1 1.4-.5 1.4-1.6.5-1.2 3.7-2.9z" /></svg>);

UsakMapIcon.displayName = 'UsakMapIcon';
