/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'

const NavLink = props =>
  <Link
    {...props}
    sx={{
      variant: 'styles.navlink',
    }}
  />

export default ({
  center,
  ...props
}) =>
  <Styled.root
    sx={{
      variant: center ? 'layout.container' : null,
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
        p: 3,
        alignItems: 'center',
        mb: 5,
      }}>
      <NavLink to='/'>microbeats</NavLink>
      <Styled.h1>beats created in under an hour</Styled.h1>
      <div sx={{ mx: 'auto' }} />
      <NavLink to='/about'>
        about
      </NavLink>
    </header>
    {props.children}
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
      <div>
        © 2011–2019 Brent Jackson
      </div>
    </footer>
  </Styled.root>
