import styled from '@emotion/styled'
import ds from '../../../design/DesignSystem'

const MenuBody = styled.div`
  width: 100%;
  height: auto;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  padding: 1% 15%;
  @media (max-width: ${ds.bp('m')}) {
    padding: 1% 10%;
  }
  @media (max-width: ${ds.bp('s')}) {
    padding: 1% 5%;
  }
`

export default MenuBody
