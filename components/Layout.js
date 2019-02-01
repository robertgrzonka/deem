import Head from 'next/head'
import Body from './composition/structure/Body'
import Global from './composition/structure/Global'
import Menu from './composition/Menu/Menu'
import MenuBody from './composition/Menu/MenuBody'
import Header from './composition/Menu/Header'

const Layout = (props) => (
  <>
    <Head>
      <title>deem™ typography design system</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' charSet='utf-8' />
      <link href='https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500,600,700|Cormorant+SC:300' rel='stylesheet' />
    </Head>
    <Global />
    <Body>
      <Menu>
        <Header />
        <MenuBody>
          {props.children}
        </MenuBody>
      </Menu>
    </Body>
  </>
)

export default Layout
