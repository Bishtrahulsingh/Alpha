import React from 'react'
import "./Css/Bodypart.css"
import bodypart from "../assets/icons/bodypart.png"

const Bodypart = ({ bodyparts, render }) => {
  const filterRenderData = render
  function handleClick(e) {
    filterRenderData(e.target.title)
  }
  return (
    <div title={bodyparts}
      onClick={handleClick}
      className="parts">

      <img title={bodyparts}
        src={bodypart}
        alt={bodyparts} />

      <h4 title={bodyparts}>{bodyparts}</h4>

    </div>
  )
}

export default Bodypart