/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * CankiriMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const CankiriMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="367.38 79.28 84.24 58.74" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m397.1 83.1 1.1 1.4.7.6 6.1.6 4.3 2.9 1.8 2.1 2.2.7 1.8-.6 5-3 3.7-.7 7.7-4.1 1.6-.6.7.4.5 2.5-1.5 2-1.2 1.4-.5 1.9 1.7 3 2.8 1 1.5 1.4 1.6 1.2 2 .4 1.9.1 2.4 3.9-.6 2.5-1 2.5.3 2.6 1.2 2.4.3 2.2-.1 2.2.6 2.3 1.2 2 .7 1.5.5 1.7.4 1.6-.1 1.6-.7.4-1.1 2.6-1.4 2.4-.8.4-1 .2-3.8 2.2-4.4-.4-13.1-4.2-6.4-2.1-1.4-.9-1.5-.6h-1l-.8.3-.6 1.8-.2 1.6-3.5.4-3.1-2.5-.5-2.1-1-1.6-1.5-.9-2.1-1.8-.8-.4-1.8-1.3-1.5-1.8-1.1-2.2-1.4-1.8-13.9-6.5-3.8-.6-3.7.1.7-3.4.1-1 .1-.8 4.9-2.3 5.6-4.5 2.3-4.2 1.7-1 4.6.5 4.6-2.5z" /></svg>);

CankiriMapIcon.displayName = 'CankiriMapIcon';
