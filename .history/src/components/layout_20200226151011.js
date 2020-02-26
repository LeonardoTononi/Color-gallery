import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <>
    <header>
      <h1>Color Gallery</h1>
    </header>
    {children}
    <footer>
      <p>Made by Leonardo Tononi</p>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
