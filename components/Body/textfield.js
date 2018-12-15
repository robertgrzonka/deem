import Container from './container'
import Paragraph from './paragraph'

const TextField = ({ children }) => (
  <Container>
    <Paragraph />
    <Paragraph />
    {children}
  </Container>
)

export default TextField
