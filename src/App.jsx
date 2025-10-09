import Navbar from './components/navbar'
import { SVGs, JPG, Incentive } from './utility/images'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import BeCon from './pages/BeCon'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'
import Test from './pages/test'
import { useState } from 'react'
function App() {
  const [shrink, setShrink] = useState(false)

  return (
    <div className="bg-black w-full h-screen m-0 p-0 overflow-hidden">
  <main className="w-full h-full flex flex-col m-0 p-0">

        
        <Routes>
          <Route path="/" element={<Home JPG={JPG} setShrink={setShrink} />} />
          <Route path="/about" element={<About JPG={JPG}/>} />
          <Route path="/initial" element={<Initiative setShrink={setShrink} />} />
          <Route path="/becon" element={<BeCon />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </main>
    </div>
  )
}


export default App
