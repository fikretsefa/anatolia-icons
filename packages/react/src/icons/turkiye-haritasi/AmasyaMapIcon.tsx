/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * AmasyaMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const AmasyaMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="487.52 80.62 75.06 61.86" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m493.1 83.4 14.7 4.2 2.9-.5 1.6.9 6.9 5.3 1.6 2.8 1.6.4 3.6-.2 1.8.3 6.3.1 3.7 1.8 2-.5 1.7-1.4 2.2-1.5 1.4-2.5.9-2.9 1.9-1.2 1.7.6 1.3 1.5.6 1.4.8 1.4 5.1 3.7-1.4.7v.4h.4v.5l-.6.8.5 1.1 1 .9.7.6.8.3 1 2.5-1.7 2.5-.8 2v2.4l-2.1 3-3.8.8-.3 3.2-.4.2-.4.1-.7.7-3.9 2.6-2.9 1.4h-.9l-.8-.7-.9-.4-1.1-.3-1.3-.7-1.2-1-3.8-1.1-4 .3-1.2 1.5-2.1 4.7-1.4 2.5-1.3 1.9-1.4 1.6-1.6.7-.9.3-2.6 1-1.4 1.6-1.9 4-2.3-.8-2.5.2-2.1-.2-.9-.6-.4-1.3-.4-.2.5-4.2v-1.7l.5-1.4 4.1-6.3 1.1-4.5v-2.3l-1.2-2.9-.8-.3-1.6-.3-3.6-2.2-7.9-1.3-1.5-1-1.3-2.2-1.9-4.2-.5-1.7.7-4.1.2-6.3.6-1.9 1-1.2.7-1.6z" /></svg>);

AmasyaMapIcon.displayName = 'AmasyaMapIcon';
