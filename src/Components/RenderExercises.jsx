import React from 'react'
import {Link} from 'react-router-dom'
import "./Css/RenderExercises.css"
import { useContext } from 'react'
import { setRenderSingleElement } from '../Context/DataContext'

const RenderExercises = ({ exercise }) => {
  const setRenderItem = useContext(setRenderSingleElement)
  return (
    <Link onClick={()=>{
      setRenderItem(exercise)
    }} to={`/exploreExercises`}>
      <div className='RenderExercises' >
      <img src={exercise.gifUrl} alt={exercise.name} />
    </div>
    </Link>
  )
}

export default RenderExercises