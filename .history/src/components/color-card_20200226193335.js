import React from "react"

const ColorCard = ({ color, setColorCopied }) => {
  const changeOnCopyUI = e => {
    e.target.innerText = "Copied"
  }
  return (
    <section
      className="color-card"
      onClick={() => {
        setColorCopied(color.color)
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
}

export default ColorCard