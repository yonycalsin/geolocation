import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
