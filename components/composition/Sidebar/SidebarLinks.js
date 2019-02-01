import ds from '../../../design/DesignSystem'
import { Form } from './Sidebar'

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
 * Endpoint of creating options list.
 * @param {Object[string]} props
 */

export const Options = (props) => {
  const options = props.options
  const makeList = options.map(option =>
    <Form
      options={ds.get(`type.listOptions.${option.options}`)}
      name={option.name}
      key={option.name.toLowerCase()}
    />
  )
  return (
    <div>
      { makeList }
    </div>
  )
}
