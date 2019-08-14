import { useEffect, useState } from 'react'

export default () => {
  const [ audio, setAudio ] = useState(null)
  const [ time, setTime ] = useState(0)
  const [ duration, setDuration ] = useState(0)

  useEffect(() => {

    const a = document.createElement('audio')
    const handleTimeUpdate = e => {
      if (!a) return console.log('wut', a)
      setTime(a.currentTime)
    }
    const handleMetadata = e => {
      setDuration(a.duration)
    }
    a.addEventListener('timeupdate', handleTimeUpdate)
    a.addEventListener('loadedmetadata', handleMetadata)
    setAudio(a)
    return () => {
      a.removeEventListener('timeupdate', handleTimeUpdate)
      a.removeEventListener('loadedmetadata', handleMetadata)
      setAudio(null)
    }
  }, [])

  return {
    audio,
    time,
    duration,
  }
}
