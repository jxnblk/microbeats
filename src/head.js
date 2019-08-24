/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

export default props => {
  const title = [ 'microbeats', props.title ].filter(Boolean).join(' :: ')

  return (
    <Helmet htmlAttributes={{ lang: 'en-us' }}>
      <title>{title}</title>
      <meta name='description' content='Beats created in under an hour' />
      <link rel='icon' href='/icon.png' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='jxnblk' />
      <meta name='twitter:title' content='microbeats' />
      <meta name='twitter:description' content='Beats created in under an hour' />
      <meta name='twitter:image' content='https://microbeats.cc/card.png' />
    </Helmet>
  )
}
