// Color Palette
const colorPalette = {
  black: '#000000',
  pink: '#f03278',
  gray: '#343a40',
  white: '#f8f9fa',
  red: '#560818',
  blue: '#1E90FF',
  green: '#64df83',
  orange: '#fd7e14',
  yellow: '#ffc107',
  beige: '#F5F5DC',
  silver: '#708090',
  gold: '#FFD700',
  crimson: '#DC143C',
  lightred: '#CD5C5C',
  royalblue: '#4169E1',
  steelblue: '#4682B4',
  lightblue: '#00BFFF',
  cornflowerblue: '#6495ED',
  turquoise: '#40E0D0',
  darkturquoise: '#00CED1',
  cyan: '#00FFFF',
  darkcyan: '#008B8B',
  lightseagreen: '#20B2AA'
}

export const colorOptions = Object.keys(colorPalette)
colorOptions.forEach(color => {
  const colorPicker = document.querySelector('#color')
  let option = document.createElement('option')
  option.value = color
  option.innerHTML = color
  return colorPicker.appendChild(option)
})

const sizes = [ 'default', 12, 14, 16, 18, 20, 22, 24, 28, 30 ]
sizes.forEach(size => {
  const sizePicker = document.querySelector('#font-size')
  let option = document.createElement('option')
  option.value = `${size}px`
  option.innerHTML = size
  return sizePicker.appendChild(option)
})

const buildOptions = (selectorArray, id) => {
  selectorArray.forEach(value => {
    let selector = document.querySelector(`#${id}`)
    let option = document.createElement('option')
    option.value = value
    option.innerHTML = value
    return selector.appendChild(option)
  })
}

const weights = [ 'default', 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
buildOptions(weights, 'font-weight')

const fonts = [ 'default', 'Garamond, serif', 'Georgia, serif', '"Palatino Linotype", serif', '"Times New Roman", serif', 'Verdana, sans-serif', 'Arial, sans-serif', 'Helvetica, sans-serif', '"Comic Sans MS", sans-serif', 'Lato, sans-serif', 'Roboto, sans-serif', 'Montserrat, sans-serif', 'Open Sans, sans-serif', 'Courier New, monospace', 'Menlo, monospace', 'Monaco, monospace', 'Fira Mono, monospace' ]
buildOptions(fonts, 'font-family')

const selectors = document.querySelectorAll('select')
selectors.forEach(selector => {
  selector.addEventListener('change', () => {
    let cssAttr = selector.id
    let choosenValue = selector.value
    const paragraphs = document.querySelectorAll('.paragraph')
    paragraphs.forEach(paragraph => {
      if (cssAttr === 'color') {
        const colorMap = new Map(Object.entries(colorPalette))
        for (let color of colorMap) {
          if (choosenValue === color[0]) {
            paragraph.style.color = color[1]
            const userInput = document.querySelector('#user-color')
            userInput.setAttribute('placeholder', color[1])
          }
        }
      } else {
        paragraph.style.setProperty(cssAttr, choosenValue)
      }
    })
  })
})

const options = (element, { color = 'inherit', fontSize = '1rem', fontWeight = 'normal' }) => { // eslint-disable-line
  // Put a node as an element
  element.style.color = color
  element.style.fontSize = fontSize
  element.style.fontWeight = fontWeight
}

const buttonParagraph = document.querySelector('#add-paragraph')
buttonParagraph.addEventListener('click', (textField) => {
  textField = document.querySelector('#text-field')
  if (textField.hasChildNodes && textField.childNodes.length === 1) {
    let paragraph = document.querySelector('.paragraph')
    let clone = paragraph.cloneNode(true)
    textField.appendChild(clone)
  } else if (textField.childNodes.length > 1) {
    let paragraphs = document.querySelectorAll('.paragraph')
    let clone = paragraphs[0].cloneNode(true)
    textField.appendChild(clone)
  } else {
    const p = document.createElement('p')
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Id neque aliquam vestibulum morbi blandit cursus risus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Tristique sollicitudin nibh sit amet. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Nulla facilisi nullam vehicula ipsum a.'
    p.contentEditable = true
    textField.appendChild(p).classList.add('paragraph')
  }
  let removeParagraph = document.createElement('a')
  removeParagraph.classList.add('remove-x')
  removeParagraph.innerText = 'Delete this'
  let paragraphs = document.querySelectorAll('.paragraph')
  paragraphs.forEach(p => {
    p.parentNode.insertBefore(removeParagraph, p)
    removeParagraph.addEventListener('click', () => {
      removeParagraph.nextSibling.remove()
      removeParagraph.remove()
    })
  })
})

// Change color by writing color value in HEX
const userInput = document.querySelector('#user-color')
userInput.addEventListener('change', () => {
  if (userInput.value !== null || undefined) {
    let whichColor = document.querySelector('#color')
    let paragraphs = document.querySelectorAll('.paragraph')
    let newColor = userInput.value
    whichColor.value = ' '
    paragraphs.forEach(paragraph => {
      paragraph.style.color = newColor
    })
  }
})
