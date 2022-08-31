import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import "./App.css"
import ExerciseDetails from './Pages/ExerciseDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exploreExercises'
          element={<ExerciseDetails />} />
      </Routes>
    </>
  )
}

export default App