import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth,
  hover
} from 'styled-system'

const Button = styled('button')(
  [],
  props => ({
    display: 'inline-block',
    webkitTextAlign: 'left',
    textAlign: 'left',
    fontFamily: 'inherit',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '.1s',
    transitionTimingFunction: 'ease-out',
    color: `${props.active ? 'white' : null}`,
    backgroundColor: `${props.active ? 'black' : null}`
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth,
  hover
)

Button.defaultProps = {
  fontSize: 1,
  px: 0,
  color: 'inherit',
  bg: 'transparent',
  borderRadius: 0,
  borderWidth: 0,
  hover: {
    backgroundColor: 'rgba(0, 0, 0, .0625)'
  },
  py: 0
}

export default Button
