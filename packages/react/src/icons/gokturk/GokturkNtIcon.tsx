/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GokturkNtIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GokturkNtIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m298.396 366.934-13.781 19.969s16.094 13.275 16.094 40.5c0 31.301-21.4 48.968-42.438 48.968-20.45 0-41.718-19.09-41.718-49.687 0-24.46 14.843-36.75 14.843-36.75l-16.437-19.625s-22.438 21.153-22.438 56.906c0 37.467 27.393 76.188 65.75 76.188 42.432 0 66.282-41 66.282-76 0-42.007-26.157-60.47-26.157-60.47zm-19.5 45.25c-5.175 0-9.375 4.2-9.375 9.375s4.2 9.375 9.375 9.375 9.375-4.2 9.375-9.375-4.2-9.375-9.375-9.375zm-40.125.375c-5.175 0-9.375 4.2-9.375 9.375s4.2 9.375 9.375 9.375 9.375-4.2 9.375-9.375-4.2-9.375-9.375-9.375zm19.875 30.375c-5.175 0-9.375 4.2-9.375 9.375s4.2 9.375 9.375 9.375 9.375-4.2 9.375-9.375-4.2-9.375-9.375-9.375z" style={{
    fill: "#000",
    stroke: "#000"
  }} transform="translate(-183.537 -335.168)" /></svg>);

GokturkNtIcon.displayName = 'GokturkNtIcon';
