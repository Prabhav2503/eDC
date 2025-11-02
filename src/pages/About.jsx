import React, { useEffect } from 'react'
import AboutEDC from '../components/aboutus'

import Team from '../components/team';

const About = ({JPG,SVGs,PNG}) => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div  className="bg-white flex flex-col items-center ">
      <header className='md:h-[360px] bg-[#2D1B66] flex flex-col items-start w-full px-18 md:pt-[196px] '>
        <div className='text-6xl text-white md:pt-[10px] mb-2 font-bold'>ABOUT US</div>
        <div className='h-1 w-full bg-white'/>
      </header>
      <AboutEDC JPG={JPG} />
      <img src={JPG.edcteam} alt="" className='size-full' />
      <Team  JPG={JPG} PNG={PNG} />
    </div>
  )
}

export default About
