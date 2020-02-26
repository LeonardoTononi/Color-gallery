import React, { useState, useEffect } from "react"

const ColorCard = ({ color, colorCopied, setColorCopied, copyToClipboard }) => {
  return (
    <section
      className="color-card"
      onClick={() => {
        copyToClipboard(color.color)
        setColorCopied(color.color)
        setTimeout(() => setColorCopied(), 3000)
      }}
    >
      <div className="date">
        <p>{color.year}</p>
      </div>
      <div className="center-content">
        <h5>{color.name}</h5>
        <h3>{colorCopied === color.color ? "Copied!" : color.color}</h3>
      </div>
      <div className="pantone">
        <p>{color.pantone_value}</p>
      </div>
    </section>
  )
}

export default ColorCard
