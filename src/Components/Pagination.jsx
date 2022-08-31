import React from 'react'
import "./Css/Pagination.css"

const Pagination = ({ render, length, startEndCounter, perPageItems }) => {
  const setStartEndCounter = render()

  function prev() {
    if (startEndCounter.start >= 10) {
      setStartEndCounter((p) => {
        return {
          start: p.start - perPageItems,
          end: p.end - perPageItems
        }
      })
    }
  }
  function next() {
    if (startEndCounter.start + 10 <= length) {
      setStartEndCounter((p) => {
        return {
          start: p.start + perPageItems,
          end: p.end + perPageItems
        }
      })
    }
  }
  return (
    <div className='Pagination' >
      <button onClick={prev} >Previous</button>
      <button onClick={next} >Next</button>
    </div>
  )
}

export default Pagination