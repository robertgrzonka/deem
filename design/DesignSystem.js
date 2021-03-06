import DesignSystem from 'design-system-utils'
import colorPalette from './ColorPalette'

const fontFamily = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: '"Cormorant Garamond", "Cormorant SC", Georgia, "Times New Roman", Times, serif',
  mono: '"Fora Mono", "Fira Code", Menlo, Monaco, "Courier New", monospace'
}

const transitions = {
  duration: '300ms',
  timing: 'cubic-bezier(0.77, 0, 0.175, 1)'
}

const palette = colorPalette

const options = {
  colors: ['default', 'black', 'white', 'pink'],
  fontWeights: [ 'default', 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
  fontSizes: [ 'default', 12, 14, 16, 18, 20, 22, 24, 28, 30 ]
}

export const designSystem = {
  type: {
    baseFontSize: '18px',

    sizes: {
      xs: '12px',
      s: '15px',
      base: '18px',
      m: '24px',
      l: '30px',
      xl: '42px'
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.mono,

    lineHeight: {
      small: 1.3,
      normal: 1.45,
      paragraph: 1.45,
      headings: 1.7
    },

    letterSpacing: {
      small: '0.03rem',
      normal: '0.0625rem',
      paragraph: '0.0625rem',
      big: '0.15rem',
      headings: '0.15rem'
    },

    fontWeight: {
      ultralight: 100,
      light: 300,
      normal: 400,
      bold: 500,
      ultrabold: 900,
      headings: 700
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
      },
      link: {
        base: palette.link.base,
        over: palette.link.over
      }
    }
  },

  breakpoints: {
    xs: '600px',
    s: '850px',
    m: '1050px',
    l: '1350px'
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: '0.3rem',
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

export default new DesignSystem(designSystem)
