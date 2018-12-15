import Header from './header'
import Alert from './alert'
import Selectors from './selectors'
import TextField from './textfield'

const Body = ({ children }) => (
  <div>
    <Header />
    <Alert />
    <Selectors />
    <TextField />
    {children}
  </div>
)

export default Body
