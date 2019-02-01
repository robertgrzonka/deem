import styled from '@emotion/styled'
import ExampleHeader from '../components/utils/Sandbox'

const Wrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
`

const Note = () => (
  <Wrapper>
    <ExampleHeader />
  </Wrapper>
)

export default Note
