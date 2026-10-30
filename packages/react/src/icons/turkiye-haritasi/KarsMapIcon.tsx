/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KarsMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KarsMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="825.4 79.2 81 80" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m846.7 114.1 5.5-1.1 5.7-.6.9-4.5.7-7.5 1.1-4.8 5.7-3 7.8-3.3 7.7-3.3 4.8-2.7 3.1-1.1-.2 1.5.3 2 .8 1.8.9.8 2 .3 2.1 1.1 1.9 1.5 1.4 1.9.6 1.2.2 1.2.1 1.3.3 1.4.4 1.3 2 3.1.5 1.2.1 1 .3 4.4-.2.5-1 1.8-.2.3.3 1.5-2 2.3-.6 1.3v1.5l-.3-.2-.2-.1h-.2l-.3-.1.2.2.1.2.1.5-1.1.1-1.1.7-1.6 1.9.2.9 1 1.1 1.9 1.6v.6l-.7 2.4-.4.7-.3 1 .4 1 1.3 1.2 2.1 2.8.7 1.5.1.2-.9.6.5 1.1 1.5 1.9.3.7-.5.8-2.1.4-.7.6.6 1.8-6.2 2.3-5.9.8-2.5 1.2v2.4l-1.8 2.1-2.6-1.1-2.1.5-2.2-.6-5.2-.1-14.6 4.2-9.2-1.8-1.4-2.3-1.1-2.5-1.2-1.9-1.9-.8-1-.3-.8-.6-.6-1.3-.8-1.1-1.4-1-1.5-.5-4.1-.7-1.1-1.3-1-1.7-1.7-2 1.5-3.3 6.9-2.4 3-1.7 1.5-1.2 1.6-1.1 2-.9 1.9-1.2-1.1-6.2.7-2.2z" /></svg>);

KarsMapIcon.displayName = 'KarsMapIcon';
