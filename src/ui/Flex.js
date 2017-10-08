import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Box from './Box'

const Flex = styled(Box)(
  [],
  props => ({
    display: 'flex',
    flexWrap: `${props.wrap ? 'wrap' : null}`,
    alignItems: `${props.align}`,
    justifyContent: `${props.justify}`
  }),
  space,
  fontSize,
  width,
  color
)

Flex.defaultProps = {}

export default Flex
