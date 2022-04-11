import React from 'react'
import ThemeProvider from './src/components/ThemeProvider'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <Layout>{element}</Layout>
  </ThemeProvider>
)
