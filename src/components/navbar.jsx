import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = ({ SVGs, shrink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-bold text-sm lg:text-xl ${isActive ? 'bg-[#D1AEFF]/5 text-[#1CB5E0] underline decoration-2 underline-offset-5 text-2xl' : 'text-white hover:underline decoration-2 hover:underline-offset-5 hover:text-[#D1AEFF] '}`

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-lg text-base ${isActive ? 'bg-[#D1AEFF]/5 text-[#FFFFFF] underline decoration-2 underline-offset-2 ' : 'text-white hover:bg-white/10 decoration-white/50 hover:text-[#D1AEFF] '}`

  return (
    <div className='w-full flex items-center'>
      <div
      className={`w-full bg-[#25233E] backdrop-blur-md border border-white/10 shadow-sm z-30 transition-all duration-300 scale-80 rounded-3xl font-semibold text-xl opacity-80`} style={{fontFamily:"Montserrat"}}
    >
      {/* Main Navbar */}
  <div className="flex items-center justify-between px-4">
        <img src={SVGs.logo} alt="logo" className='w-15 lg:w-22' onClick={() => navigate("/")} />

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className='hidden md:flex gap-1 lg:gap-3'>
          <NavLink to='/' className={linkClass} end>
            Home  
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About Us
          </NavLink>
          <NavLink to='/initial' className={linkClass}>
            Initiative
          </NavLink>
          <NavLink to='/becon' className={linkClass}>
            BECon
          </NavLink>
          <NavLink to='/resources' className={linkClass}>
            Resources
          </NavLink>
          <NavLink to='/gallery' className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to='/joinus' className='hidden md:block bg-white font-bold text-sm lg:text-xl text-black px-4 py-2 rounded-lg'>
          Join Us
        </NavLink>
        </div>

        {/* Desktop Join Us Button - Hidden on Mobile */}
        

        {/* Mobile Hamburger Menu Button - Hidden on Desktop */}
        <button 
          className='md:hidden flex flex-col space-y-1 p-2'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu - Only visible on mobile when menu is open */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-2 bg-white/5 backdrop-blur-md border-t border-white/10">
          <NavLink to='/' className={mobileLinkClass} end onClick={toggleMenu}>
            Home  
          </NavLink>
          <NavLink to='/about' className={mobileLinkClass} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to='/initial' className={mobileLinkClass} onClick={toggleMenu}>
            Initiative
          </NavLink>
          <NavLink to='/becon' className={mobileLinkClass} onClick={toggleMenu}>
            BECon
          </NavLink>
          <NavLink to='/resources' className={mobileLinkClass} onClick={toggleMenu}>
            Resources
          </NavLink>
          <NavLink to='/gallery' className={mobileLinkClass} onClick={toggleMenu}>
            Gallery
          </NavLink>
          <div className="pt-3 pb-2">
            <button className='w-full bg-white text-black px-4 py-2 rounded-md' onClick={() => (navigate('/joinus'))} >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar