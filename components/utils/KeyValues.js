const array = [{ black: '#000' }, { white: '#fff' }]
console.log(array)

const getItems = array.map(item =>
  <p>{Object.keys(item)}: {Object.values(item)}</p>
)

export const Paragraphs = <div>{getItems}</div>
