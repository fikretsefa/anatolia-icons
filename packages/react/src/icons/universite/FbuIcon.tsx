/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * FbuIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const FbuIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 170" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M0 0h119.95v50.77H87.27v-18H50.88v35.8h34.24v33.26H51.08v35.02H67.9V170H0v-33.34h18.01V32.96H0zm248.18 28.38L219.79 0h-91.56v33.29h18v104.35h-18v32.2h92.44l27.51-27.51V96.16L231.53 85l16.65-10.49Zm-36.47 109.26h-35.48v-35.48h35.48Zm0-68.87h-35.48V33.29h35.48ZM257.88 0h33.39v27.86h-33.39zm68.73 0H360v27.86h-33.39zm-68.73 38.77h33.39v98.87h35.34V38.77H360v103.82l-27.2 27.2h-47.53l-27.03-27.03z" style={{
    fill: "#01427f"
  }} /></svg>);

FbuIcon.displayName = 'FbuIcon';
