/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * OzyeginIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const OzyeginIcon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color,
  title,
  titleId,
  className,
  ...props
}, ref) => <svg data-anatolia-icons="https://github.com/fikretsefa/anatolia-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.2 126.25" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<defs><clipPath id="ozyegin__clip-path"><path d="M0 0h425.2v126.25H0z" className="ozyegin__cls-1" /></clipPath><clipPath id="ozyegin__clip-path-4"><path d="M-31.1-109.18h487.39v344.62H-31.1z" className="ozyegin__cls-1" /></clipPath><style>{".ozyegin__cls-1{fill:none}.ozyegin__cls-2{clip-path:url(#ozyegin__clip-path)}"}</style></defs><g id="ozyegin__Layer_2"><g id="ozyegin__Layer_1-2" className="ozyegin__cls-2"><g className="ozyegin__cls-2"><g className="ozyegin__cls-2" style={{
          clipPath: "url(#ozyegin__clip-path-4)"
        }}><path d="M284 20.92h-5.91v5.91H284Zm40.35 19.57H425.2v4.78H324.39v10.31h-4l-18.66-15.7-1.18-1.09-.94-1 .15 2.26.1 1.78v13.75h-5.36v-25.4h4l17.87 15 1.63 1.39 1.28 1.33-.2-3-.05-1.38V30.18h5.32ZM284 30.18h-5.91v25.4H284Zm-38.13-7.73h14.24v4.38h-14.2Zm16.42 12.26v2.85l5.77-1v-.59c0-2.17-.45-3.64-1.34-4.48s-2.51-1.28-5-1.28h-17.45c-2.46.05-4.14.44-5 1.28S238 34 238 36.18v13.4c0 2.36.44 3.93 1.28 4.77s2.6 1.23 5 1.23h17.52c2.46 0 4.14-.44 5-1.23s1.28-2.51 1.28-4.77v-8.77h-15.39v4.34h9.64v5.66h-18.46v-16.1Zm-58.5 20.87h26.24v-4.77h-20.29v-6.3h11.71v-4.34h-11.71v-5.66h20.08v-4.33h-26ZM0 40.49h100.81v-4.31c0-2.21.39-3.79 1.28-4.72s2.56-1.23 5-1.28h18.71c2.46 0 4.08.39 5 1.28s1.33 2.41 1.33 4.72v13.4c0 2.26-.44 3.84-1.33 4.72s-2.51 1.23-5 1.28h-18.69c-2.41 0-4.09-.39-5-1.23s-1.23-2.41-1.28-4.77v-4.31H0Zm106.72 10.32h19.49v-16.1h-19.49Zm73.56 4.77h6V44.06l13.14-13.88h-6.94l-8.76 9.75-8.72-9.75h-7.88l13.2 14Zm-43.43 0h27.27v-4.77h-18l18-18.12v-2.51h-25.5v4.53h16l-17.77 18.12Zm-18.74-28.75H123v-5.91h-4.93Zm-8.22 0h4.93v-5.91h-4.93Z" style={{
            fill: "#c80065",
            fillRule: "evenodd"
          }} /><path d="M0 121.48h425.2v4.77H0z" style={{
            fill: "#c80065"
          }} /><path d="M0 0h425.2v4.78H0z" style={{
            fill: "#004b93"
          }} /><path d="M389.48 96.07h-5.91v-25.4h5.91V81h35.72v4.77h-35.72ZM41.62 70.67V91.3h16.84V70.67h5.91v19.4c0 2.26-.44 3.84-1.33 4.72s-2.51 1.24-5 1.28H42c-2.46 0-4.14-.39-5-1.23s-1.23-2.41-1.28-4.77v-4.31H0V81h35.72V70.67Zm347.86-9.25h-5.91v5.9h5.91Zm-20.1 13.68V78l5.22-1.23v-.55c-.05-2.11-.49-3.54-1.38-4.33s-2.51-1.23-4.92-1.23h-14.42c-2.47 0-4.14.44-5 1.33s-1.28 2.41-1.28 4.68v2.8c.05 2.32.45 3.89 1.28 4.73s2.56 1.28 5 1.28h15.85v5.82h-18v-3l-5.22 1.08v.69c0 2.31.44 3.89 1.28 4.72s2.61 1.28 5.07 1.28h15.74c2.46 0 4.08-.44 5-1.28s1.4-2.46 1.4-4.72v-3.5c-.05-2.31-.5-3.89-1.38-4.72s-2.56-1.28-5-1.28h-15.88V75.1ZM121.16 61.42h-5.91v5.9h5.91Zm154.4 0h-5.91v5.9h5.91Zm38.79 34.65h26.24V91.3h-20.33V85H332v-4.33h-11.74V75h20.08v-4.33h-26ZM297.89 75.2h11.72v-4.53h-29.29v4.53H292v20.87h5.91Zm-22.33-4.53h-5.91v25.41h5.91Zm-20.1 4.43V78l5.22-1.23v-.55c-.05-2.11-.49-3.54-1.38-4.33s-2.51-1.23-4.92-1.23H240q-3.69 0-5 1.33c-.88.89-1.28 2.41-1.28 4.68v2.8c0 2.32.45 3.89 1.28 4.73s2.56 1.28 5 1.28h15.86v5.82h-18v-3l-5.22 1.08v.69c0 2.31.44 3.89 1.28 4.72s2.61 1.28 5.07 1.28h15.71c2.46 0 4.08-.44 5-1.28s1.3-2.46 1.3-4.72v-3.5c0-2.31-.5-3.89-1.38-4.72s-2.56-1.28-5-1.28h-15.8V75.1Zm-58.05 21h5.81v-9.62h5.62l10.24 9.59h8.46l-11.71-9.59h3.3c2.06 0 3.49-.4 4.38-1.19a4.73 4.73 0 0 0 1.38-3.74v-6c0-1.83-.5-3.06-1.38-3.75a6.72 6.72 0 0 0-4.38-1.18h-21.72Zm19.11-21a3.36 3.36 0 0 1 2.06.5 1.86 1.86 0 0 1 .6 1.52v3.05a1.81 1.81 0 0 1-.6 1.58 3.6 3.6 0 0 1-2.06.44h-13.3v-7.14Zm-53.78 21H189v-4.8h-20.36V85h11.72v-4.33h-11.72V75h20.09v-4.33h-26Zm-22.5 0h4.09l14-25.4h-5.93L142.6 89l-10.29-18.33h-6.74Zm-19.08-25.4h-5.91v25.38h5.91ZM74.87 96.07h5.31V82.34l-.1-1.77-.14-2.27.93 1 1.18 1.08 18.66 15.7h4V70.67h-5.28v14.71l.2 3-1.23-1.31-1.63-1.43-17.87-15h-4ZM51.69 67.32h4.93v-5.9h-4.93Zm-8.22 0h4.92v-5.9h-4.92Z" style={{
            fillRule: "evenodd",
            fill: "#004b93"
          }} /></g></g></g></g></svg>);

OzyeginIcon.displayName = 'OzyeginIcon';
