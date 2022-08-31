import React from 'react'
import { useContext } from 'react'
import { renderSingleElement } from '../Context/DataContext'
import "./Css/ExerciseDetail.css"

const ExerciseDetails = () => {
  const renderItem = useContext(renderSingleElement)
  return (
    <div className='ExerciseDetail'>
      <img src={renderItem.gifUrl} alt="" />
      <div className="details">
        <pre>
          <h2>{renderItem.name}</h2>
        </pre>
        <pre>
          <p><b>BodyPart </b> : {renderItem.bodyPart}</p>
        </pre>
        <pre>
          <p><b>TargetPart</b>: {renderItem.target}</p>
        </pre>
        <pre>
          <p><b>Equipment</b> : {renderItem.equipment}</p>
        </pre>
      </div>
    </div>
  )
}

export default ExerciseDetails