/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import { useMicrobeats } from '..'
import Layout from '../layout'

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
    index,
    setIndex,
    playing,
    playPause,
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
          display: 'flex',
          p: 3,
        }}>
        <label
          sx={{
            ml: 'auto'
          }}>
          Sort:
          <button
            onClick={e => {
              setSort(!chronological)
              if (playing) setIndex(tracks.length - 1 - index)
            }}
            sx={{
              appearance: 'none',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              bg: 'muted',
              border: 0,
              borderRadius: 4,
              m: 0,
              ml: 2,
            }}>
            {chronological ? 'Chronological' : 'Newest First'}
          </button>
        </label>
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
                userSelect: 'none',
                cursor: 'pointer',
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
