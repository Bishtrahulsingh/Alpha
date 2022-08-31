import React, { Suspense } from 'react'
import SearchExercises from '../Components/SearchExercises'
import Footer from '../Components/Footer'

const Herobanner = React.lazy(() => {
  return import('../Components/Herobanner')
})

const Home = () => {
  return (
    <>
      <div id='Home' className='Home'>
        <Suspense fallback="<h1>loading</h1>" >
          <Herobanner />
          <SearchExercises />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default Home