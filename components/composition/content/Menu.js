import ds from '../../../design/DesignSystem'
import styled from '@emotion/styled'

const MenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: all 0.4s;
  text-align: justify;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  overflow: scroll;
  @media (max-width: ${ds.bp('s')}) {
    width: 100vw;
  }
`

const Menu = props => (
  <MenuWrapper>
    {props.children}
  </MenuWrapper>
)

export default Menu
