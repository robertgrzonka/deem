import styled from '@emotion/styled'
import { Sidebar } from '../content/Sidebar'
import { MiniSidebar } from '../content/MiniSidebar'
import Menu from '../content/Menu'
import { Options } from '../content/SidebarLinks'

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
      <MiniSidebar />
      <Menu>
        {props.children}
      </Menu>
    </BodyStyle>
  )
}

export default Body
