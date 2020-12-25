import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ThemeProvider from './themeProvider'
import NavigationHeader from './navigationHeader'

const Footer = styled.footer`
  text-align: center;
`

const Content = styled.main`
  flex: 1;
  margin-top: 16px;
  margin-bottom: 32px;
`

const Layout = ({ children }) => (
  <ThemeProvider>
    <NavigationHeader />
    <Content>{children}</Content>
    <Footer>
      <p>Innovating with respect.</p>
      <p>© 2020</p>
    </Footer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
