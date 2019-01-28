import styled from '@emotion/styled'
import Hyperlink from '../../utils/Hyperlink'
import ds from '../../../design/DesignSystem'
import Button from '../../utils/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 25%;
  height: 100vh;
  background: #f1f3f5;
  border-right: 1px solid rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  @media (max-width: ${ds.bp('s')}px) {
    display: none;
  }
`

/** TODO: class contains hiding button (for small @media) */

const Label = styled.label`
  text-align: left;
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
    <div className={'menu'}>
      <Label htmlFor={name} id={name}>
        {name}
        <select className='custom-select'>
          {listItems}
        </select>
      </Label>
    </div>
  )
}

export const Sidebar = props => (
  <Wrapper {...props}>
    <Hyperlink href='about' title='About' />
    <hr />
    <div style={{ justifyContent: 'space-around' }}>
      {props.children}
    </div>
    <hr />
    <Button color='mediumturquoise'>
      Add paragraph
    </Button>
  </Wrapper>
)
