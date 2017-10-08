import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Heading from './Heading'

const TruncatedHeading = styled(Heading)(
  [],
  props => ({
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }),
  space,
  fontSize,
  width,
  color
)

TruncatedHeading.defaultProps = {}

export default TruncatedHeading
