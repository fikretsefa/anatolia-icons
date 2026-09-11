/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * BkmIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const BkmIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: 2
}} viewBox="0 0 115 37" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M155.23 73.92c0-2-1.07-2.68-2.55-2.64s-2.62 1-2.62 3.16v13.25h5.17zm-14 .8c0-1.67-.78-2.67-2.11-2.81s-2.11.73-2.11 2.4v13.38h4.22zm23-3.86v26.3H128V71.47a9 9 0 0 1-.006-.325c0-4.899 4.031-8.93 8.93-8.93q.148 0 .296.005c4.5 0 7.53 2.57 8.29 5.73.59-3.57 4.28-6.38 8.83-6.38 5.26 0 9.81 3.23 9.81 9.29M242 63.4h-12.9c-1.49 0-2 .48-2.46 2l-4.4 15.36h-.43l-4.69-15.36c-.43-1.5-1-2-2.46-2h-12.93v33.81h9.51V76.73h.49l6.67 20.48h6.65l6.67-20.48h.49v20.48H242zm-42.14 34.26-16.13-15.31-17.68 16.08V86.12l13.47-12.36h-13.47V63.4h33.81v10.38h-13v-.12l13 12.6z" style={{
    fill: "#eb008b",
    fillRule: "nonzero"
  }} transform="translate(-127.994 -61.57)" /></svg>);

BkmIcon.displayName = 'BkmIcon';
