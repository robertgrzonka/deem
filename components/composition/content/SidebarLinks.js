import ds from '../../../design/DesignSystem'
import { Form } from '../content/Sidebar'

/**
 * Add new link to the links list.
 * @param {string[]} list - actual array with items
 * @param {Object} newLink - Object containg name and inlineName of new item
 * @param {string} newLink.name - name of new item
 * @param {string} newLink.inlineName - inline name of new item
 */

export const addNewLink = (list, newLink) => {
  list.indexOf(newLink) >= 0
    ? list.push(newLink)
    : console.log(`${newLink.name} already exists in your array.`)
  console.log(list)
}

// ---

/**
 * Endpoint of creating link list.
 * @param {Object[string]} props
 */

export const Links = (props) => {
  const links = props.links
  const makeList = links.map(link =>
    <Form
      options={ds.get(`type.listOptions.${link.options}`)}
      name={link.name}
    />
  )
  return (
    <div>
      { makeList }
    </div>
  )
}
