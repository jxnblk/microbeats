/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Layout from './layout'
import { useMicrobeats } from './index'
import { Play } from './icons'

export default props => {
  const { id, title } = props.pageContext
  const { tracks, playPause } = useMicrobeats()
  const track = tracks.find(t => t.id === id)

  const {
    name,
    date,
    url,
  } = track

  return (
    <Layout title={title}>
      <div
        sx={{
          p: 3,
        }}>
        <Styled.h1
          sx={{
            fontSize: [3, 4, 5]
          }}>
          {id}: {title}
        </Styled.h1>
        <div>{date}</div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            my: 4
          }}>
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
              p: 2,
              m: 0,
              mr: 3,
              outline: '2px solid',
              ':focus': {
              }
            }}>
            <Play sx={{ mr: 2 }} /> Play track
          </button>
          <Styled.a download href={url}>
            Download MP3
          </Styled.a>
        </div>
      </div>
    </Layout>
  )
}

