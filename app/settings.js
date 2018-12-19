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
  yellow: '#ffc107'
}
const colorOption = Object.keys(colorPalette)
colorOption.forEach(color => {
  const colorPicker = document.querySelector('#color')
  let option = document.createElement('option')
  option.value = color
  option.innerHTML = color
  return colorPicker.appendChild(option)
})

const sizes = [ 12, 14, 16, 18, 20, 22, 24, 28, 30 ]
sizes.forEach(size => {
  const sizePicker = document.querySelector('#font-size')
  let option = document.createElement('option')
  option.value = `${size}px`
  option.innerHTML = `${size}px`
  return sizePicker.appendChild(option)
})

const weights = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
weights.forEach(weight => {
  const weightPicker = document.querySelector('#font-weight')
  let option = document.createElement('option')
  option.value = weight
  option.innerHTML = weight
  return weightPicker.appendChild(option)
})

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
          choosenValue === color[0] ? paragraph.style.color = color[1] : null // eslint-disable-line
        }
      } else {
        paragraph.style.setProperty(cssAttr, choosenValue)
      }
    })
  })
})

const options = (element, { color = 'inherit', fontSize = '1rem', fontWeight = 'normal' }) => {
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

// Future functionality: enter own rgb or hex
function buildColor (name, value) { // eslint-disable-line
  name ? colorPalette[`${name}`] = value : alert('Please enter name of your color') // eslint-disable-line
}
