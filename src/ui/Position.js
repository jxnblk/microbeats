import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Position = styled('div')(
  [],
  props => ({
    position: `${props.position}`,
    height: `${props.height}`,
    top: `${props.top ? 0 : null}`,
    right: `${props.right ? 0 : null}`,
    bottom: `${props.bottom ? 0 : null}`,
    left: `${props.left ? 0 : null}`
  }),
  space,
  fontSize,
  width,
  color
)

Position.defaultProps = {}

export default Position
