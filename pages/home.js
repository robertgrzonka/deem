import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { Header, Paragraph } from '../components/utils/Sandbox'
import { Info, Mark } from '../components/utils/Blockquote'

const Link = styled.a`
  font-size: 1rem;
  color: crimson;
  font-family: inherit;
`

export default () => (
  <Layout>
    <Info 
      color='crimson' 
      header='Warning!'>Please keep in mind that project is deprecated and currently no longer maintained. If you'd like to contribute <Mark>deem</Mark> feel free to <Link href='https://github.com/robertgrzonka/deem'>check project on GitHub</Link>.
    </Info>
    <Header initialHtml='Czy to <em>pierwsza</em> notka?' />
    <Paragraph initialHtml='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Interdum consectetur libero id faucibus nisl tincidunt eget. Accumsan tortor posuere ac ut consequat semper. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nunc lobortis mattis aliquam faucibus purus in massa.' />
    <Paragraph initialHtml='Fringilla ut morbi tincidunt augue interdum. Porta nibh venenatis cras sed. Et leo duis ut diam quam nulla porttitor massa id. Porttitor eget dolor morbi non arcu. Egestas egestas fringilla phasellus faucibus scelerisque. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Dictum fusce ut placerat orci. Sed enim ut sem viverra aliquet eget sit. Dapibus ultrices in iaculis nunc sed augue lacus. Sit amet justo donec enim diam vulputate.' />
  </Layout>
)
