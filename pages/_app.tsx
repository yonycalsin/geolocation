import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { mainTheme } from '~/theme/main-theme'

import '~/assets/css/fonts.css'

function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ChakraProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
