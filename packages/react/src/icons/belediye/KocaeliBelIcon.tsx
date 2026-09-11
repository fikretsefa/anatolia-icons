/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KocaeliBelIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KocaeliBelIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.88 148.66" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M.19 138.7 0 16.17c0-5.53 1.54-9.6 4.65-12.23A17.22 17.22 0 0 1 16.15 0q9.33 0 14.22 2.8c1.44.84 39.63 48.7 44.05 53.63C78.78 51.5 116.85 3.64 118.3 2.8Q123.16 0 132.5 0A17.26 17.26 0 0 1 144 3.94q4.68 3.95 4.68 12.23l.19 122.53c0 3.17-1.58 5.64-4.76 7.36a26.31 26.31 0 0 1-22.81 0q-4.78-2.58-4.78-7.36l-.1-74.84-31.59 34c-3.16 3.4-5.93 6-10.78 6-4.69 0-7.2-2.6-10.17-6L32.42 61.8l.11 76.9c0 3.17-1.58 5.64-4.75 7.36a23.5 23.5 0 0 1-11.4 2.6A23.54 23.54 0 0 1 5 146.06c-3.21-1.72-4.82-4.17-4.81-7.36" style={{
    fill: "#00406e"
  }} /><path d="m104.48 0-30.1 40.38L44.17 0zM44.2 147.63V134l.4-1.07 1-.35 1.24.29.95 1.22 2.7 4.86 2.66-4.86 1-1.22 1.24-.29 1 .35.41 1.07v13.6l-.41.65-1 .24-1-.24-.42-.65v-9.36l-2.53 4.53-1 .57-.93-.57L47 138.1v9.53l-.41.65-1 .24-1-.24Zm15.22 0v-14.12l.37-.66.87-.24h7.75l.67.37.22.86-.23.88-.66.37h-6.18v4.36h3.31l.65.34.25.79-.23.75-.66.33h-3.31V146h6.16l.66.38.24.88-.23.84-.66.38h-7.75l-.86-.24Zm10.48-13.79.22-.86.67-.37H80l.67.37.23.86-.23.88-.66.37H76.8v12.54l-.43.65-1 .24-1-.24-.42-.65v-12.54h-3.17l-.65-.35Zm12.54 13.79v-14.15l.26-.6.65-.27h4.31c3.44 0 5.15 1.52 5.16 4.55A4.83 4.83 0 0 1 92 140l-2 1.52 2.87 5.27.1.37-.56 1-1.2.47-1-.68-3.09-6h-1.86v5.68l-.4.65-1 .24-1-.24Zm2.83-7.91h2.39a2 2 0 0 0 2.33-2.3 2.08 2.08 0 0 0-2.34-2.33h-2.39Zm9.4 3.95v-6.07a4.71 4.71 0 0 1 1.33-3.78 6.29 6.29 0 0 1 7.42 0 4.72 4.72 0 0 1 1.41 3.78v6.07a4.72 4.72 0 0 1-1.39 3.79 6.41 6.41 0 0 1-7.44 0 4.78 4.78 0 0 1-1.38-3.79m2.83 0c0 1.67.76 2.5 2.27 2.5s2.29-.83 2.28-2.5v-6.07c0-1.67-.75-2.51-2.27-2.51s-2.27.84-2.27 2.51Z" style={{
    fill: "#e30512"
  }} /></svg>);

KocaeliBelIcon.displayName = 'KocaeliBelIcon';
