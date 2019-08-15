/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'
import Controls from './controls'
import Progress from './progress'

const NavLink = props =>
  <Link
    {...props}
    sx={{
      variant: 'styles.navlink',
      display: 'block',
    }}
  />

export default ({
  ...props
}) =>
  <Styled.root
    sx={{
      display: 'grid',
      gridTemplateColumns: [
        'auto',
        'minmax(256px, 1fr) 2fr',
      ],
      minHeight: '100vh',
    }}>
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
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        maxHeight: '100vh',
      }}>
      <NavLink to='/'>microbeats</NavLink>
      <div
        sx={{
          my: [ 2, 4 ]
        }}>
        <Controls />
      </div>
      <div sx={{ my: 'auto' }} />
      <Styled.h1>beats created in under an hour</Styled.h1>
      <NavLink to='/about' sx={{ mb: 3 }}>
        about
      </NavLink>
    </header>
    <main
      sx={{
      }}>
      <div sx={{ p: 3 }}>
        <Progress />
      </div>
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
