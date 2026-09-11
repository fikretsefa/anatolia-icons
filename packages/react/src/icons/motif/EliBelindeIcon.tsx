/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * EliBelindeIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const EliBelindeIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round"
}} viewBox="0 0 93 93" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M102.749 254.615 99.5 257.93c-4.28-3.51-10.6-8.38-12.68-13.43L132.5 199l11.558 11.376 23.115 22.748L178.73 244.5c-4.41 4.52-8.82 9.04-13.23 13.57-4.2-4.19-8.41-8.38-12.61-12.57 2.86-1.76 7.16-.86 10.7-1-3.69-3.81-7.39-7.63-11.09-11.44-3.82 4.15-7.64 8.29-11.46 12.44 6.03 6.33 12.05 12.67 18.08 19-8.88 8.84-17.75 17.69-26.62 26.53-8.79-8.84-17.58-17.69-26.38-26.53 6.25-6.67 12.5-13.33 18.74-20l-12.36-11.55c-3.58 3.51-7.17 7.03-10.75 10.55 3.13 1.83 7.07.73 10.75 1.17l-3.249 3.315zm29.751-2.295c-4.17 3.63-9.63 8.18-11.91 13.18l11.91 11.73c4.24-4.25 8.48-8.49 12.72-12.73zm0-39.61c-4.09 4.26-8.18 8.53-12.27 12.79 4.09 4.08 8.18 8.15 12.27 12.23l12.66-13.23z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-86.695 -198.875)" /></svg>);

EliBelindeIcon.displayName = 'EliBelindeIcon';
