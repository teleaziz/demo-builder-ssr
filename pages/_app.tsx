import type { AppProps } from 'next/app'

import { builder, Builder } from '@builder.io/react'
import builderConfig from '@config/builder'

if (Builder.isServer) {
  try {
    // tricking whatever stripping vm2 to include it on server
    require('vm2');
  } catch(e) {
    console.error(e)
  }
}

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
