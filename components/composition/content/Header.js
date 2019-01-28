import styled from '@emotion/styled'
import ds from '../../../design/DesignSystem'

const HeaderStyle = styled.div`
  width: 100%;
  height: 200px;
  background: ${ds.color('dark')};
  box-shadow: 0px 1px 3px ${ds.color('dark')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  align-self: center;
`

const Image = styled.img`
  width: 50%;
  position: absolute;
`

const Header = () => (
  <HeaderStyle>
    <Image src='/static/logo/deem_wide_white.svg' />
  </HeaderStyle>
)

export default Header
