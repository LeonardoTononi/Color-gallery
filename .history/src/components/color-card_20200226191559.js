import React from "react"

const ColorCard = ({ color }) => (
  <section
    className="color-card"
    onClick={() => {
      console.log("click")
    }}
  >
    <div className="date">
      <p>{color.year}</p>
    </div>
    <div className="center-content">
      <h5>{color.name}</h5>
      <h3>{color.color}</h3>
    </div>
    <div className="pantone">
      <p>{color.pantone_value}</p>
    </div>
  </section>
)

export default ColorCard
