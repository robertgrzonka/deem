import ds from '../../../design/DesignSystem'
import styled from '@emotion/styled'

const Menu = styled.div`
  width: 100%;
  height: 100vh;
  transition: all 0.4s;
  text-indent: 2rem;
  text-align: justify;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${ds.bp('s')}) {
    width: 100vw;
  }
`

export default Menu
