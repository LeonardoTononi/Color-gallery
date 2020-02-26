import React, { useState, useEffect } from "react"

import "../styles/index.scss"

import ColorCard from "../components/color-card"
import Pagination from "../components/pagination"

const IndexPage = () => {
  const [colorCopied, setColorCopied] = useState()
  const [page, setPage] = useState(1)
  const [colors, setColors] = useState()

  useEffect(() => {
    let colorsAPI = `https://reqres.in/api/colors${page === 2 ? "?page=2" : ""}`

    fetch(colorsAPI)
      .then(res => res.json())
      .then(data => setColors(data))
  }, [page])

  const copyToClipboard = colorToCopy => {
    let ghostElement = document.createElement("input")
    document.body.appendChild(ghostElement)
    ghostElement.setAttribute("value", colorToCopy)
    ghostElement.select()
    document.execCommand("copy")
    document.body.removeChild(ghostElement)
  }

  const colorsUI = () =>
    colors.data.map(color => (
      <ColorCard
        key={color.id}
        color={color}
        colorCopied={colorCopied}
        setColorCopied={setColorCopied}
        copyToClipboard={copyToClipboard}
      ></ColorCard>
    ))

  return (
    <>
      <header>
        <h1>Color Gallery</h1>
      <section className="colors-container">
        {colors === undefined ? <div>Loading....</div> : colorsUI()}
      </section>
      <Pagination prev={() => setPage(1)} next={() => setPage(2)} />
    </>
  )
}

export default IndexPage
