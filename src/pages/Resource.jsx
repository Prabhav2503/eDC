import React, { useEffect } from 'react'
import Blogs from '../components/blogs';
import Resources from '../components/resources';

const Resource = ({JPG,SVGs}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
      
      <div className="relative pt-24 px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8">
            Resources
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore a curated list of resources to help you on your entrepreneurial journey.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-5">

          {/* Resources Button */}
          <button className="group relative w-full sm:w-auto min-w-[160px] md:min-w-[180px] lg:min-w-[200px] px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 rounded-xl md:rounded-2xl text-white font-semibold text-base md:text-lg lg:text-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-blue-600/40 hover:border-blue-500/60">
            <span className="relative z-10">heading to notion page</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-500/20 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

       <div>
        {/* <Resources JPG={JPG} />                                                                                                          */}
        <Blogs JPG={JPG} />
       </div>
      </div>
    </div>
  )
}

export default Resource;
