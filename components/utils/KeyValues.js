const array = [{ black: '#000' }, { white: '#fff' }]
console.log(array)

const getItems = array.map(item =>
  <p>{Object.keys(items)}: {Object.values(items)}</p>
)

export const Paragraphs = <div>{getItems}</div>
