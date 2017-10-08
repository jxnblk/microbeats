import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Box = styled('div')(
  [],
  props => ({
    minWidth: 0
  }),
  space,
  fontSize,
  width,
  color
)

Box.defaultProps = {}

export default Box
