import Head from 'next/head'

const Page = ({ children }) => (
  <Head>
    <title name='Typography Design System' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO' crossorigin='anonymous' />
    <style jsx global>{`
    body {
      font-size: 16px;
      font-weight: 300;
      line-height: 1.4;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      letter-spacing: 0.0625em;
    }

    div.container-fluid {
      background-color: #343a40;
      -webkit-box-shadow: 0px 0px 3px #343a40;
      box-shadow: 0px 0px 3px #343a40;
      }

    .paragraph {
      text-indent: 2em;
      text-align: justify;
      }

    .footer {
      color: #f8f9fa;
      font-weight: 100;
      font-variant: small-caps;
      text-transform: lowercase;
      text-shadow: 1px 1px 2px #000000;
      }
      `}</style>
  </Head>
)

export default Page
