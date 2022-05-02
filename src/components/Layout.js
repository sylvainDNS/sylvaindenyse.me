import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Navigation from './Navigation'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const buildYear = new Date(
    Date.parse(data.currentBuildDate.currentDate)
  ).getFullYear()

  return (
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
      <Footer>
        <p>© {buildYear} — Nantes</p>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: var(--color-background);
  color: var(--color-text);
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  isolation: isolate;

  width: min(65ch, calc(100% - 64px));
  margin: 16px 32px 32px;
`

const Footer = styled.footer`
  text-align: center;
  font-size: 16px;
  font-weight: var(--font-weight-light);
  margin-bottom: 4px;
  margin-top: auto;
`

Layout.propTypes = {
  children: PropTypes.node,
}
export default Layout
