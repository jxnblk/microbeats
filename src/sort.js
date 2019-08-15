/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useMicrobeats } from './index'
import { Button, Up, Down } from './icons'

export default props => {
  const {
    chronological,
    setSort,
    index,
    setIndex,
    tracks,
    playing,
  } = useMicrobeats()

  return (
    <Button
      {...props}
      title={`Sort ${
        chronological ? 'by Newest' : 'Chronologically'
      }`}
      onClick={e => {
        setSort(!chronological)
        if (playing) setIndex(tracks.length - 1 - index)
      }}>
      {chronological ? <Down /> : <Up />}
    </Button>
  )
}
