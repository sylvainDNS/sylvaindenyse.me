import React from 'react'
import PropTypes from 'prop-types'
import {
  css,
  Global,
  ThemeProvider as DefaultThemeProvider,
} from '@emotion/react'

import '@fontsource/lato/700.css'
import '@fontsource/merriweather/300.css'

const theme = {
  colors: {
    background: '#eff4ff',
    text: '#1d1d1d',
    link: '#1d1d1d',
    linkHover: '#2d89ef',
  },
}

const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.linkHover};
      text-decoration: underline;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'lato';
    font-weight: 700;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }
`

const ThemeProvider = ({ children }) => (
  <DefaultThemeProvider theme={theme}>
    <Global styles={globalStyles} /> {children}
  </DefaultThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
