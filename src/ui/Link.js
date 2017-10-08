import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Link = styled('a')(
  [],
  props => ({
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: '0.125em'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight
)

Link.defaultProps = {
  color: 'inherit',
  fontWeight: '600',
  fontSize: 10
}

export default Link
