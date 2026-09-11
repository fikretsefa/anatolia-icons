/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * IucIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const IucIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.969 144.969" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="iuc__a" clipPathUnits="userSpaceOnUse"><path d="M-215.477 297.638h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__b" clipPathUnits="userSpaceOnUse"><path d="M-223.105 297.638h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__c" clipPathUnits="userSpaceOnUse"><path d="M-285.608 297.638h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__d" clipPathUnits="userSpaceOnUse"><path d="M-522.41 441.17h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__e" clipPathUnits="userSpaceOnUse"><path d="M-318.756 441.17h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__f" clipPathUnits="userSpaceOnUse"><path d="M-292.033 416.227h841.89V-179.05h-841.89Z" /></clipPath><clipPath id="iuc__g" clipPathUnits="userSpaceOnUse"><path d="M-301.647 375.757h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__h" clipPathUnits="userSpaceOnUse"><path d="M-275.847 348.674h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__i" clipPathUnits="userSpaceOnUse"><path d="M-282.566 332.938h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__j" clipPathUnits="userSpaceOnUse"><path d="M-236.307 307.469h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__k" clipPathUnits="userSpaceOnUse"><path d="M-258.148 266.422h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__l" clipPathUnits="userSpaceOnUse"><path d="M-250.43 254.29h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__m" clipPathUnits="userSpaceOnUse"><path d="M-274.961 214.272h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__n" clipPathUnits="userSpaceOnUse"><path d="M-283.993 186.397h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__o" clipPathUnits="userSpaceOnUse"><path d="M-330.114 168.455h841.89V-426.82h-841.89Z" /></clipPath><clipPath id="iuc__p" clipPathUnits="userSpaceOnUse"><path d="M-368.353 129.14h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__q" clipPathUnits="userSpaceOnUse"><path d="M-388.754 123.701h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__r" clipPathUnits="userSpaceOnUse"><path d="M-457.926 124.258h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__s" clipPathUnits="userSpaceOnUse"><path d="M-480.577 130.533h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__t" clipPathUnits="userSpaceOnUse"><path d="M-520.837 139.815h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__u" clipPathUnits="userSpaceOnUse"><path d="M-544.578 170.895h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__v" clipPathUnits="userSpaceOnUse"><path d="M-558.01 185.283h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__w" clipPathUnits="userSpaceOnUse"><path d="M-577.04 226.755h841.89V-368.52h-841.89Z" /></clipPath><clipPath id="iuc__x" clipPathUnits="userSpaceOnUse"><path d="M-587.328 282.142h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__y" clipPathUnits="userSpaceOnUse"><path d="M-607.179 292.438h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__z" clipPathUnits="userSpaceOnUse"><path d="M-597.592 308.36h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__A" clipPathUnits="userSpaceOnUse"><path d="M-590.913 345.593h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__B" clipPathUnits="userSpaceOnUse"><path d="M-555.252 396.185h841.89V-199.09h-841.89Z" /></clipPath><clipPath id="iuc__C" clipPathUnits="userSpaceOnUse"><path d="M-561.96 418.113h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__D" clipPathUnits="userSpaceOnUse"><path d="M-388.379 441.046h841.89V-154.23h-841.89Z" /></clipPath><clipPath id="iuc__E" clipPathUnits="userSpaceOnUse"><path d="M-407.495 450.918h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__F" clipPathUnits="userSpaceOnUse"><path d="M-424.45 468.648h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__G" clipPathUnits="userSpaceOnUse"><path d="M-454.233 464.23h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__H" clipPathUnits="userSpaceOnUse"><path d="M-403.004 235.923h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__I" clipPathUnits="userSpaceOnUse"><path d="M-403.004 251.17h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__J" clipPathUnits="userSpaceOnUse"><path d="M-425.417 244.172h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__K" clipPathUnits="userSpaceOnUse"><path d="M-403.004 266.414h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__L" clipPathUnits="userSpaceOnUse"><path d="M-403.004 281.66h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__M" clipPathUnits="userSpaceOnUse"><path d="M-403.004 296.904h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__N" clipPathUnits="userSpaceOnUse"><path d="M-403.004 312.15h841.89v-595.275h-841.89Z" /></clipPath><clipPath id="iuc__O" clipPathUnits="userSpaceOnUse"><path d="M-403.004 327.395h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__P" clipPathUnits="userSpaceOnUse"><path d="M-403.004 342.64h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__Q" clipPathUnits="userSpaceOnUse"><path d="M-403.004 219.983h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__R" clipPathUnits="userSpaceOnUse"><path d="M-421.341 197.317h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__S" clipPathUnits="userSpaceOnUse"><path d="M-412.603 180.685h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__T" clipPathUnits="userSpaceOnUse"><path d="M-353.846 207.387h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__U" clipPathUnits="userSpaceOnUse"><path d="M-364.164 327.715h841.89V-267.56h-841.89Z" /></clipPath><clipPath id="iuc__V" clipPathUnits="userSpaceOnUse"><path d="M-338.49 272.893H503.4v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__W" clipPathUnits="userSpaceOnUse"><path d="M-338.783 318.584h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__X" clipPathUnits="userSpaceOnUse"><path d="M-467.567 207.387h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__Y" clipPathUnits="userSpaceOnUse"><path d="M-502.84 224.917h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__Z" clipPathUnits="userSpaceOnUse"><path d="M-477.947 342.245h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__aa" clipPathUnits="userSpaceOnUse"><path d="M-484.347 274.453h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ab" clipPathUnits="userSpaceOnUse"><path d="M-493.502 259.71h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ac" clipPathUnits="userSpaceOnUse"><path d="M-415.705 368.535h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ad" clipPathUnits="userSpaceOnUse"><path d="M-336.26 224.19h841.89v-595.275h-841.89Z" /></clipPath><clipPath id="iuc__ae" clipPathUnits="userSpaceOnUse"><path d="M-425.417 228.926h841.89V-366.35h-841.89Z" /></clipPath><clipPath id="iuc__af" clipPathUnits="userSpaceOnUse"><path d="M-425.417 259.417h841.89V-335.86h-841.89Z" /></clipPath><clipPath id="iuc__ag" clipPathUnits="userSpaceOnUse"><path d="M-425.417 274.662h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ah" clipPathUnits="userSpaceOnUse"><path d="M-425.417 289.908h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ai" clipPathUnits="userSpaceOnUse"><path d="M-425.417 305.154h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__aj" clipPathUnits="userSpaceOnUse"><path d="M-425.417 320.399h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ak" clipPathUnits="userSpaceOnUse"><path d="M-425.417 335.644h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__al" clipPathUnits="userSpaceOnUse"><path d="M-353.144 383.655h841.89V-211.62h-841.89Z" /></clipPath><clipPath id="iuc__am" clipPathUnits="userSpaceOnUse"><path d="M-375.839 397.742h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__an" clipPathUnits="userSpaceOnUse"><path d="M-381.988 400.1h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__ao" clipPathUnits="userSpaceOnUse"><path d="M-397.42 404.959h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ap" clipPathUnits="userSpaceOnUse"><path d="M-413.952 415.426h841.89V-179.85h-841.89Z" /></clipPath><clipPath id="iuc__aq" clipPathUnits="userSpaceOnUse"><path d="M-427.55 422.372h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__ar" clipPathUnits="userSpaceOnUse"><path d="M-450.428 404.79h841.89v-595.277h-841.89Z" /></clipPath><clipPath id="iuc__as" clipPathUnits="userSpaceOnUse"><path d="M-462.179 408.11h841.89v-595.276h-841.89Z" /></clipPath><clipPath id="iuc__at" clipPathUnits="userSpaceOnUse"><path d="M-476.662 402.21h841.89v-595.275h-841.89Z" /></clipPath><clipPath id="iuc__au" clipPathUnits="userSpaceOnUse"><path d="M-490.782 390.903h841.89v-595.276h-841.89Z" /></clipPath></defs><path d="M0 0c0 113.477 91.991 205.468 205.468 205.468S410.936 113.477 410.936 0s-91.991-205.468-205.468-205.468S0-113.477 0 0" clipPath="url(#iuc__a)" style={{
    fill: "#14263d",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 0 72.485)" /><path d="M0 0c0 109.268 88.575 197.842 197.84 197.842 109.266 0 197.84-88.574 197.84-197.842 0-109.265-88.573-197.843-197.84-197.843C88.575-197.843 0-109.266 0 0m197.84 192.092c106.09 0 192.089-86.001 192.089-192.092S303.93-192.092 197.84-192.092 5.75-106.093 5.75 0c0 106.091 86 192.092 192.09 192.092" clipPath="url(#iuc__b)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 2.691 72.484)" /><path d="M0 0c0 74.747 60.59 135.339 135.337 135.339S270.674 74.747 270.674 0c0-74.746-60.591-135.34-135.337-135.34S0-74.746 0 0m135.337 130.114c71.861 0 130.112-58.253 130.112-130.114s-58.251-130.113-130.112-130.113S5.224-71.861 5.224 0s58.252 130.114 130.113 130.114" clipPath="url(#iuc__c)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 24.74 72.484)" /><path d="m0 0-11.463.675-3.664-10.879-3.418 11.298-11.463.674 9.349 6.309-3.415 11.298 9.197-7.398 9.349 6.304-3.668-10.882z" clipPath="url(#iuc__d)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 108.279 123.12)" /><path d="m0 0 11.463.675 3.667-10.879 3.418 11.298 11.462.675-9.35 6.308 3.417 11.298-9.196-7.398-9.351 6.304L9.197 7.399Z" clipPath="url(#iuc__e)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 36.435 123.12)" /><path d="m0 0 4.301 3.48-6.157 7.606 20.784 16.83-4.179 5.161L-6.036 16.25l-5.935 7.33-4.301-3.488z" clipPath="url(#iuc__f)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 27.007 114.32)" /><path d="m0 0-3.519 5.63-5.482-3.424 3.52-5.633z" clipPath="url(#iuc__g)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 30.399 100.043)" /><path d="M0 0c1.381.368 4.468 1.471 7.384-2.318.594-.764 1.083-1.617 1.374-2.453a6.6 6.6 0 0 0 .485-2.622c-.084-1.8-.85-3.686-2.628-5.551-1.516-1.569-3.732-2.7-5.9-3.483-2.185-.739-4.32-1.126-5.554-1.145-2.944-.045-5.834 1.318-7.168 4.029-2.872 5.811.792 8.915 2.409 9.761l-2.373 5.868c-1.501-.653-5.277-2.419-6.452-7.906-.915-3.76.05-6.857.913-8.994 3.133-7.758 8.97-9.555 15.233-8.981 1.882.187 4.018.812 6.03 1.623 1.971.796 3.759 1.807 5.022 2.698 5.676 4.156 8.071 10.518 5.178 17.087-1.615 3.645-4.371 6.448-6.479 7.65C4.794 6.807.65 7.139-2.405 5.95Z" clipPath="url(#iuc__h)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 21.297 90.489)" /><path d="m0 0-1.607 6.445-6.272-1.565 1.606-6.442Z" clipPath="url(#iuc__i)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 23.667 84.938)" /><path d="m0 0 5.398.188-.169 4.868-5.4-.19zm9.491 6.089.231-6.637L41.981.579l-.232 6.639z" clipPath="url(#iuc__j)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 7.348 75.952)" /><path d="M0 0c-1.022.393-4.065.32-6.423-1.085-4.339-2.635-5.203-8.595-5.415-10.31-.96-7.822 2.365-11.978 7.399-13.131 5.121-1.164 7.978 1.385 9.59 4.711 1.914 3.958 2.69 10.287 5.147 12.126 1.776 1.388 4.243.773 5.39-.796.687-.932 1.093-3.078.868-5.281-.182-2.208-.957-4.521-2.63-5.788a4.82 4.82 0 0 0-3.463-.958l-.788-6.417c3.06-.152 6.397.866 8.813 3.468 2.005 2.163 3.051 5.96 3.208 7.593.392 3.565.412 7.353-1.012 10.295-2.103 4.318-9.494 6.964-13.815 3.748C4.556-3.594 3.3-7.276 2.776-8.995c-.371-1.204-2.081-7.151-2.965-7.801-.749-1.38-1.281-2.072-3.456-1.628-2.61.544-3.417 3.053-2.979 6.255.643 4.516 3.281 6.379 5.862 5.972z" clipPath="url(#iuc__k)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 15.053 61.472)" /><path d="m0 0 5.263-1.711 3.025 9.307L33.722-.668l2.053 6.316-25.435 8.264 2.914 8.97-5.264 1.71z" clipPath="url(#iuc__l)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 12.33 57.192)" /><path d="m0 0 13.042-2.318-4.014-7.243Zm-4.93 7.086L-8.644.387l22.778-25.485 3.285 5.925-4.559 5.11 5.795 10.455 6.727-1.198 3.285 5.925z" clipPath="url(#iuc__m)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 20.985 43.075)" /><path d="m0 0 23.608-22.013 4.529 4.857-16.45 15.34 25.359-5.787 4.47 4.793-23.609 22.013-4.529-4.857L29.602-.783 4.469 4.793Z" clipPath="url(#iuc__n)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 24.171 33.241)" /><path d="m0 0 6.684 4.341c.593.385 3.453 3.299 6.121-.566 2.62-3.789-.51-5.717-1.736-6.512L4.533-6.981Zm-7.018 10.806 6.61 4.293c1.93 1.254 3.825 1.427 5.456-.84 1.315-1.784.775-3.878-1.75-5.518l-6.313-4.099ZM1.978-15.24l12.216 7.933c1.708 1.11 4.548 3.323 5.367 6.126 1.065 3.646.13 6.629-1.662 8.74-1.854 2.122-4.504 3.357-6.897 3.545.907 2.913.006 5.601-1.055 7.235-.446.607-2.219 2.36-2.854 2.687-1.269.653-2.411.704-2.815.758-2.746.487-6.451-1.285-7.812-2.116l-12.069-7.837z" clipPath="url(#iuc__o)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 40.441 26.912)" /><path d="m0 0 7.28-21.142c.664-1.925.808-5.2-4.174-6.916-5.108-1.759-6.717 1.012-7.465 2.909l-7.279 21.142-6.28-2.162 7.251-21.058c1.038-3.015 3.534-6.182 9.566-7.244 1.89-.051 4.113.292 6.249 1.028 2.134.735 4.209 1.918 5.805 3.404 4.215 4.214 3.501 8.464 2.578 11.143L6.28 2.163Z" clipPath="url(#iuc__p)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 53.931 13.042)" /><path d="m0 0 4.492-31.963 21.879 3.075-.769 5.48-15.303-2.15L6.577.925z" clipPath="url(#iuc__q)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 61.128 11.123)" /><path d="m0 0-3.5-22.085c-.317-2.013-1.727-4.972-6.933-4.148-5.335.846-5.452 4.047-5.225 6.073l3.5 22.086-6.562 1.039-3.481-21.999c-.501-3.148.216-7.117 5.044-10.885 1.646-.934 3.769-1.672 6.001-2.027 2.228-.352 4.616-.282 6.721.281 5.703 1.741 7.066 5.829 7.51 8.627L6.559-1.039Zm-2.987 10.021-.846-5.336L.98 3.924l.843 5.335Zm-8.98-4.047 4.812-.761.843 5.335-4.809.761z" clipPath="url(#iuc__r)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 85.53 11.32)" /><path d="m0 0-13.128-29.489 6.065-2.701 9.149 20.548 2.783-25.861 5.989-2.665L23.985-10.68l-6.068 2.701-9.021-20.266L5.985-2.666z" clipPath="url(#iuc__s)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 93.521 13.533)" /><path d="m0 0-2.942-4.53 4.086-2.653 2.942 4.531zm-.454-11.267L-6.023-7.65l-17.579-27.071 5.57-3.617z" clipPath="url(#iuc__t)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 107.724 16.808)" /><path d="m0 0-21.56-13.357L-10.563 9.51l-4.967 4.474-13.473-31.306 4.248-3.821L4.967-4.473z" clipPath="url(#iuc__u)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 116.1 27.772)" /><path d="m0 0-26.113-18.973 14.183-19.523 4.479 3.253-10.283 14.15 6.737 4.893 9.082-12.502 4.476 3.253-9.079 12.503 5.944 4.319 9.837-13.54 4.479 3.253z" clipPath="url(#iuc__v)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 120.838 32.848)" /><path d="m0 0 3.367-8.334c1.112-2.75.275-4.234-1.858-5.097-2.805-1.562-5.371.41-5.95 1.846L-7.84-3.168zm-27.285-3.86 2.488-6.159 11.822 4.778 2.922-7.227c.863-2.135.473-4.011-1.505-4.905-2.21-.797-4.59-1.759-6.036-2.438-.951-.48-1.757-1.091-2.46-1.949l2.672-6.611 1.107.449c.146.823.316 1.465 2 2.145 1.502.655 5.408 2.329 6.575 2.99 2.577 1.424 2.52 3.693 2.802 5.002 2.003-1.532 3.478-2.464 6.366-2.158 2.884.306 4.767 1.785 5.918 2.726 2.895 2.173 3.063 5.775 1.975 8.821L2.643 8.231Z" clipPath="url(#iuc__w)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 127.552 47.479)" /><path d="M0 0c1.091-.097 3.995.812 5.875 2.812C9.32 6.541 8.508 12.51 8.236 14.216 7.006 22 2.663 25.077-2.492 24.8c-5.246-.293-7.288-3.531-7.922-7.172-.748-4.333.25-10.631-1.604-13.077-1.325-1.823-3.867-1.912-5.399-.72-.919.706-1.902 2.658-2.292 4.837-.434 2.173-.326 4.612.932 6.29a4.83 4.83 0 0 0 3.066 1.875l-1.011 6.385c-2.984-.696-5.91-2.596-7.517-5.762-1.332-2.633-1.29-6.571-.989-8.183.603-3.534 1.63-7.183 3.808-9.618 3.211-3.57 11.047-4.077 14.313.205 1.736 2.338 1.927 6.224 1.959 8.022.025 1.258.032 7.445.7 8.314.34 1.533.66 2.347 2.872 2.517 2.66.198 4.128-1.99 4.588-5.191.627-4.518-1.395-7.035-3.988-7.355Z" clipPath="url(#iuc__x)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 131.18 67.018)" /><path d="m0 0-5.402-.093.086-4.872 5.399.095zm-9.596-5.926L-9.714.716-41.985.153l.114-6.64z" clipPath="url(#iuc__y)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 138.184 70.65)" /><path d="m0 0-5.481.768-1.36-9.689-26.483 3.723-.926-6.578 26.483-3.723-1.312-9.339 5.481-.77z" clipPath="url(#iuc__z)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 134.802 76.267)" /><path d="m0 0-30.518 10.51-7.856-22.819 5.234-1.801 5.693 16.535 7.871-2.71-5.033-14.611 5.234-1.801 5.03 14.611 6.952-2.393-5.449-15.826 5.234-1.8z" clipPath="url(#iuc__A)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 132.445 89.402)" /><path d="M0 0c.76-.787 3.547-2.007 6.28-1.731 5.044.555 8.347 5.593 9.263 7.057 4.176 6.682 2.92 11.856-1.157 15.026-4.146 3.221-7.815 2.118-10.68-.215-3.408-2.777-6.788-8.186-9.79-8.816-2.196-.508-4.175 1.094-4.549 2.998-.228 1.138.311 3.253 1.446 5.155 1.097 1.925 2.777 3.693 4.828 4.134a4.83 4.83 0 0 0 3.545-.596l3.426 5.484c-2.71 1.43-6.162 1.919-9.453.581-2.733-1.113-5.285-4.112-6.115-5.526-1.864-3.066-3.484-6.489-3.433-9.757.079-4.804 5.658-10.326 10.933-9.235 2.844.621 5.539 3.43 6.74 4.768.846.935 4.911 5.598 5.982 5.813 1.265.936 2.039 1.342 3.823.017 2.137-1.595 1.807-4.211.057-6.927-2.491-3.821-5.668-4.394-7.839-2.936Z" clipPath="url(#iuc__B)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 119.865 107.25)" /><path d="m0 0-4.014 3.613-3.259-3.616 4.017-3.617zm-11.057 2.21 4.444 4.938-23.986 21.598-4.443-4.935z" clipPath="url(#iuc__C)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 122.232 114.985)" /><path d="m0 0-3.977 1.065C-4.55-.386-6.114-1.433-7.595-2c-1.783-.665-4.926-.421-7.108.165l-1.065-3.978 7.271-1.95-5.615-20.954 5.987-1.605z" clipPath="url(#iuc__D)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 60.996 123.076)" /><path d="m0 0-1.139-13.01-8.115.71zm-.463 6.397-13.188-18.136-.458-5.25 12.527-1.094-.602-6.882 6.175-.539.601 6.879 3.264-.285.444 5.073-3.263.285 1.69 19.321z" clipPath="url(#iuc__E)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 67.74 126.558)" /><path d="M0 0c.035-1.42.311-4.064 3.855-6.464 1.465-.983 3.544-2.4 7.751-1.721 4.821.776 7.177 2.805 8.616 5.642 2.656 5.212 1.183 14.459-6.087 16.27a9.4 9.4 0 0 1-3.36.282 9 9 0 0 1-2.524-.621c-1.461-.571-2.367-1.36-2.744-1.662l.497 6.534 12.88 1.125-.488 5.558-16.672-1.458L.425 5.814l5.601.492c.498 1.419 1.839 2.339 3.329 2.602s3.167-.124 4.397-1.483c1.87-2.058 2.844-9.619-2.692-10.414C7.059-3.471 6.337-1.313 6.087.532z" clipPath="url(#iuc__F)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 73.72 132.813)" /><path d="M0 0c.669-2.159 1.629-4.378 3.931-5.963 3.588-2.431 6.67-1.788 8.895-1.192C21.25-4.897 21.747 1.287 21.1 4.552c-.9 4.388-2.817 6.074-6.562 7.228 1.246 1.846 2.404 3.348 1.868 6.366-.251 1.446-.853 4.723-4.861 6.673-1.483.752-3.835.808-6.096.34-2.257-.47-4.511-1.3-5.851-2.622-4.448-4.448-2.942-8.353-2.315-10.522l5.516 1.478c-.453 2.031-1.391 5.541 2.65 6.53 3.446.833 5.091-1.201 5.279-4.131.431-2.634-2.064-4.267-4.971-5.046l1.088-4.062c5.595 2.552 10.147-2.459 7.243-7.367-.343-.596-.763-1.075-1.445-1.439-.654-.311-1.573-.466-2.841-.349-2.485.203-3.021 1.344-4.029 3.915Z" clipPath="url(#iuc__G)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 84.228 131.254)" /><path d="M0 0c0 2.881 4.943 5.339 11.889 6.296V.123h13.115v6.143C31.836 5.288 36.675 2.851 36.675 0c0-3.714-8.209-6.724-18.337-6.724S0-3.714 0 0" clipPath="url(#iuc__H)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 50.713)" /><path d="M0 0c0 2.882 4.943 5.34 11.889 6.297V.124h13.115v6.143C31.836 5.289 36.675 2.851 36.675 0c0-3.713-8.209-6.724-18.337-6.724S0-3.713 0 0" clipPath="url(#iuc__I)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 56.091)" /><path d="M0 0v-4.641h-8.15V0A49 49 0 0 1 0 0" clipPath="url(#iuc__J)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 53.623)" /><path d="M0 0c0 2.882 4.943 5.339 11.889 6.297V.124h13.115v6.143C31.836 5.289 36.675 2.851 36.675 0c0-3.714-8.209-6.725-18.337-6.725S0-3.714 0 0" clipPath="url(#iuc__K)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 61.47)" /><path d="M0 0c0 2.882 4.943 5.339 11.889 6.296V.123h13.115v6.143C31.836 5.288 36.675 2.851 36.675 0c0-3.713-8.209-6.724-18.337-6.724S0-3.713 0 0" clipPath="url(#iuc__L)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 66.847)" /><path d="M0 0c0 2.88 4.943 5.338 11.889 6.296V.123h13.115v6.143C31.836 5.286 36.675 2.849 36.675 0c0-3.716-8.209-6.726-18.337-6.726S0-3.716 0 0" clipPath="url(#iuc__M)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 72.225)" /><path d="M0 0c0 2.882 4.943 5.339 11.889 6.297V.124h13.115v6.143C31.836 5.288 36.675 2.85 36.675 0c0-3.713-8.209-6.722-18.337-6.722S0-3.713 0 0" clipPath="url(#iuc__N)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 77.604)" /><path d="M0 0c0 2.881 4.943 5.338 11.889 6.297V.123h13.115v6.143C31.836 5.286 36.675 2.852 36.675 0c0-3.714-8.209-6.724-18.337-6.724S0-3.714 0 0" clipPath="url(#iuc__O)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 82.982)" /><path d="M0 0c0 2.881 4.943 5.338 11.889 6.295V.124h13.115v6.142C31.836 5.286 36.675 2.853 36.675 0c0-3.713-8.209-6.726-18.337-6.726S0-3.713 0 0" clipPath="url(#iuc__P)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 88.36)" /><path d="M0 0c0 2.881 4.943 5.34 11.889 6.297V.123h13.115v6.143C31.836 5.289 36.675 2.852 36.675 0c0-3.714-8.209-6.723-18.337-6.723S0-3.714 0 0" clipPath="url(#iuc__Q)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 66.155 45.09)" /><path d="M0 0c4.333 9.261 14.355 9.853 14.355 9.853 6.328.703 8.939-4.118 8.939-4.118C4.963 4.128 4.075-15.669 4.075-15.669v-4.641h-8.15v4.641S-4.963 4.128-23.293 5.735c0 0 2.612 4.821 8.938 4.118 0 0 10.022-.592 14.355-9.853" clipPath="url(#iuc__R)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 72.624 37.093)" /><path d="M0 0a8.74 8.74 0 1 0 17.48-.001A8.74 8.74 0 0 0 0 0" clipPath="url(#iuc__S)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 69.542 31.226)" /><path d="M0 0a8.74 8.74 0 1 0 17.48 0A8.74 8.74 0 0 0 0 0" clipPath="url(#iuc__T)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 48.813 40.646)" /><path d="M0 0c7.981 20.298 18.709 27.988 18.709 27.988-38.144 26.834-44.382 65.851-44.382 65.851-39.743-25.817-18.418-78.748-18.418-78.748-.291 15.947 5.655 25.952 5.655 25.952-2.616 19.435 7.254 33.942 7.254 33.942 10.294-29.875 33.64-47.859 33.64-47.859C-5.988 17.064-10.45 3.476-10.45 3.476-4.65-.143 0 0 0 0" clipPath="url(#iuc__U)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 52.453 83.095)" /><path d="M0 0q.85-2.041 6.383-9.712c-25.818-40.325 4.347-65.996 4.347-65.996l.727 7.253c4.312-1.976 10.438-3.331 10.438-3.331l-.727-20.889c-35.401 8.806-36.4 50.326-36.4 50.326C-14.796-15.657 0 0 0 0" clipPath="url(#iuc__V)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 43.396 63.755)" /><path d="M0 0c17.071-16.711 44.089-14.641 44.089-14.641C52.495-34.949 72.947-36.69 72.947-36.69v-11.165c-26.979 4.347-35.965 22.487-35.965 22.487-16.541.425-33.216 9.275-33.216 9.275C-.727-6.515 0 0 0 0" clipPath="url(#iuc__W)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 43.5 79.874)" /><path d="M0 0a8.74 8.74 0 0 0 8.74 8.74A8.74 8.74 0 0 0 17.479 0 8.74 8.74 0 0 0 8.74-8.74 8.74 8.74 0 0 0 0 0" clipPath="url(#iuc__X)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 88.932 40.646)" /><path d="M0 0c-2.015 5.421-13.412 5.753-13.412 5.753C-20.652 6.05-28.165.07-28.165.07-33.832 9.682-50.12 8.528-50.12 8.528c14.229-9.507 15.675-27.53 15.675-27.53v-18.624C.542-47.752 4.107-84.36 4.107-84.36c4.939 6.074 6.076 19.358 6.076 19.358C-.109-39.571-23.002-30.178-23.002-30.178v6.902C-21.179-.979 0 0 0 0" clipPath="url(#iuc__Y)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 101.375 46.83)" /><path d="M0 0c-2.852-.59-9.235-1.913-12.391-1.775 0 0-9.065-17.745-34.608-22.278V-12.8s21.322 3.978 27.802 21.634c0 0 8.82-.097 16.935 1.867 0 0 2.019-4.464 2.262-10.701" clipPath="url(#iuc__Z)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 92.594 88.22)" /><path d="M0 0c-11.19-14.653-25.348-25.386-25.348-25.386C1.701-47.704-2.669-90.792-2.669-90.792c31.671 6.564 35.714 42.684 35.714 42.684-4.37-7.13-15.554-13.447-15.554-13.447-2.26-6.804-9.41-12.473-9.41-12.473-1.197 29.571-17.273 47.9-17.273 47.9C1.16-17.276 7.708-7.855 7.708-7.855 4.846-3.43 0 0 0 0" clipPath="url(#iuc__aa)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 94.851 64.305)" /><path d="M0 0c6.374 10.768 9.556 26.081 9.556 26.081C43.007 3.968 31.507-40.174 31.507-40.174 25.594-68.277.323-77.592.323-77.592c-.875 7.838-2.754 10.936-2.754 10.936 21.625 10.689 23.646 27.454 23.646 27.454 6.077 30.534-6.236 45.763-6.236 45.763-2.506-8.02-6.721-14.257-6.721-14.257C5.913-4.766 0 0 0 0" clipPath="url(#iuc__ab)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 98.081 59.104)" /><path d="M0 0v16.745a49 49 0 0 1 5.637-.323c1.968 0 3.86.115 5.638.323V0c4.622-.524 8.78-1.687 12.104-3.291 9.052-2.531 17.424 7.24 17.424 7.24a11.5 11.5 0 0 0 4.056 2.987c1.279.638 2.829 1.013 4.495 1.013 3.041 0 5.687-1.246 7.039-3.078 1.148-1.466 1.852-3.448 1.852-5.627 0-4.518-3.032-8.184-6.772-8.184-3.144 0-5.784 2.585-6.548 6.093-1.318-.592-1.785-4.048-1.785-4.048-2.657-9.688-5.538-12.935-8.702-16.179-2.205-2.575-6.073-4.284-10.48-4.284-3.027 0-5.799.805-7.947 2.145-2.19-2.52-6.019-4.189-10.374-4.189s-8.183 1.669-10.375 4.189c-2.146-1.34-4.917-2.145-7.944-2.145-4.409 0-8.277 1.709-10.482 4.284-3.165 3.244-6.045 6.491-8.703 16.179 0 0-.465 3.456-1.783 4.048-.764-3.508-3.406-6.093-6.55-6.093-3.739 0-6.771 3.666-6.771 8.184 0 2.179.705 4.161 1.854 5.627 1.349 1.832 3.995 3.078 7.038 3.078 1.667 0 3.215-.375 4.496-1.013a11.5 11.5 0 0 0 4.054-2.987s8.373-9.771 17.423-7.24C-8.78-1.687-4.623-.524 0 0" clipPath="url(#iuc__ac)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 70.636 97.495)" /><path d="M0 0c2.018 5.422 13.413 5.753 13.413 5.753C20.653 6.051 28.167.07 28.167.07c7.203 11.926 23.465 8.227 23.465 8.227C37.403-1.21 36.416-19.44 36.416-19.44l-.108-18.097c-5.947-1.878-14.351-7.823-14.351-7.823-4.213 4.638-5.521 9.567-5.521 9.567a711 711 0 0 1 8.562 4.782v9.311C23.174.596 0 0 0 0" clipPath="url(#iuc__ad)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 42.61 46.574)" /><path d="M0 0v-4.642h-8.15V0A49 49 0 0 1 0 0" clipPath="url(#iuc__ae)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 48.244)" /><path d="M0 0v-4.641h-8.15V0A49 49 0 0 1 0 0" clipPath="url(#iuc__af)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 59)" /><path d="M0 0v-4.642h-8.15V0a49 49 0 0 1 4.075-.168C-2.674-.168-1.312-.11 0 0" clipPath="url(#iuc__ag)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 64.38)" /><path d="M0 0v-4.642h-8.15V0A49.7 49.7 0 0 1 0 0" clipPath="url(#iuc__ah)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 69.758)" /><path d="M0 0v-4.641h-8.15V0a50 50 0 0 1 4.075-.166C-2.674-.166-1.312-.108 0 0" clipPath="url(#iuc__ai)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 75.136)" /><path d="M0 0v-4.642h-8.15V0A49 49 0 0 1 0 0" clipPath="url(#iuc__aj)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 80.514)" /><path d="M0 0v-4.642h-8.15V0a49 49 0 0 1 4.075-.166C-2.674-.166-1.312-.109 0 0" clipPath="url(#iuc__ak)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.062 85.892)" /><path d="M0 0q2.797.72 5.355-.914 3.427-2.19 3.484-5.583.019-1.897-.776-3.287L5.195-7.953q.388 1.211.296 2.01-.165 1.427-1.669 2.388c-1.021.653-2.111.727-3.262.222q-1.728-.763-3.281-3.182-1.541-2.424-1.385-4.229.168-1.8 1.601-2.721 1.479-.941 2.911-.4.783.282 1.779 1.216l2.844-1.819c-1.244-1.413-2.69-2.287-4.327-2.625q-2.456-.51-4.82 1.003-2.934 1.87-3.33 4.934-.397 3.072 1.828 6.561C-4.013-2.08-2.136-.548 0 0" clipPath="url(#iuc__al)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 48.566 102.83)" /><path d="m0 0-7.731 3.798-1.6-3.256 7.097-3.487-1.311-2.666-7.097 3.487-1.939-3.942 8.088-3.976-1.355-2.758-11.067 5.441L-9.381 7.98 1.336 2.714Z" clipPath="url(#iuc__am)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 56.572 107.799)" /><path d="m0 0-1.545-4.324 3.441-1.231c.689-.246 1.231-.342 1.637-.289q1.07.131 1.557 1.486.525 1.465-.178 2.278-.39.46-1.379.815zm7.473.012A4.1 4.1 0 0 0 8.5-1.628a5.4 5.4 0 0 0 .29-1.628q.016-.844-.326-1.794c-.271-.764-.727-1.45-1.355-2.056q-.951-.914-2.382-.917c.603-.551.948-1.155 1.047-1.81q.145-.98-.456-2.675l-.388-1.08q-.395-1.102-.449-1.526-.101-.665.259-1.127l-.142-.403-3.533 1.265q.044.586.098.936c.08.48.197.96.364 1.434l.51 1.505c.357 1.031.431 1.772.228 2.231S1.52-8.424.628-8.107l-3.127 1.121-2.259-6.309-3.133 1.12 5.761 16.09 7.331-2.622Q6.761.697 7.473.012" clipPath="url(#iuc__an)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 58.741 108.63)" /><path d="m0 0-.979-4.484 3.577-.782q1.071-.232 1.661-.077c.696.182 1.145.739 1.355 1.674q.324 1.519-.468 2.238-.453.408-1.477.631Zm7.411.973A4.04 4.04 0 0 0 8.642-.52a5.2 5.2 0 0 0 .492-1.579q.129-.835-.086-1.822-.26-1.187-1.083-2.213-.82-1.026-2.241-1.212 1-.707 1.268-1.662.277-.954-.11-2.712l-.247-1.12q-.248-1.143-.246-1.573-.01-.673.406-1.083l-.092-.419-3.668.801c-.019.391-.031.704-.025.941.018.487.074.976.178 1.468l.314 1.558c.222 1.068.197 1.816-.061 2.243q-.388.643-1.773.945l-3.25.711-1.428-6.549-3.244.708L-2.61 3.61l7.602-1.662Q6.617 1.56 7.411.973" clipPath="url(#iuc__ao)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 64.185 110.345)" /><path d="m0 0 4.155-.28-1.601 6.848Zm.929 10.593 3.841-.258L9.374-7.103l-3.68.249-.837 3.576-5.977.4-1.336-3.431-3.552.24z" clipPath="url(#iuc__ap)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 70.018 114.037)" /><path d="m0 0-1.668 17.01 3.367.329.634-6.487 6.297.618-.634 6.485 3.36.329 1.669-17.01L9.658.945 8.919 8.54l-6.303-.618.745-7.593Z" clipPath="url(#iuc__aq)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 74.814 116.488)" /><path d="M0 0q-.777.378-1.896.077l-2.961-.803 1.318-4.857 2.954.8q1.127.305 1.588 1.068c.308.508.351 1.191.117 2.05Q.768-.379 0 0m4.112-5.263C3.41-6.318 2.21-7.076.499-7.54l-3.269-.887 1.607-5.93-3.263-.883-4.468 16.496 6.746 1.828q2.335.632 4.062-.268c1.158-.6 1.976-1.791 2.462-3.576q.787-2.92-.264-4.503" clipPath="url(#iuc__ar)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 82.886 110.285)" /><path d="m0 0 3.822 1.665-4.573 5.343Zm-4.044 9.833 3.527 1.539L11.59-1.991 8.211-3.465 5.823-.674.326-3.071l.394-3.66-3.262-1.422Z" clipPath="url(#iuc__as)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 87.03 111.457)" /><path d="M0 0q.766-.906 1.459-1.148 1.282-.442 3.016.653Q5.516.161 6.014.803q.95 1.23.172 2.453c-.302.477-.732.72-1.299.723q-.842.01-2.339-.523L.843 2.859c-1.68-.585-2.924-.849-3.718-.794q-2.03.12-3.366 2.25-1.227 1.942-.671 4.087.546 2.142 3.188 3.804 2.198 1.39 4.524 1.16 2.316-.23 3.847-2.487L1.883 9.134C1.28 9.972.523 10.356-.4 10.289q-.914-.073-1.939-.718c-.763-.48-1.268-1.018-1.527-1.618q-.378-.902.148-1.742.489-.777 1.404-.736.59.018 2.203.554l2.795.926q1.839.61 3.04.453Q7.6 7.162 8.82 5.232c.831-1.32 1.041-2.724.616-4.21q-.637-2.23-3.25-3.878v-1.277c.172.175.302.298.376.369q.119.107.264.2c.499.314.973.434 1.434.36q.683-.108 1.145-.834.565-.902.197-1.868-.37-.964-1.471-1.662-.479-.3-1.28-.517a19 19 0 0 0-1.065-.234l-.172 1.068q.636.171.868.249.527.166.806.345.563.35.646.757c.056.268.031.493-.086.677-.172.274-.388.41-.634.407a1.3 1.3 0 0 1-.689-.197 2 2 0 0 1-.333-.274 5 5 0 0 1-.351-.391l-.652.138.006 2.059C4.013-4.229 2.628-4.5 1.053-4.293q-2.375.305-3.798 2.563z" clipPath="url(#iuc__at)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 92.14 109.375)" /><path d="m0 0 3.207 2.662-5.878 3.86zm-6.623 8.322 2.961 2.459 15.351-9.47-2.838-2.357L5.78.973 1.169-2.859l1.398-3.407-2.739-2.271Z" clipPath="url(#iuc__au)" style={{
    fill: "#d4a940",
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none"
  }} transform="matrix(.35278 0 0 -.35278 97.122 105.386)" /></svg>);

IucIcon.displayName = 'IucIcon';
