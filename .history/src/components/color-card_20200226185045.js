import React from "react"

const ColorCard = ({ color }) => {
  const copyToClipboard = color => {
    color.select()
    document.execCommand("copy")
    console.log(color)
  }
  return (
    <section className="color-card" onClick={copyToClipboard(color.color)}>
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
}

export default ColorCard
