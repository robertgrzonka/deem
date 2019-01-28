/** Our testing Object */
const colors = {
  black: '#000',
  white: '#fff',
  dark: '#212B35',
  bright: '#F9FAFB'
}

/** Every /key:value/ will be assigned into Array */
const buildArrays = Object.entries(colors)
console.log(buildArrays) // { ["black", "#000"], {"white" : " #fff"}, ... }

/** In ../utils/components/KeyValues.js is a React solution */
const buildParagraphs = (object) => {
  let paragraphs = []
  for (const value in object) {
    paragraphs.push(value)
    console.log(`${value}: <p>${value}</p>`)
  }
  return paragraphs
}

buildParagraphs(colors)

/**  */
