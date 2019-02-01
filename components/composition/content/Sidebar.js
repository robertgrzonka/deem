import styled from '@emotion/styled'
import ds from '../../../design/DesignSystem'
import Hyperlink from '../../utils/Hyperlink'
import Button from '../../utils/Button'
import { Separator } from '../../utils/Separator'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 25%;
  height: 100vh;
  background: ${ds.color('bright', 'dark')};
  border-right: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  @media (max-width: ${ds.bp('s')}) {
    display: none;
  }
`

const Label = styled.label`
  text-align: center;
  width: 100%;
`

export const Form = (props) => {
  const options = props.options
  const name = props.name
  const listItems = options.map(option =>
    <option key={option.toString()}>
      {option}
    </option>
  )
  return (
    <div className='menu'>
      <Label htmlFor={name} id={name}>
        {name}
        <select>
          {listItems}
        </select>
      </Label>
    </div>
  )
}

export const Sidebar = props => (
  <Wrapper>
    <Hyperlink id='home' title='Home' />
    <Hyperlink id='the-guys' title='theGuys™' />
    <Hyperlink id='about-us' title='About us' />
    <Separator />
    <div style={{ justifyContent: 'space-around' }}>
      {props.children}
    </div>
    <Separator />
    <Button color={ds.color('primary', 'base')}>
      Add paragraph
    </Button>
  </Wrapper>
)
