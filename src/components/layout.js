import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import NavigationHeader from './navigationHeader'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: var(--color-background);
  color: var(--color-text);

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
    font-size: 16px;
    font-weight: var(--font-weight-light);

    p:last-of-type {
      margin-bottom: 4px;
    }
  }
`

const Layout = ({ children }) => (
  <MainWrapper>
    <NavigationHeader />
    <main className="content">{children}</main>
    <footer>
      <p>© 2021 - Make IT more committed.</p>
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
