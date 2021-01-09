import React from 'react'
import ThemeProvider from './src/components/themeProvider'
import Layout from './src/components/layout'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
