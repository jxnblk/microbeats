import React from 'react'

const previous = state => ({
  index: state.index > 0 ? state.index - 1 : null
})

const next = state => ({
  index: state.index + 1
})

const withAudio = Component => {
  class Audio extends React.Component {
    constructor () {
      super()

      this.play = () => {
        if (!this.props.track) {
          this.props.update({ index: 0, playing: true }, () => {
            console.log('cb')
            this.audio.play()
          })
        } else {
          this.audio.play()
          this.props.update({ playing: true })
        }
      }

      this.pause = () => {
        this.audio.pause()
        this.props.update({ playing: false })
      }

      this.playPause = () => {
        if (this.props.playing) {
          this.pause()
        } else {
          this.play()
        }
      }

      this.previous = () => {
        this.props.update(previous)
      }

      this.next = () => {
        this.props.update(next)
      }

      this.seek = n => {
        const { duration } = this.audio
        this.audio.currentTime = n * duration
      }

      this.onEnd = () => {
        this.next()
      }

      this.onMetadata = () => {
        const { duration } = this.audio
        this.props.update({ duration })
      }

      this.onTimeUpdate = () => {
        const { currentTime } = this.audio
        this.props.update({ currentTime })
      }
    }

    componentDidMount () {
      if (typeof document === 'undefined') return
      this.audio = document.createElement('audio')
      this.audio.src = this.props.track.url
      this.audio.addEventListener('ended', this.onEnd)
      this.audio.addEventListener('loadedmetadata', this.onMetadata)
      this.audio.addEventListener('timeupdate', this.onTimeUpdate)
    }

    componentWillUnmount () {
      this.audio.removeEventListener('ended', this.onEnd)
      this.audio.removeEventListener('loadedmetadata', this.onMetadata)
      this.audio.removeEventListener('timeupdate', this.onTimeUpdate)
      this.audio = null
    }

    componentWillReceiveProps (next) {
      if (!this.audio) return
      if (next.track && next.track !== this.props.track) {
        this.audio.src = next.track.url
        this.play()
      }
    }

    render () {
      return (
        <Component
          {...this.props}
          audio={this.audio}
          play={this.play}
          pause={this.pause}
          playPause={this.playPause}
          previous={this.previous}
          next={this.next}
          seek={this.seek}
        />
      )
    }
  }

  return Audio
}

export default withAudio
