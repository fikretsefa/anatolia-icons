/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KocBoynuzuIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KocBoynuzuIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 93 73" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M297.5 218.36c6.67 6.29 13.33 12.58 20 18.88 6.33-6.31 12.67-12.61 19-18.92 8.82 8.73 17.64 17.45 26.46 26.18-2.14 5.13-8.16 10-12.46 13.56-4.33-4.42-8.67-8.84-13-13.26 3.61-.67 7.72.53 10.73-1.3-3.57-3.53-7.15-7.05-10.73-10.58-4.21 4.2-8.43 8.39-12.64 12.58 6.36 6.33 12.71 12.67 19.07 19l-26.43 26.52c-8.91-8.84-17.81-17.68-26.72-26.52l18.04-19c-1.87-4.96-7.33-9.32-11.32-12.8-3.67 3.88-7.33 7.76-11 11.64 3.78.37 7.61-.62 10.89 1.16-4.3 4.13-8.59 8.26-12.89 12.39-4.49-4.13-8.98-8.26-13.48-12.39z" style={{
    fill: "#ef792b",
    stroke: "#ef792b",
    strokeWidth: ".25px"
  }} transform="translate(-270.895 -218.195)" /></svg>);

KocBoynuzuIcon.displayName = 'KocBoynuzuIcon';
