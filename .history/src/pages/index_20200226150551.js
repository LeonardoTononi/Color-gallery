import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <section className="colors-container">
      <div className="color-card">
        <div className="date">
          <p>2006</p>
        </div>
        <div className="center-content">
          <h5>Name</h5>

          <h3>Hex Code</h3>
        </div>
        <div className="pantone"></div>
      </div>
    </section>
  )
}

export default IndexPage
