import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Box from './Box'

const Container = styled(Box)(
  [],
  props => ({
    maxWidth: '1024px'
  }),
  space,
  fontSize,
  width,
  color
)

Container.defaultProps = {
  mx: 'auto'
}

export default Container
