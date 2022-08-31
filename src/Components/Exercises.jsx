import React, { useRef } from 'react'
import { useState } from 'react'
import Bodypart from './Bodypart'
import { useSetDataRender } from '../CustomHooks/useSetDataRender'
import "./Css/Exercises.css"
import RenderExercises from './RenderExercises'
import Pagination from "./Pagination"

const Exercises = ({ dataval }) => {
  const searchdata = useRef()
  const perPageItems = 10
  const [startEndCounter, setStartEndCounter] = useState({
    start: 0,
    end: 10
  })
  const [data, setRenderData, filterRenderData, alldata] = useSetDataRender()
  let bodypartdata = dataval.map((item) => {
    return item.bodyPart
  })
  bodypartdata = [...new Set(bodypartdata)]



  function usesetSearchOrCategoryData(val = "", SearchOrCategory = "search") {
    setRenderData(val.toLowerCase(), SearchOrCategory)
  }
  return (
    <div id="Exercises" className='Exercises'>
      <h2>Search Some AweSome Exercises here</h2>

      <div className="searchdata">
        <input type="search"
          ref={searchdata}
          placeholder='search exercise here ' />

        <button onClick={() => {
          usesetSearchOrCategoryData(
            searchdata.current.value.toLowerCase()
            , "search")
          searchdata.current.value = null
        }} >Search</button>

      </div>
      <div className="bodyparts">
        {bodypartdata.map((part, index) => {
          return (
            <Bodypart render={(val) => {
              return filterRenderData(val)
            }}
              key={index} bodyparts={part} />
          )
        })}
      </div>

      <hr />

      <div className="renderexercises">

        {data[0] && data.slice(startEndCounter.start,
          startEndCounter.end).map((part) => {
            return <RenderExercises key={part.id} exercise={part} />
          })}
        {!data[0] && alldata.slice(startEndCounter.start,
          startEndCounter.end).map((part) => {
            return <RenderExercises key={part.id} exercise={part} />
          })}

      </div>

      <Pagination
        render={() => {
          return setStartEndCounter
        }}
        length={data[0] ? data.length : alldata.length}
        startEndCounter={startEndCounter}
        perPageItems={perPageItems}
      />

    </div>
  )
}

export default Exercises