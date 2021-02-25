import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import NavigationHeader from './navigationHeader'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-left: calc(100vw - 100%);

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Merriweather';
  font-weight: 300;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    width: min(65ch, calc(100% - 64px));
    margin: 16px 32px 32px;
  }

  footer {
    margin-top: auto;
    text-align: center;

    p:last-of-type {
      margin-bottom: 4px;
    }
  }
`

const Layout = ({ children }) => (
  <MainWrapper>
    <NavigationHeader
      css={css`
        position: sticky;
        top: 0;
        z-index: 1000;
      `}
    />
    <main className="content">{children}</main>
    <footer>
      <p>Innovating with respect.</p>
      <p>© 2020</p>
    </footer>
  </MainWrapper>
)

Layout.propTypes = {
  children: PropTypes.node,
}

const FullBleed = styled.div`
  width: 100vw;
`

export const FullBleedWrapper = ({ children }) => (
  <FullBleed>{children}</FullBleed>
)

FullBleedWrapper.propTypes = {
  children: PropTypes.node,
}

export default Layout
