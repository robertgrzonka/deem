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
        font-family: ${ds.get('type.fontFamily.system')};
        color: ${ds.brand('dark')};
      }
      p {
        font-size: ${ds.fontSize('s')};
        font-weight: ${ds.get('type.fontWeight.light')};
        line-height: ${ds.get('type.lineHeight.paragraph')};
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
        text-align: center;
        font-size: ${ds.fontSize('xs')};
        display: inline-block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: 0.375rem 1.75rem 0.375rem 0.75rem;
        line-height: 1.5;
        margin: 0.75rem 0rem;
        color: ${ds.color('dark', 'light')};
        vertical-align: middle;
        background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
        background-color: white;
        border: 1px solid ${ds.color('bright', 'darker')};
        border-radius: 0.25rem;
        appearance: none;
      }
      
      h1, h2, h3, h4, h5, h6 {
        letter-spacing: ${ds.get('type.letterSpacing.headings')};
        font-weight: ${ds.get('type.fontWeight.headings')};
        color: ${ds.color('dark', 'base')};
        margin: 1rem 0rem 1.5rem 0rem;
      }
      `}
  />

export default GlobalStyles
