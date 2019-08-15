/** @jsx jsx */
import { jsx } from 'theme-ui'
import hhmmss from 'hhmmss'
import { useMicrobeats } from './index'

export default props => {
  const {
    progress,
    time,
    duration,
    seek,
  } = useMicrobeats()

  return (
    <div>
      <progress
        value={progress}
        children={progress}
        onClick={seek}
        sx={{
          appearance: 'none',
          display: 'block',
          width: '100%',
          height: 16,
          m: 0,
          cursor: 'pointer',
          border: '0px solid transparent',
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
            '::-webkit-progress-bar': {
              // bg: 'primary',
            },
            '::-webkit-progress-value': {
              // bg: 'primary',
            }
          },
        }}
      />
      <div
        sx={{
          display: 'flex',
        }}>
        <div>{hhmmss(time)}</div>
        <div sx={{ mx: 'auto' }} />
        <div>{hhmmss(duration)}</div>
      </div>
    </div>
  )
}
