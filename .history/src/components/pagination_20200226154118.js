import React from "react"

const Pagination = ({ prev, next }) => (
  <div className="pagination">
    <button onClick={prev(1)}>Previous</button>
    <button onClick={next(2)}>Next</button>
  </div>
)

export default Pagination
