/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * HatayMapIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const HatayMapIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" fill="#6f9c76" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} baseProfile="tiny" viewBox="523.37 329.47 47.56 76.46" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m557.8 335.8 3.1 3.1 3.8 1.7.8.8.4 1.2.6.5.8.1.3.5-.5-.1-.4.1.2 1.4-.6 1.2-.7 1-.6 1.2-.2 1.3-.1 1.1-.1 1.2-.6 1.4-.6 2.5v2.6l-.2 2.6-1.4 2.2-.3.9.2 1 .9 3.2.2.5.4.3.7.3.2.2.3.4.1.4.1.4-.1.5-.3.9-.2.5-.2.1.4.4 1.6.2.8.3.5.6v.1l.5.8.3 1 .2.9v1.3l-.2.5-3.4.6h-.9l-3.6-.6-.9.2-.5.2-.2.3v.5l-.3.3-.4.2h-.2l-.3-.1-1.3-.2-.7-.2-.6-.4-.6-.7-.5.5.7.8-.1.5-.4.4-.3.5v.8l-.2 8.5.1 1.7-1 .3-1.9-.7-.9.4-.4 2.1-.8.1-1.1-.3-1.5.6-1.1 1.7-.3 4.1-.5 1.7-.1.1-.8.1-2.8-2-1.4-.7h-1.5l-.7-.2-.5-.5-.1-.7.1-.7v-.8l-.6-.7-.9.2-1 .3-.9.2-.5-.1v-.1l.6-.8 2-3.6.5-.4v-1.1l-1.3-4-3.4-5.6-.6-.8-.6-1-.5-1.8-.7-.8-.8-.7-.5-.7-.6-1.4.1-.9 1.3-1.9.4-.5.5-.3.5-.2h.5l.3-.2.5-1.5.4-.4.8-.4.5-.4.2-.5.3-1.3.5-.3.3-.3.3-.3 1.9-.7.4-.2 2.2-2.8.4-.6.5-.1 5.1-3.2.7-.2.5-.5.6-1 .5-1.2.2-.9v-.8l-.2-.6-.3-.5-.2-.6v-4.1l-.1-1-.5-1-2.8-4-1.6-1.6-1.8-1.3-1.8-.5-1.7.7-1.6 1.4-.9 1.1-.7-1.2v-2.5l3.9-4.5.9-.5 1 .2 1 .4 2.1-.4 2 .6h1.9l2.3-.6 2.1.7 1.6 1.7 1.8 1.1 2.4.1z" /></svg>);

HatayMapIcon.displayName = 'HatayMapIcon';
