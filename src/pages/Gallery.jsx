import React, { useEffect } from 'react'
import Navbar from "../components/navbar";
import Gallery from '../components/Gallery';

const gallery = ({SVGs, IMAGES}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="absolute top-0 w-full z-20">
          <Navbar SVGs={SVGs} shrink={true} />
        </div>
    <div className="bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
      <div className="w-full bg-transparent text-white">
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-30">
        {/* Core Team Heading */}
        <div className="text-center mb-10">
          <p className='text-gray-300 text-center w-full text-xl pb-5'>eDC IITD THROUGH THE YEARS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gallery
          </h2>
          <div className="w-30 h-1 bg-yellow-500 mx-auto"/>
        </div>
        <div className="w-full mx-auto px-8 ">
        <Gallery IMAGES={IMAGES} SVGs={SVGs} />
      </div>
        
      </section>
        </div>
      </div>
    </div>
  )
}

export default gallery
