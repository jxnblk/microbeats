import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth
} from 'styled-system'
import Button from './Button'

const CircleButton = styled(Button)(
  [],
  props => ({
    textAlign: 'center',
    height: '40px',
    flex: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius,
  borderWidth
)

CircleButton.defaultProps = {
  width: 40,
  py: 0,
  px: 0,
  bg: 'transparent',
  borderRadius: 99999,
  borderWidth: 0
}

export default CircleButton
