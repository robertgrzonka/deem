import styled from '@emotion/styled'
import ds from '../../../design/DesignSystem'

const MenuBody = styled.div`
  padding: 5% 15%;
  width: 100%;
  height: auto;
  overflow: scroll;
  @media (max-width: ${ds.bp('s')}) {
    padding: 50px;
  }
`

export default MenuBody
