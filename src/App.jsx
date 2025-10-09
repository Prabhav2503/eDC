import Navbar from './components/navbar'
import { SVGs, JPG } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import BeCon from './pages/BeCon'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'
import { useState } from 'react'

function App() {
  const [shrink, setShrink] = useState(false)

  return (
    <div className="bg-black min-h-screen ">
      {/* Sticky Navbar */}
      <div className="w-full z-30 sticky top-0 bg-transparent">
        <Navbar SVGs={SVGs} shrink={shrink} />
      </div>

      {/* Scrollable main content */}
      <main className="w-full flex flex-col ">
        <Routes>
          <Route path="/" element={<Home JPG={JPG} setShrink={setShrink} />} />
          <Route path="/about" element={<About JPG={JPG}/>} />
          <Route path="/initial" element={<Initiative />} />
          <Route path="/becon" element={<BeCon />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </div>
  )
}


export default App
