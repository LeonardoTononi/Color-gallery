import React from "react"

const ColorCard = ({ color, setColorCopied }) => {
  const click = color => {
    /* colorCopied.setSelectionRange(0, 99999) */
    document.execCommand("copy")
  }

  return (
    <section
      className="color-card"
      onClick={() => {
        setColorCopied(color.color)
        copyToClipboard(color.color)
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
