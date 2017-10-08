import React from 'react'
import play from 'react-icons/lib/md/play-arrow'
import pause from 'react-icons/lib/md/pause'
import next from 'react-icons/lib/md/skip-next'
import previous from 'react-icons/lib/md/skip-previous'
import volume from 'react-icons/lib/md/volume-up'

const icons = {
  play,
  pause,
  next,
  previous,
  volume
}

const Icon = ({
  name,
  size
}) => {
  const Base = icons[name]
  if (!Base) return false

  return <Base size={size} color='inherit' style={style} />
}

const style = {
  display: 'inline-block',
  margin: 0
}

Icon.defaultProps = {
  size: 24
}

export default Icon
