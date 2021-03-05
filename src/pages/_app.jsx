/* eslint-disable no-use-before-define */
import React from 'react'
import { Layout } from '../components'
import GlobalStyles from '../styles/globals'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyles />
    </Layout>
  )
}

export default MyApp
