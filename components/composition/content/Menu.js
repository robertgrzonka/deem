/** @jsx jsx */
import ds from '../../../design/DesignSystem'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import Header from './Header'
import Note from '../../../static/notes/first_note'

const mainStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 75vw;
  height: 100vh;
  @media (max-width: ${ds.bp('s')}px) {
    width: 100vw;
  }
`

const Editable = styled.div`
  width: 100%;
  height: auto;
  padding: 50px 100px;
  transition: all 0.4s;
  text-indent: 2rem;
  text-align: justify;
  &:hover {
    cursor: poiner;
  }
  @media (max-width: ${ds.bp('l')}px) {
    padding: 50px 100px;
  }
  @media (max-width: ${ds.bp('s')}px) {
    padding: 50px 75px;
  }
  @media (max-width: ${ds.bp('xs')}px) {
    padding: 30px;
  }
`

const Menu = () => {
  return (
    <div css={mainStyles}>
      <Header />
      <Editable>
        <Note />
      </Editable>
    </div>
  )
}

export default Menu
