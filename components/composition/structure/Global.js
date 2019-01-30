import { Global, css } from '@emotion/core'
import ds from '../../../design/DesignSystem'

// This file overwrites Bootstrap styles which are importex with plugin

const GlobalStyles = () =>
  <Global styles={css`
      * {
        box-sizing: border-box;
      }
      body, html {
        margin: 0 auto;
        padding: 0;
        max-width: 100vw;
        min-height: 100vh;
        background: white;        
        font-family: ${ds.get('type.fontFamily.system')};
        color: ${ds.brand('dark')};
      }
      p {
        font-size: ${ds.fontSize('s')};
        font-weight: ${ds.get('type.fontWeight.light')};
        line-height: ${ds.get('type.fontWeight.paragraph')};
        letter-spacing: ${ds.get('type.letterSpacing.normal')};
        color: ${ds.brand('dark')};
      }
      a {
        font-size: ${ds.fontSize('base')};
        color: ${ds.color('dark', 'light')};
        font-weight: ${ds.get('type.fontWeight.bold')};
        font-family: ${ds.get('type.fontFamily.serif')};
        font-variant: small-caps;
        text-transform: uppercase;
        text-decoration: none;
        background-color: unset;
        padding: 2px;
        border-radius: 2px;
        transition: all 0.4s;
      }
      a:hover {
        color: ${ds.color('dark', 'base')};
        background-color: ${ds.color('bright', 'darker')};
        text-decoration: none;
      }

      select {
        padding: 0px;
        margin: 5px;
        text-align: center;
        font-size: ${ds.fontSize('xs')};
      }
      
      h1, h2, h3, h4, h5, h6 {
        letter-spacing: ${ds.get('type.letterSpacing.big')};
        font-weight: ${ds.get('type.fontWeight.headings')};
        color: ${ds.color('dark', 'base')};
        margin: 2rem 0rem;
      }
      `}
  />

export default GlobalStyles
