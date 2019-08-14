/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  useState,
  createContext,
  useContext,
} from 'react'
import useAudio from './use-audio'
import useKeyboard from './use-keyboard'
import data from './tracks.json'

const Context = createContext({})

const reverse = arr => [...arr].reverse()

const App = props => {
  const [ chronological, setSort ] = useState(0)
  const tracks = chronological
    ? data
    : reverse(data)
  const audio = useAudio(tracks)
  useKeyboard(audio)

  const context = {
    tracks,
    ...audio,
    chronological,
    setSort,
  }

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  )
}

export const useMicrobeats = () => useContext(Context)

export const wrapRootElement = ({ element, props }) =>
  <App {...props}>
    {element}
  </App>
