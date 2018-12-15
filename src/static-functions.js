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

const sizes = [12, 14, 16, 18, 20, 22, 24, 28, 30]
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

// Add a new color if needed
function buildColor (name, value) { // eslint-disable-line
  Colors[`${name}`] = value
}

const colorPicker = document.querySelector('select#color-picker')
const buildColorOption = Object.keys(Colors)
const buildOptions = buildColorOption.forEach(value => { // eslint-disable-line
  const option = document.createElement('option')
  option.value = value
  option.innerHTML = value
  return colorPicker.appendChild(option)
})

const changeColor = colorPicker.addEventListener('change', () => { // eslint-disable-line
  const p = document.querySelectorAll('.paragraph')
  const pickedColor = Object.getOwnPropertyDescriptor(Colors, colorPicker.value)
  p.forEach(paragraph => {
    paragraph.style.color = pickedColor.value
  })
})

const sizePicker = document.querySelector('select#size-picker')
const buildSizeOptions = sizes.forEach(value => { // eslint-disable-line
  const option = document.createElement('option')
  option.value = `${value}px`
  option.innerHTML = `${value}px`
  return sizePicker.appendChild(option)
})

const changeSize = sizePicker.addEventListener('change', () => { // eslint-disable-line
  const p = document.querySelectorAll('.paragraph')
  p.forEach(paragraph => {
    paragraph.style.fontSize = sizePicker.value
  })
})

const weightPicker = document.querySelector('select#weight-picker')
const buildWeightOptions = weights.forEach(value => { // eslint-disable-line
  const option = document.createElement('option')
  option.value = value
  option.innerHTML = value
  return weightPicker.appendChild(option)
})

const changeWeight = weightPicker.addEventListener('change', () => { // eslint-disable-line
  const p = document.querySelectorAll('.paragraph')
  p.forEach(paragraph => {
    paragraph.style.fontWeight = weightPicker.value
  })
})
