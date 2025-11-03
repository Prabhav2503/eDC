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
      <header className='w-full bg-gradient-to-b from-[#2D1B69] via-[#3A2575] to-[#2D1B69] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-10 md:pb-12 lg:pb-16'>
        <div className='px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-3 sm:mb-4'>
            ABOUT US
          </h1>
          <div className='h-[2px] sm:h-[3px] w-full bg-white'/>
        </div>
      </header>
      <AboutEDC JPG={JPG} />
      <img src={JPG.edcteam} alt="eDC Team" className='w-full h-auto object-cover' />
      <Team  JPG={JPG} PNG={PNG} />
    </div>
  )
}

export default About
