export default {
  initialColorMode: 'dark',
  useCustomProperties: true,
  fonts: {
    body: '"Roboto Mono", Menlo, monospace',
    heading: '"Roboto Mono", Menlo, monospace',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
  colors: {
    text: 'white',
    background: 'black',
    primary: 'hsl(180, 100%, 60%)',
    muted: 'hsla(220, 100%, 80%, .0625)',
    modes: {
      lite: {
        text: 'black',
        background: 'white',
        primary: 'hsl(220, 100%, 50%)',
        muted: 'hsla(220, 100%, 80%, .0625)',
      },
      orange: {
        text: 'hsl(40, 100%, 60%)',
        background: 'black',
        primary: 'hsl(40, 100%, 80%)',
        muted: 'hsla(40, 100%, 80%, .0625)',
      },
      green: {
        text: 'hsl(130, 100%, 60%)',
        background: 'black',
        primary: 'hsl(130, 100%, 80%)',
        muted: 'hsla(130, 100%, 80%, .0625)',
      },
      cyan: {
        text: 'hsl(160, 100%, 60%)',
        background: 'black',
        primary: 'hsl(160, 100%, 80%)',
        muted: 'hsla(160, 100%, 80%, .0625)',
      },
      pink: {
        text: 'hsl(340, 100%, 60%)',
        background: 'black',
        primary: 'hsl(340, 100%, 80%)',
        muted: 'hsla(340, 100%, 80%, .0625)',
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: [ 0, 1 ],
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      fontSize: 'inherit',
    },
    h2: {
      fontSize: 'inherit',
    },
    h3: {
      fontSize: 'inherit',
    },
    a: {
      color: 'primary',
    },
    navlink: {
      color: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  },
}
