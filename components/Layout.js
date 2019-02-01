import Head from 'next/head'
import Body from './composition/structure/Body'
import Global from './composition/structure/Global'
import Menu from './composition/content/Menu'
import MenuBody from './composition/content/MenuBody'
import Header from './composition/content/Header'

const Layout = (props) => (
  <>
    <Head>
      <title>deem™ typography design system</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' charSet='utf-8' />
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
