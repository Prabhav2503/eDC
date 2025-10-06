import Navbar from './components/navbar'
import {SVGs, JPG} from './utility/images'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Initiative from './pages/Initiative'
import BeCon from './pages/BeCon'
import Resources from './pages/Resources'
import Gallery from './pages/Gallery'
import { useState } from 'react'

function App() {
  const [shrink,setShrink] = useState(false)
  return (
    <div className='bg-black h-screen  flex items-center flex-col '>
      <div className='w-full h-full px-8 z-20 sticky top-5 left-0'>
        <Navbar SVGs={SVGs} shrink={shrink} />
      </div>

      <main className='w-full h-full absolute top-0 left-0'>
        <Routes>
          <Route path='/' element={<Home JPG={JPG} setShrink={setShrink} />} />
          <Route path='/about' element={<About />} />
          <Route path='/initial' element={<Initiative />} />
          <Route path='/becon' element={<BeCon />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
