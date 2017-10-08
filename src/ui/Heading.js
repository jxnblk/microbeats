import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Heading = styled('h1')(
  [],
  props => ({
    lineHeight: 1.25
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Heading.defaultProps = {
  fontSize: 4,
  m: 0,
  fontWeight: '800'
}

export default Heading
