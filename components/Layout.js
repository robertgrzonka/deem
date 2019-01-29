import Head from 'next/head'
import Body from './composition/structure/Body'
import Global from './composition/structure/Global'

const Layout = (props) => (
  <>
    <Head>
      <title>deem™ typography design system</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' charSet='utf-8' />
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.6.3/css/all.css' integrity='sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/' crossOrigin='anonymous' />
    </Head>
    <Global />
    <Body {...props}>
      {props.children}
    </Body>
  </>
)

export default Layout
