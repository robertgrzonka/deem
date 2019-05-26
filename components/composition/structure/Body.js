import styled from '@emotion/styled'
import Menu from '../Menu/Menu'
import { Sidebar } from '../Sidebar/Sidebar'
import { Options } from '../Sidebar/SidebarLinks'

const BodyStyle = styled.div`
  display: flex;
  flex-direction: row;
`

const allLinks = [
  { name: 'Color', options: 'colors' },
  { name: 'Weight', options: 'fontWeights' },
  { name: 'Sizes', options: 'fontSizes' }
]

/**
 * @param {string[]} props
 * @param {string} props.children
*/

const Body = (props) => {
  return (
    <BodyStyle>
      <Sidebar>
        <Options options={allLinks} />
      </Sidebar>
      <Menu>
        {props.children}
      </Menu>
    </BodyStyle>
  )
}

export default Body
