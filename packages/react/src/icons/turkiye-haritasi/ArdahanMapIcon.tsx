/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * ArdahanMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const ArdahanMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="832 49.2 60.69 67.39" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m889.7 82.2-3.1 1.1-4.8 2.7-7.7 3.3-7.8 3.3-5.7 3-1.1 4.8-.7 7.5-.9 4.5-5.7.6-5.5 1.1-1.4-2.6-1.9-1.9-1.4-2.1-1-2.4-1.3-1.7-1.8-1.2-2.4-3.7-1-4.9 3-5.9 4.1-4.6 4-2 1.2-4.2-1.3-4.4-.9-2.3-.4-.7-.5-1.5-.3-2.7-.7-3.6h.5l1-.7 1.4-2.2 1.1-1 .5-1.1.4-2.6.5-1 .9-.8h.3l.9-.4 2.4-.2 6.7.6.9.4-.4.6-.1.7-.1.6-.2.6-.4.4-1 .8-.4.7 1.3.7.9 1 .9.3 1.1-1.4.7-.4.3.4.3.8.4.7.3.3 1.4.4.3.3.2.3.2.2.5.2.3.4 1.4 2.7.7.8 3.5 2.4 2.3 2 1.5.7 1.4.2v.3l-.6.9-.7.6-2.6 1.3 1.3.4 1.1-.1.9.1 1 1.1 1.1 2.8.7.5 4.4-1.2 1.3-.1 1.5.4 1.3.8 1.3 1.2.7 1.5z" /></svg>);

ArdahanMapIcon.displayName = 'ArdahanMapIcon';
