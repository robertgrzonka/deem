import { Global, css } from '@emotion/core'
import ds from '../../../design/DesignSystem'

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
        line-height: ${ds.get('type.fontWeight.paragraph')};
        font-family: ${ds.get('type.fontFamily.system')};
        color: ${ds.brand('dark')};
      }
      p {
        font-size: ${ds.fontSize('base')};
        font-weight: ${ds.get('type.fontWeight.normal')};
        line-height: ${ds.get('type.fontWeight.paragraph')};
        font-family: ${ds.get('type.fontFamily.system')};
        letter-spacing: ${ds.get('type.letterSpacing.normal')};
        color: ${ds.brand('dark')};
      }
      a {
        color: ${ds.color('dark', 'lighter')};
        text-decoration: none;
        font-size: ${ds.fontSize('m')};
        font-weight: ${ds.get('type.fontWeight.bold')};
        font-variant-caps: all-small-caps;
        transition: all 0.3s;
      }
      a:hover {
        color: ${ds.color('primary', 'dark')};
        text-decoration: none;
        background-color: ${ds.color('bright')};
        border-radius: 5px;
      }

      select {
        background: ${ds.color('bright', 'darker')};
        color: ${ds.color('dark')};
        padding: 5px;
        margin: 10px;
        font-size: ${ds.fontSize('s')};
        text-align: center;
      }
      h1, h2, h3, h4, h5, h6 {
        letter-spacing: ${ds.get('type.letterSpacing.big')};
        font-weight: ${ds.get('type.fontWeight.headings')};
        color: ${ds.color('dark', 'light')};
        margin: 2rem 0rem;
      }
      `}
  />

export default GlobalStyles
