/** @jsx jsx */
import { jsx } from 'theme-ui'

const SVG = ({ size = 24, ...props }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill='currentcolor'
    {...props}
  />

export const Button = ({
  title,
  size = 32,
  ...props
}) =>
  <button
    {...props}
    title={title}
    sx={{
      appearance: 'none',
      color: 'inherit',
      bg: 'transparent',
      p: 1,
      m: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      width: size,
      height: size,
      borderRadius: 99999,
      border: 0,
      ':hover': {},
      ':focus': {
        outline: 0,
        boxShadow: '0 0 0 2px',
      },
    }}>
    {props.children}
    <span
      sx={{
        position: 'absolute',
        top: -9999,
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}>
      {title}
    </span>
  </button>

export const Play = props =>
  <SVG {...props}>
    <path d="M8 5v14l11-7z" />
  </SVG>

export const Pause = props =>
  <SVG {...props}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </SVG>

export const Previous = props =>
  <SVG {...props}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </SVG>

export const Next = props =>
  <SVG {...props}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </SVG>

export const Dot = props =>
  <SVG {...props} viewBox='0 0 32 32'>
    <circle cx="16" cy="16" r="14" fill="none" stroke="currentcolor" strokeWidth="4"
    />
    <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
  </SVG>

export const Up = props =>
  <SVG {...props}>
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
  </SVG>

export const Down = props =>
  <SVG {...props}>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
  </SVG>
