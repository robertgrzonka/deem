// Color Palette
const Colors = {
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

const sizes = [ 12, 14, 16, 18, 20, 22, 24, 28, 30 ]
const weights = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]

// Future functionality — user enter rgb or hex and it changes paragraphs
function buildColor (name, value) { // eslint-disable-line
  Colors[`${name}`] = value
}

const colorOption = Object.keys(Colors)
colorOption.forEach(value => {
  const colorPicker = document.querySelector('#color')
  let option = document.createElement('option')
  option.value = value
  option.innerHTML = value
  return colorPicker.appendChild(option)
})

sizes.forEach(value => {
  const sizePicker = document.querySelector('#fontSize')
  let option = document.createElement('option')
  option.value = `${value}px`
  option.innerHTML = `${value}px`
  return sizePicker.appendChild(option)
})

weights.forEach(value => {
  const weightPicker = document.querySelector('#fontWeight')
  let option = document.createElement('option')
  option.value = value
  option.innerHTML = value
  return weightPicker.appendChild(option)
})

const selectors = document.querySelectorAll('select')
selectors.forEach(selector => {
  selector.addEventListener('change', () => {
    let id = selector.id
    const paragraphs = document.querySelectorAll('.paragraph')
    paragraphs.forEach(paragraph => {
      paragraph.style.setProperty(id, selector.value)
    })
  })
})

function addParagraph () { // eslint-disable-line
  const p = document.createElement('p')
  p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Id neque aliquam vestibulum morbi blandit cursus risus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Tristique sollicitudin nibh sit amet. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Nulla facilisi nullam vehicula ipsum a.'
  p.contentEditable = true
  const textField = document.querySelector('#text-field')
  textField.appendChild(p).classList.add('paragraph')

  const removeParagraph = document.createElement('a')
  removeParagraph.classList.add('remove-x')
  removeParagraph.innerText = 'Remove me!'
  removeParagraph.setAttribute('href', '#')

  p.parentNode.insertBefore(removeParagraph, p.nextSibling)
  removeParagraph.addEventListener('click', () => {
    p.remove()
    removeParagraph.remove()
  })
}
