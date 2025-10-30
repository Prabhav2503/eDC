import { SVGs, JPG,PNG, IMAGES } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import BeCon from './pages/BeCon'
import Resource from './pages/Resource'
import Gallery from './pages/Gallery'
import Test from "./components/test"

import Footer from './components/footer'
import Preloader from './components/preloader'

function App() {
  const [shrink, setShrink] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   // Simulate loading time for the preloader
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3800) // 5 seconds loading time

  //   return () => clearTimeout(timer)
  // }, [])

  return (
        <div>
          <Preloader isLoading={isLoading} />
          {!isLoading && (
            <>
              <Routes>
                <Route path="/" element={<Home JPG={JPG} SVGs={SVGs} setShrink={setShrink} shrink={shrink} />} />
                <Route path="/about" element={<About JPG={JPG}  SVGs={SVGs} PNG={PNG} />} />
                <Route path="/initial" element={<Initiative setShrink={setShrink} shrink={shrink} SVGs={SVGs} />} />
                <Route path="/becon" element={<BeCon SVGs={SVGs} />} />
                <Route path="/resources" element={<Resource SVGs={SVGs}/>} />
                <Route path="/gallery" element={<Gallery SVGs={SVGs} IMAGES={IMAGES} />} />
                <Route path="/test" element={<Test />} />
              </Routes>
              <Footer SVGs={SVGs} />
            </>
          )}
        </div>
  )
}


export default App
