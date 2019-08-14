import React, { useState } from 'react'
import tracks from '../tracks.json'
import useAudio from '../use-audio'

// todo: move state and audio to wrapRoot
// {format(track.date, 'MMM D, YYYY')}

export default props => {
  const [ index, setIndex ] = useState(0)
  const { audio, time, duration } = useAudio()

  return (
    <div>
      <pre>microbeats</pre>
      <h1>{tracks.length} Tracks</h1>
      <pre>microbeats time: {time} {time}/{duration}</pre>
      <ul>
        {tracks.map((track, i) => (
          <li key={track.id}>
            {i === index && '***'}
            {track.title} | {track.date}
            <button
              onClick={e => {
                audio.src = track.url
              }}>
              play
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
