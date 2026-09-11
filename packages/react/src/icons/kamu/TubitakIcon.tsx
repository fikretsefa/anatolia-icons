/* Bu dosya otomatik üretilir (scripts/build-react.mjs). Elle düzenlemeyin. */

import * as React from 'react';
import type { IconProps } from '../../types';

/**
 * TubitakIcon SVG ikon bileşeni.
 * @remarks SVGR pipeline tarafından üretilir; size, color, title ve className destekler.
 */
export const TubitakIcon = React.forwardRef<SVGSVGElement, IconProps>(({
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
}} viewBox="0 0 83 93" width={size} height={size} color={color} className={className} role="img" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M21.82 19.6C21.82 8.848 30.668 0 41.42 0s19.6 8.848 19.6 19.6h-1.18c0-10.105-8.315-18.42-18.42-18.42S23 9.495 23 19.6zm31.53 15.56c-7.016 5.37-16.834 5.37-23.85 0a12 12 0 0 1-.42-1.9c6.971 6.314 17.719 6.314 24.69 0a12 12 0 0 1-.42 1.9m-28-15.56c0-8.797 7.238-16.035 16.035-16.035S57.42 10.803 57.42 19.6h-1.74c-.203-7.678-6.575-13.882-14.255-13.882S27.373 11.922 27.17 19.6zm16 16a16 16 0 0 1-12.36-5.82c.104-.774.279-1.537.52-2.28a14.26 14.26 0 0 0 11.84 6.321c4.749 0 9.197-2.375 11.84-6.321.249.741.427 1.505.53 2.28a16.01 16.01 0 0 1-12.37 5.82m11-10.1a12.48 12.48 0 0 1-10.97 6.54 12.48 12.48 0 0 1-10.97-6.54 12.53 12.53 0 0 1 7.16-5.94H29c0-6.857 5.643-12.5 12.5-12.5S54 12.703 54 19.56h-8.76a12.47 12.47 0 0 1 7.15 5.94" style={{
    fill: "#cf1619",
    fillRule: "nonzero"
  }} /><path d="M53.26 27.54a13 13 0 0 0-.86-2 12.5 12.5 0 0 0 1.5-5.94h1.78a14.15 14.15 0 0 1-2.42 7.94m.51 5.72c.16-1.141.16-2.299 0-3.44a16 16 0 0 0 3.69-10.22h2.38a18.36 18.36 0 0 1-6.07 13.66M27.17 19.6H29a12.5 12.5 0 0 0 1.5 5.94 13 13 0 0 0-.86 2 14.15 14.15 0 0 1-2.42-7.94m-4.22 0h2.38a16 16 0 0 0 3.67 10.22 13 13 0 0 0-.05 1.66q-.004.895.13 1.78A18.36 18.36 0 0 1 23 19.6m51.08 0L41.42 65.34 8.76 19.6h13.06a19.57 19.57 0 0 0 7.68 15.56 12.51 12.51 0 0 0 11.925 8.8c5.46 0 10.315-3.583 11.925-8.8A19.57 19.57 0 0 0 61 19.6z" style={{
    fill: "#1d1d1b",
    fillRule: "nonzero"
  }} /><path d="M39.98 75.68h2.89v16.57h-2.89z" style={{
    fill: "#1d1d1b"
  }} /><path d="M2.04 92.25V78.43H0v-2.75h6.96v2.75H4.92v13.82zm24.37 0V75.68h2.51a6.67 6.67 0 0 1 3.74.95 3.69 3.69 0 0 1 1.65 3.27v.1a3.88 3.88 0 0 1-2.39 3.75 3.82 3.82 0 0 1 2.61 3.69v.21A4.11 4.11 0 0 1 33 91a6.16 6.16 0 0 1-4 1.21zm2.89-9.61q.127.017.253.017a1.91 1.91 0 0 0 1.877-2.197c0-1.38-.71-2.06-2.13-2.06zm0 6.94h.07A2.3 2.3 0 0 0 31 89a2 2 0 0 0 .64-1.59v-.11a2 2 0 0 0-.64-1.58 2.3 2.3 0 0 0-1.63-.57h-.07z" style={{
    fill: "#1d1d1b",
    fillRule: "nonzero"
  }} /><path d="M39.98 71.78h2.77v2.48h-2.77z" style={{
    fill: "#1d1d1b"
  }} /><path d="M50.35 92.25V78.43h-2.03v-2.75h6.96v2.75h-2.04v13.82zm9.5 0L63 75.64h3.08l3.15 16.61h-2.89L65.8 89h-2.63l-.52 3.29zm3.74-5.89h1.78l-.88-5.47zm10.71 5.89V75.68h2.89v6.94l2.34-6.94h3.27L80 82.69l2.85 9.56h-3.22l-1.8-6.27-.64 1.82v4.45z" style={{
    fill: "#1d1d1b",
    fillRule: "nonzero"
  }} /><path d="M13.22 71.78h2.51v2.48h-2.51z" style={{
    fill: "#1d1d1b"
  }} /><path d="M16.44 92.47a3.73 3.73 0 0 1-2.94-1.21 5.6 5.6 0 0 1-1.18-3.84V75.68h2.86v12c0 1.39.42 2.08 1.26 2.08s1.25-.69 1.25-2.08v-12h2.86v11.74a5.63 5.63 0 0 1-1.16 3.84 3.78 3.78 0 0 1-2.95 1.21" style={{
    fill: "#1d1d1b",
    fillRule: "nonzero"
  }} /><path d="M17.15 71.78h2.51v2.48h-2.51z" style={{
    fill: "#1d1d1b"
  }} /></svg>);

TubitakIcon.displayName = 'TubitakIcon';
