import React from "react"

const ColorCard = ({ color }) => (
  <section className="color-card">
    <div className="date">
      <p>{color.year}</p>
    </div>
    <div className="center-content">
      <h5>{color.name}</h5>
      <input value={color.color}></input>
    </div>
    <div className="pantone">
      <p>{color.pantone_value}</p>
    </div>
  </section>
)

export default ColorCard
