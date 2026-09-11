/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * KayapinarBelIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const KayapinarBelIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 870" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="m759.9 362.8 41.9-242.7-251.6 203.8v218.2zM635.5 501.2h187.6L1067 380l-291.5 1.7zm379-356.1-168.3 45.3-20.7-69.7-36.7 217.5zm-210.3 212 262.8-1.5-81.4-33.6 51.3-163.8zm9.3 168.6H606.9l-25.6 21.9 164.2 165.3-5.6-79.8h164.4zM550.2 163.1l71.3-61-71.3-61v61zm117.9 506.4L563 563.3l-12.8 10.9v273.9h37.5l-12.2-119.9h150.7zM525.8 542.2V323.9L274.2 120.2l41.9 242.6zm-85.3-41-140-119.5L9 380.1l243.9 121.1zm-32.6 168.3-58.1 58.7h150.8L488.3 848h37.5V574.2l-12.7-10.9zM250.5 120.8l-20.7 69.7-168.3-45.3 225.7 193.1zm21.3 236.3L39.1 158.3l51.3 163.8L9 355.7zm222.9 190.5-25.6-21.9H262.5L171.7 633h164.4l-5.6 79.9zm31.1-445.5v-61l-71.3 61 71.3 61zm0 85.3L409 92.8V205l116.8 94.6zm24.5 112.3 116.8-94.6V92.8l-116.8 94.6z" style={{
    fill: "#7bc800"
  }} /></svg>);

KayapinarBelIcon.displayName = 'KayapinarBelIcon';
