import React, { useContext, useEffect } from 'react'
import { changedataContext, dataContext } from '../Context/DataContext'
import fetchdata, { exerciseOptions } from '../Utils/fetchdata'
import "./Css/SearchExercises.css"
import Exercises from './Exercises'


const SearchExercises = () => {
    const bodyparts = useContext(dataContext)
    const setBodyParts = useContext(changedataContext)
    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartData = await fetchdata
                ('https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions)
            setBodyParts([...bodyPartData])
        }
        fetchExerciseData()
    }, [])
    return (
        <Exercises dataval={bodyparts} />
    )

}

export default SearchExercises