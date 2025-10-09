import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-md ${isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-700'}`

const mobileLinkClass = ({ isActive }) =>
  `block px-4 py-3 text-white hover:bg-gray-700 ${isActive ? 'bg-white text-black' : ''}`

const Navbar = ({ SVGs, shrink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`w-full bg-[#262626] z-20 transition-all duration-300 ${
        shrink ? 'scale-80 rounded-3xl font-semibold text-xl opacity-90' : ''
      }`}
    >
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src={SVGs.logo} alt="logo" className='w-16' />

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className='hidden md:flex gap-3'>
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
            BeCon
          </NavLink>
          <NavLink to='/resources' className={linkClass}>
            Resources
          </NavLink>
          <NavLink to='/gallery' className={linkClass}>
            Gallery
          </NavLink>
        </div>

        {/* Desktop Join Us Button - Hidden on Mobile */}
        <button className='hidden md:block bg-white text-black px-4 py-2 rounded-md'>
          Join Us
        </button>

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
        <div className="px-4 py-2 bg-[#262626] border-t border-gray-600">
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
            BeCon
          </NavLink>
          <NavLink to='/resources' className={mobileLinkClass} onClick={toggleMenu}>
            Resources
          </NavLink>
          <NavLink to='/gallery' className={mobileLinkClass} onClick={toggleMenu}>
            Gallery
          </NavLink>
          <div className="pt-3 pb-2">
            <button className='w-full bg-white text-black px-4 py-2 rounded-md' onClick={toggleMenu}>
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar