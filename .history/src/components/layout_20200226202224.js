import React from "react"
import "../styles/layout.scss"

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

export default Layout
