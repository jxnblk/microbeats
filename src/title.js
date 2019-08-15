/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useMicrobeats } from './index'

export default props => {
  const { title } = useMicrobeats()

  return (
    <Styled.h1>
      {title}
    </Styled.h1>
  )
}
