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

  useEffect(() => {
    let colorsAPI = `https://reqres.in/api/colors${page === 2 ? "?page=2" : ""}`
    fetch(colorsAPI)
      .then(res => res.json())
      .then(data => setColors(data))
  }, [page])

  const colorsUI = () =>
    colors.data.map(color => (
      <ColorCard
        key={color.id}
        color={color}
        onClick={copyToClipboard}
      ></ColorCard>
    ))

  const copyToClipboard = () => {
    /* Get the text field */
    var copyText = document.getElementById("color")

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /*For mobile devices*/
    document.execCommand("copy")
  }

  return (
    <Layout>
      <section className="colors-container">
        {colors === undefined ? <div>Loading....</div> : colorsUI()}
      </section>
      <Pagination prev={() => setPage(1)} next={() => setPage(2)}></Pagination>
    </Layout>
  )
}

export default IndexPage
