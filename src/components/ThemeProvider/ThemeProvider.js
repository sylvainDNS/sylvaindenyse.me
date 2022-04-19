import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContextProvider } from './context'
import GlobalStyles from './GlobalStyles'

const ThemeProvider = ({ children }) => (
  <ThemeContextProvider>
    <GlobalStyles />
    {children}
  </ThemeContextProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
