import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Sylvain DENYSE - Web Developer Designer</Link>
      <nav>
        <Link to="/resume">About me</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>Innovating with respect.</p>
      <p>© 2020</p>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
