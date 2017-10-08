import React from 'react'
import connect from 'refunk'
import { compose, mapProps } from 'recompose'
import { ThemeProvider } from 'styled-components'
import hhmmss from 'hhmmss'
import { format } from 'date-fns'
import theme from '../theme'
import withAudio from './withAudio'
import Style from './Style'
import Icon from './Icon'

// lab
import Box from './ui/Box'
import Flex from './ui/Flex'
import Position from './ui/Position'
import TruncatedHeading from './ui/TruncatedHeading'
import Text from './ui/Text'
import Button from './ui/Button'
import CircleButton from './ui/CircleButton'
import Progress from './ui/Progress'
import Link from './ui/Link'

const setIndex = index => state => ({ index })

const hoc = compose(
  connect,
  mapProps(props => ({
    ...props,
    track: props.tracks[props.index % props.tracks.length]
  })),
  withAudio
)

const App = hoc(props => [
  <Style css={props.css} />,
  <ThemeProvider theme={theme}>
    <div>
      <Position
        width={1}
        position='fixed'
        height='96px'
        bg='white'
        top right left>
        <Box p={2}>
          <header>
            <Flex w={1} align='center'>
              <CircleButton
                onClick={e => props.playing ? props.pause() : props.play()}>
                <Icon name={props.playing ? 'pause' : 'play'} />
              </CircleButton>
              <Box px={2}>
                <Flex align='baseline'>
                  <Text fontSize={0}>microbeats</Text>
                  <Text ml={4} fontSize='8px'>{hhmmss(props.currentTime)}</Text>
                </Flex>
                <TruncatedHeading fontSize={3}>
                  {props.track && props.track.title}
                </TruncatedHeading>
              </Box>
              <CircleButton ml='auto' onClick={e => props.previous()}>
                <Icon name='previous' />
              </CircleButton>
              <CircleButton onClick={e => props.next()}>
                <Icon name='next' />
              </CircleButton>
            </Flex>
            <Progress
              mt={2}
              onClick={e => {
                const n = e.clientX - e.target.offsetLeft
                const p = n / e.target.offsetWidth
                props.seek(p)
              }}
              value={props.currentTime / props.duration}
            />
          </header>
        </Box>
      </Position>
      <Box py={96}>
        {props.tracks.map((track, i) => (
          <Box key={track._id} id={track.name}>
            <Button
              width={1}
              py={3}
              px={3}
              onClick={e => {
                props.update(setIndex(i))
              }}>
              <Flex align='center'>
                <Text mr={3}>
                  {track.title}
                </Text>
                <Box width={20}>
                  {props.index === i && <Icon name='volume' size={16} />}
                </Box>
                <Text ml='auto' fontSize={[ '8px', '10px' ]}>
                  {format(track.date, 'MMM D, YYYY')}
                </Text>
              </Flex>
            </Button>
          </Box>
        ))}
      </Box>
      <footer>
        <Flex px={3} py={4}>
          <Link href='https://compositor.io' mr={3}>
            Built with Compositor
          </Link>
          <Link href='http://jxnblk.com' mr={3}>
            Made by Jxnblk
          </Link>
        </Flex>
      </footer>
    </div>
  </ThemeProvider>
])

App.defaultProps = {
  tracks: [],
  index: 0,
  playing: false,
  currentTime: 0,
  duration: 0
}

App.getInitialProps = async ({ Component }) => {
  const fetch = require('isomorphic-fetch')
  const { ServerStyleSheet } = require('styled-components')
  const res = await fetch('https://microbeats.now.sh/tracks')
  const tracks = await res.json()
  const sorted = tracks
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    tracks: sorted
  }
}

export default App
