/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../layout'
import { useMicrobeats } from '..'
import {
  Button,
  Play,
  Pause
} from '../icons'

export default props => {
  const {
    tracks,
    playPause,
  } = useMicrobeats()
  const track = tracks.find(t => t.name === 'mmmxiii')

  return (
    <Layout>
      <div
        sx={{
          p: 3,
        }}>
        <h1>MMMXIII: a mix of deconstructed Microbeats from the year 2013</h1>
        <div sx={{ mx: -2 }}>
          <button
            onClick={e => playPause(track)}
            sx={{
              appearance: 'none',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: 'inherit',
              bg: 'transparent',
              border: 0,
              display: 'inline-flex',
              alignItems: 'center',
              m: 0,
              p: 2,
            }}>
            <Play sx={{ mr: 2 }} /> Play Mix
          </button>
        </div>
      </div>
    </Layout>
  )
}
