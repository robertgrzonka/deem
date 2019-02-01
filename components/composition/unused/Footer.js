/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ds from '../../../design/DesignSystem'
import Hyperlink from '../../Hyperlink'

const FooterStyle = css`
  font-size: ${ds.fontSize('base')};
  background: ${ds.color('dark')};
  color: ${ds.color('bright')};
  box-shadow: 0px -1px 3px ${ds.color('dark')};
  width: 100%;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  height: 150px;
  @media (max-width: ${ds.bp('s')}) {
    width: 100%;
  }
`

const Footer = () => (
  <div css={FooterStyle}>
    <Hyperlink href='https://theguys.design' title='robertgrzonka' />{' '} © 2018
  </div>
)

export default Footer
