import { useEffect } from 'react'

const keys = {
  space: 32,
  j: 74,
  k: 75,
  left: 37,
  right: 39,
}

export default ({
  playPause,
  previous,
  next,
}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return
      switch (e.keyCode) {
        case keys.space:
          e.preventDefault()
          playPause()
          break
        case keys.j:
        case keys.right:
          next()
          break
        case keys.k:
        case keys.left:
          previous()
          break
        default:
          break
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [playPause, previous, next])
}
