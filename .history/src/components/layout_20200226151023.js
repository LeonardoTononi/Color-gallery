import React from "react"

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
