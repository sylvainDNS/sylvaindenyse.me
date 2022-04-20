import React from 'react'
import { css, Global } from '@emotion/react'
import { FONT, useThemeState } from './context'
import { isBrowser } from '../../utils'

import '../../fonts/wotfard.css'
import '../../fonts/luciole.css'
import '../../fonts/opendyslexic.css'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    --color-background: #1d1f20;
    --color-background-light: #2f3233;
    --color-text: #eff4ff;
    --color-link: #ef476f;
    --color-link-hover: #ffbe0b;
    --color-shadow: rgba(10, 10, 10, 0.3);

    --font-family: Wotfard, Futura, sans-serif;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;

    margin-left: calc(100vw - 100%);

    font-family: var(--font-family);
    font-size: ${19 / 16}rem;
    font-weight: var(--font-weight-regular);

    background-color: var(--color-background);
  }

  a {
    position: relative;

    color: var(--color-link);
    text-decoration: none;

    &:after {
      position: absolute;
      top: calc(100% - 2px);
      left: 50%;

      width: 0%;
      height: 1px;
      content: '';

      border-radius: 4px;

      @media screen and (prefers-reduced-motion: reduce) {
        transition: none;
        transition-property: width, left, background-color, color;
      }
    }

    &:hover,
    &:focus {
      color: var(--color-link-hover);

      &:after {
        left: 10%;
        width: 80%;
        background-color: var(--color-link-hover);
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--font-weight-medium);
  }

  b,
  strong {
    font-weight: var(--font-weight-medium);
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
  :before,
  :after {
    line-height: 1.6;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
  }
`

const GlobalStyles = () => {
  const state = useThemeState()

  if (isBrowser) {
    window.localStorage.setItem('font', state.font)

    const font = FONT_FAMILY[state.font]

    const root = window.document.documentElement
    root.style.setProperty('--font-family', `${font}${fallback}`)
  }

  return <Global styles={globalStyles} />
}

const fallback = ', Futura, sans-serif'
const FONT_FAMILY = {
  [FONT.DEFAULT]: 'Wotfard',
  [FONT.DYSLEXIC]: 'OpenDyslexic',
  [FONT.VISUALLY_IMPAIRED]: 'Luciole',
}

export default GlobalStyles
