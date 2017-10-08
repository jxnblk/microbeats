import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderColor,
  hover
} from 'styled-system'

const Progress = styled('progress')(
  [],
  props => ({
    display: 'block',
    width: '100%',
    height: '16px',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    cursor: 'pointer',
    '&::-webkit-progress-bar': {
      backgroundColor: '#f6f6f6'
    },
    '&::-webkit-progress-value': {
      backgroundColor: 'black',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.2s'
    }
  }),
  space,
  fontSize,
  width,
  color,
  borderWidth,
  borderColor,
  hover
)

Progress.defaultProps = {
  m: 0,
  borderWidth: 6,
  borderColor: 'transparent',
  borderBottom: true,
  borderTop: true,
  hover: {
    '&::-webkit-progress-value': {
      backgroundColor: '#07c'
    }
  }
}

export default Progress
