const test = [{ black: '#000' }, { white: '#fff' }]
console.log(test)

const getKeys = test.map(key =>
  <p>{Object.keys(key)}: {Object.values(key)}</p>
)

export const Paragraphs = <div>{getKeys}</div>
