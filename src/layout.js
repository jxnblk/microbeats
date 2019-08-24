/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'
import Head from './head'
import Controls from './controls'
import Title from './title'
import Progress from './progress'
import Sort from './sort'
import { Button, Dot, Up, Down } from './icons'

const NavLink = props =>
  <Link
    {...props}
    sx={{
      variant: 'styles.navlink',
      display: 'block',
    }}
  />

const modes = [
  'dark',
  'orange',
  'green',
  'cyan',
  'pink',
  'lite',
]

export default ({
  center,
  ...props
}) => {
  const [ mode, setMode ] = useColorMode()
  const cycleMode = e => {
    const n = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <Styled.root
      sx={{
        display: 'grid',
        gridTemplateColumns: [
          null,
          null,
          '1fr 1fr'
        ]
      }}>
      <Head {...props} />
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          }
        }}
      />
      <header
        sx={{
          position: 'sticky',
          top: 0,
          alignSelf: 'flex-start',
          bg: 'background',
          p: 3,
        }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <NavLink to='/'>microbeats</NavLink>
          <div sx={{ mx: 'auto' }} />
          <NavLink to='/about'>
            about
          </NavLink>
          <div sx={{ mx: 2 }} />
          <Sort />
          <div sx={{ mx: 2 }} />
          <Button
            title='Change Color Mode'
            onClick={cycleMode}>
            <Dot />
          </Button>
        </div>
        <div sx={{ my: [ 2, 4 ] }}>
          <Controls />
        </div>
        <Title />
        <Progress />
      </header>
      <main
        sx={{
          p: 3,
          maxWidth: 768,
          minHeight: '100vh',
        }}>
        {props.children}
      </main>
      <footer
        sx={{
          px: 3,
          py: 4,
        }}>
        © 2011–2019 Brent Jackson
      </footer>
    </Styled.root>
  )
}

  /*
    <footer
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 3,
        py: 5,
      }}>
      <NavLink to='/'>
        microbeats
      </NavLink>
      <NavLink to='/about'>
        about
      </NavLink>
    </footer>
  */
