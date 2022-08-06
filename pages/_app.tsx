import React, { useState, useEffect } from 'react';
import { Layout } from '../components
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>

    </Layout>
    <Component {...pageProps} />

  )
}

export default MyApp
