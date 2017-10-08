import React from 'react'

const Style = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: base + css
    }}
  />
)

const base = `*{box-sizing:border-box}
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.25;
  margin: 0;
  color: black;
  background-color: white;
}`

Style.defaultProps = {
  css: ''
}

export default Style
