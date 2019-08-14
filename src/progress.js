/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <progress
    {...props}
    sx={{
      appearance: 'none',
      width: '100%',
      height: 16,
      m: 0,
      cursor: 'pointer',
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 5,
      borderBottomWidth: 5,
      '::-webkit-progress-bar': {
        bg: 'muted',
      },
      '::-webkit-progress-value': {
        transition: 'background-color .2s ease-out',
        bg: 'currentcolor',
      },
      ':hover': {
        '::-webkit-progress-value': {
          bg: 'primary',
        }
      },
    }}
  />
