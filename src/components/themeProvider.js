import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/react'

import '@fontsource/lato/700.css'
import '@fontsource/merriweather/300.css'
import '@fontsource/merriweather/700.css'

const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    --color-background: #eff4ff;
    --color-text: #1d1d1d;
    --color-link: #2b5797;
    --color-linkHover: #2b5797;
    --color-shadow: rgba(29, 29, 29, 0.3);

    margin-left: calc(100vw - 100%);
    background-color: var(--color-background);
  }

  a {
    color: var(--color-link);
    text-decoration: none;

    &:hover {
      color: var(--color-linkHover);
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
  <>
    <Global styles={globalStyles} />
    {children}
  </>
)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
