import React from 'react'
import Flex from './Flex'
import Box from './Box'
import CircleButton from './CircleButton'
import Text from './Text'
import Heading from './Heading'

const Header = props => (
  <Flex align="center">
    <CircleButton onClick={props.onPlayPause}>
      {props.playing ? 'Pause' : 'Play'}
    </CircleButton>
    <Box px={2}>
      <Text fontSize={0}>microbeats</Text>
      <Heading fontSize={3}>{props.title}</Heading>
    </Box>
    <CircleButton ml="auto" onClick={props.onPrevious}>
      Prev
    </CircleButton>
    <CircleButton onClick={props.onNext}>Next</CircleButton>
  </Flex>
)

export default Header
