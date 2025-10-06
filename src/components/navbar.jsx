import React from 'react'
import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-md ${isActive ? 'bg-white text-black' : 'text-white hover:bg-gray-700'}`

const Navbar = ({ SVGs, shrink }) => {
  return (
    <div className='w-full bg-[#262626] rounded-3xl sticky top-5 left-0 flex items-center justify-between px-8 z-20'>
      <img src={SVGs.logo} alt="logo" className='w-16' />

      <div className='flex gap-3'>
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

      <button className='bg-white text-black px-4 py-2 rounded-md'>Join Us</button>
    </div>
  )
}

export default Navbar