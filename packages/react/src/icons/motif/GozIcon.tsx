/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * GozIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const GozIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 93 93" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M670.99 607.8h18.76v18.38h18.56v18.53h18.52v18.3h-18.51v18.01h-18.46v18.69h-18.78v-18.65h-18.51v-18.05H634.2v-18.35c6.13-.32 12.25-.63 18.38-.94v-17.53h18.41zm15.51 28.61h-11.64v11.49h-11.75v11.96h11.67v11.46h11.83v-11.4h11.18v-11.97H686.5z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-634.075 -607.675)" /></svg>);

GozIcon.displayName = 'GozIcon';
