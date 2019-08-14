/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import {
  useEffect,
  useRef,
} from 'react'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import hhmmss from 'hhmmss'
import { useMicrobeats } from '..'
import Layout from '../layout'
import {
  Button,
  Play,
  Pause,
  Previous,
  Next,
} from '../icons'
import Progress from '../progress'

const Select = props =>
  <select
    {...props}
    sx={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      m: 0,
      px: 2,
      py: 1,
      borderRadius: 4,
      border: '1px solid',
      color: 'inherit',
      bg: 'transparent',
      ':focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px',
      }
    }}
  />

export default props => {
  const {
    tracks,
    time,
    duration,
    index,
    setIndex,
    playing,
    playPause,
    previous,
    next,
    seek,
    progress,
    chronological,
    setSort
  } = useMicrobeats()
  const activeItem = useRef(null)

  useEffect(() => {
    if (!activeItem.current) return
    const el = activeItem.current
    const rect = el.getBoundingClientRect()
    if (rect.top < 128) {
      window.scrollTo(0, el.offsetTop - 128)
    } else if (rect.bottom > window.innerHeight) {
      window.scrollTo(0, el.offsetTop - window.innerHeight + rect.height)
    }
  }, [index])

  return (
    <Layout>
      <div
        sx={{
          position: 'sticky',
          top: 0,
          bg: 'background',
          px: 3,
          mb: 5,
        }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            title='Previous'
            onClick={previous}>
            <Previous />
          </Button>
          <div sx={{ mx: 2 }} />
          <Button
            title='Play/Pause'
            size={48}
            onClick={e => playPause()}>
            {playing ? (
              <Pause size={40} />
            ) : (
              <Play size={40} />
            )}
          </Button>
          <div sx={{ mx: 2 }} />
          <Button
            title='Next'
            onClick={next}>
            <Next />
          </Button>
        </div>
        <Progress
          onClick={seek}
          value={progress}
          children={progress}
        />
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 3,
          }}>
          <div>{hhmmss(time)}/{hhmmss(duration)}</div>
          <div sx={{ mx: 'auto' }} />
          <label>
            Sort by
            <button
              onClick={e => {
                setSort(!chronological)
                setIndex(tracks.length - 1 - index)
              }}
              sx={{
                ml: 2,
              }}>
              {chronological ? 'Chronological' : 'Newest First'}
            </button>
          </label>
        </div>
      </div>
      <ul
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
        }}>
        {tracks.map((track, i) => {
          const active = i === index
          return (
            <li
              key={track.id}
              ref={active ? activeItem : null}
              role='button'
              tabIndex='0'
              onClick={e => playPause(track)}
              aria-current={active}
              sx={{
                display: 'flex',
                p: 3,
                alignItems: 'center',
                ':hover': {
                  color: 'primary',
                  bg: 'muted',
                },
                '&[aria-current=true]': {
                  color: 'background',
                  bg: 'text',
                },
                ':focus': {
                  outline: 'none',
                  boxShadow: '0 0 0 2px',
                }
              }}>
              <div>
                {track.id}
              </div>
              <div
                sx={{
                  px: 2,
                  fontWeight: 'bold',
                }}>
                {track.title}
              </div>
              <div sx={{ mx: 'auto' }} />
              <div>
                {format(track.date, 'ddd, MMM DD, YYYY')}
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
