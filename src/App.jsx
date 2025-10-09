import Navbar from './components/navbar'
import Footer from './components/footer.jsx'
import { SVGs, JPG, Incentive } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import BeCon from './pages/BeCon'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'
function App() {
  const [shrink, setShrink] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3800) // 5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-black min-h-screen ">
      {/* Preloader */}
      <Preloader isLoading={isLoading} />
      
      {/* Main App Content - Only show when not loading */}
      {!isLoading && (
        <>
          {/* Sticky Navbar */}
          <div className="w-full z-30 sticky top-0 bg-transparent">
            <Navbar SVGs={SVGs} shrink={shrink} />
          </div>

          {/* Scrollable main content */}
          <main className="w-full flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<Home JPG={JPG} setShrink={setShrink} />} />
              <Route path="/about" element={<About JPG={JPG}/>} />
              <Route path="/initial" element={<Initiative setShrink={setShrink} />} />
              <Route path="/becon" element={<BeCon />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  )
}


export default App
