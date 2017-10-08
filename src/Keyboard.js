import React from 'react'

class Keyboard extends React.Component {
  constructor () {
    super()

    this.handleKeydown = e => {
      if (document.activeElement.tagName !== 'BODY') return
      if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return
      e.preventDefault()
      const { playPause, previous, next } = this.props

      switch (e.key) {
        case ' ':
          playPause()
          break
        case 'k':
        case 'ArrowLeft':
          previous()
          break
        case 'j':
        case 'ArrowRight':
          next()
          break
        // default:
        // console.log(e.key, e.code, e)
      }
    }
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this.handleKeydown)
  }

  render () {
    return false
  }
}

export default Keyboard
