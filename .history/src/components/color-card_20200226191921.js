import React from "react"

const ColorCard = ({ color, colorCopied, setColorCopied }) => (
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
      {colorCopied === undefined ? (
        <>
          {" "}
          <h5>{color.name}</h5>
          <h3>{color.color}</h3>
        </>
      ) : (
        <h3>Copied!</h3>
      )}
    </div>
    <div className="pantone">
      <p>{color.pantone_value}</p>
    </div>
  </section>
)

export default ColorCard
