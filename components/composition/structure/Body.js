import styled from '@emotion/styled'
import { Sidebar, Form } from '../content/Sidebar'
import ds from '../../../design/DesignSystem'
import Menu from '../content/Menu'
// import { Paragraphs } from '../../utils/KeyValues'

const BodyStyle = styled.div`
  display: flex;
  flex-direction: row;
`

const Body = (props) => {
  return (
    <BodyStyle {...props}>
      <Sidebar>
        {/* {Paragraphs} */}
        <Form options={ds.get('type.listOptions.colors')} name='Colors' />
        <Form options={ds.get('type.listOptions.fontWeights')} name='Font-weights' />
        <Form options={ds.get('type.listOptions.fontSizes')} name='Font-sizes' />
      </Sidebar>
      <Menu />
    </BodyStyle>
  )
}

export default Body
