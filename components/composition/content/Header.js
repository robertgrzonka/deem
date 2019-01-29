import styled from '@emotion/styled'
import ds from '../../../design/DesignSystem'

const HeaderStyle = styled.div`
  width: 100%;
  min-height: 200px;
  background: ${ds.color('dark')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  align-self: center;
  @media (max-width: ${ds.bp('m')}) {
    max-height: 25%;
  }
  @media (max-width: ${ds.bp('s')}) {
    max-height: 30%;
  }
`

const Image = styled.img`
  width: 30%;
  overflow: hidden;
  @media (max-width: ${ds.bp('m')}) {
    width: 50%;
  }
  @media (max-width: ${ds.bp('s')}) {
    max-width: 90%;
  }
`

const Header = () => (
  <HeaderStyle>
    <Image src='/static/logo/deem_wide_white.svg' />
  </HeaderStyle>
)

export default Header
