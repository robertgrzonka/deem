
const hyperlinks = {
  home: {
    id: 'home',
    title: 'Home'
  },
  'theguys': {
    id: 'the-guys',
    title: 'theGuys'
  },
  about: {
    id: 'about-us',
    title: 'About us'
  }
}

const build = options => {
  for (const option in options) {
    if (typeof option !== 'object') {
      throw new Error(`
        option is not an Object: 
        ${option}: typeof ${typeof option}
        `)
    } else {
      const values = Object.values(option)
      return `<Hyperlink id="${values[0]}" title="${values[1]}" />`
    }
  }
}

build(hyperlinks)

const buildLink = (name, title) => {
  return `<Hyperlink id="${name.toLowerCase()}" title="${title.charAt(0).toUpperCase() + title.slice(1)}" />`
}

buildLink('robert', 'krol')
