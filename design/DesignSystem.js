import DesignSystem from 'design-system-utils'
import colorPalette from './ColorPalette'

const fontFamily = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace'
}

const transitions = {
  duration: '300ms',
  timing: 'cubic-bezier(0.77, 0, 0.175, 1)'
}

const palette = colorPalette

const options = {
  colors: ['default', 'black', 'white', 'green'],
  fontWeights: [ 'default', 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
  fontSizes: [ 'default', 12, 14, 16, 18, 20, 22, 24, 28, 30 ]
}

export const designSystem = {
  type: {
    baseFontSize: '1',

    sizes: {
      xs: '0.8',
      s: '0.9',
      base: '1',
      m: '1.1',
      l: '1.2',
      xl: '1.3',
      xxl: '1.4'
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.mono,

    lineHeight: {
      normal: 1.3,
      paragraph: 1.45,
      headings: 1.6
    },

    fontWeight: {
      light: 300,
      normal: 400,
      bold: 500,
      headings: 700
    },

    letterSpacing: {
      small: '0.03rem',
      normal: '0.0625rem',
      big: '0.15rem'
    },

    listOptions: options
  },

  colors: {
    colorPalette: palette,

    brand: {
      dark: palette.dark,
      primary: palette.primary,
      secondary: palette.secondary,
      background: {
        bright: palette.background.base,
        dark: palette.background.dark
      }
    }
  },

  breakpoints: {
    xs: 600,
    s: 850,
    m: 1050,
    l: 1250
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: '0.3em',
    scale: [0, 8, 16, 24, 32, 40]
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12
    }
  },

  transition: {
    default: {
      duration: transitions.duration,
      timing: transitions.timing,
      transition: `all ${transitions.duration} ${transitions.timing}`
    }
  },

  borderRadius: '0.35rem'
}

export default new DesignSystem(designSystem, {
  fontSizeUnit: 'rem'
})
