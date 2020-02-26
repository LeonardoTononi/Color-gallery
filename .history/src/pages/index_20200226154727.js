import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ColorCard from "../components/color-card"
import Pagination from "../components/pagination"

const IndexPage = () => {
  const [colorCopied, setColorCopied] = useState(String)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [colors, setColors] = useState()
  const [colorsAPI, setColorsAPI] = useState("https://reqres.in/api/colors")

  useEffect(() => {
    let colorsAPI = `https://reqres.in/api/colors${page === 2 ? "?page=2" : ""}`
    fetch(colorsAPI)
      .then(res => res.json())
      .then(data => setColors(data))
      .then(() => console.log(colors))
  }, [])

  const colorsUI = () =>
    colors.data.map(color => <ColorCard key={color.id}></ColorCard>)

  return (
    <Layout>
      <section className="colors-container">
        {colors === undefined ? <div>LOADING</div> : colorsUI()}
      </section>
      <Pagination prev={() => setPage(1)} next={() => setPage(2)}></Pagination>
    </Layout>
  )
}

export default IndexPage
