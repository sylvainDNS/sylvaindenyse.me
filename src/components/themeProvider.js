import React from 'react'
import PropTypes from 'prop-types'
import {
  css,
  Global,
  ThemeProvider as DefaultThemeProvider,
} from '@emotion/react'

import '@fontsource/lato/700.css'
import '@fontsource/lato/400.css'
import '@fontsource/merriweather/300.css'
import '@fontsource/merriweather/700.css'

const theme = {
  colors: {
    background: '#eff4ff',
    text: '#1d1d1d',
    link: '#2b5797',
    linkHover: '#2b5797',
    shadow: 'rgba(29, 29, 29, 0.3)',
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

  b,
  strong {
    font-weight: 700;
  }

  article {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 24px;
    }
    h4 {
      font-size: 22px;
    }
  }

  button {
    cursor: pointer;
  }

  *,
  ::before,
  ::after {
    line-height: 1.6;
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
