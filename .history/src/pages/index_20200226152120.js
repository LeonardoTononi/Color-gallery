import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ColorCard from "../components/color-card"

const IndexPage = () => {
  const [colorCopied, setColorCopied] = useState(String)
  const [pagination, setPagination] = useState(Number)
  const [colors, setColors] = useState([])
  const [colorsAPI, setColorsAPI] = useState("https://reqres.in/api/colors")

  useEffect(() => {
    fetch(colorsAPI)
      .then(res => res.json())
      .then(data => setColors([data]))
  })

  console.log(colors)

  return (
    <Layout>
      <section className="colors-container">{colorsUI()}</section>
    </Layout>
  )
}

export default IndexPage
