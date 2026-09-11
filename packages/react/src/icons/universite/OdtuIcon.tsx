/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * OdtuIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const OdtuIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
  fillRule: "evenodd",
  clipRule: "evenodd"
}} viewBox="0 0 461 389" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M200 8C98.343 8.547 15 92.339 15 193.997c0 102.037 83.963 186 186 186s186-83.963 186-186C387 92.339 303.657 8.547 202 8zm36 368c-85.729-18.072-147.633-94.387-147.633-182S150.271 30.072 236 12" style={{
    fill: "#c00",
    fillRule: "nonzero",
    stroke: "#c00",
    strokeWidth: 4
  }} transform="translate(-6.754 .246)" /><path d="M272 8C170.343 8.547 87 92.339 87 193.997c0 102.037 83.963 186 186 186s186-83.963 186-186C459 92.339 375.657 8.547 274 8z" style={{
    fill: "none",
    fillRule: "nonzero",
    stroke: "#c00",
    strokeWidth: 4
  }} transform="translate(-6.754 .246)" /></svg>);

OdtuIcon.displayName = 'OdtuIcon';
