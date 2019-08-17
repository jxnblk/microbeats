/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useEffect, useRef } from 'react'
import { graphql, Link } from 'gatsby'
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
    playing,
    playPause,
  } = useMicrobeats()
  const activeItem = useRef(null)

  useEffect(() => {
    if (!activeItem.current) return
    const el = activeItem.current
    const rect = el.getBoundingClientRect()
    if (rect.top < 128) {
      window.scrollTo(0, el.offsetTop - 256)
    } else if (rect.bottom > window.innerHeight) {
      window.scrollTo(0, el.offsetTop - window.innerHeight + rect.height)
    }
  }, [index])

  return (
    <Layout>
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
              <div
                sx={{
                  p: 3
                }}>
                {track.id}
              </div>
              <div
                sx={{
                  py: 3,
                  fontWeight: 'bold',
                }}>
                {track.title}
              </div>
              <div sx={{ mx: 'auto' }} />
              <div
                onClick={e => {
                  e.stopPropagation()
                }}>
                <Link to={'/' + track.name}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    p: 3,
                    ':hover': {
                      color: 'primary',
                    },
                    ':focus': {
                      outline: '2px solid',
                    }
                  }}>
                  {format(track.date, 'ddd. MMM DD, YYYY')}
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
