import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <section className="colors-container">
      <div className="color-card">
        <div className="date"></div>
        <div className="center-content">
          <div className="name"></div>
          <div className="hex-code"></div>
        </div>
        <div className="pantone"></div>
      </div>
    </section>
  )
}

export default IndexPage
