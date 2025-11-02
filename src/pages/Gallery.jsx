import React, { useEffect } from 'react'
import Gallery from '../components/Gallery';
import HoverCluster from '../components/hovercluster';

const gallery = ({SVGs, IMAGES}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="bg-[#2D1B66] md:h-[1100px] w-full md:pt-[180px] px-18">

      <div className='text-white  '>
        <div className='flex items-end justify-between'>
          <p className='text-7xl font-bold'>GALLERY</p>
          <p className=' text-2xl '>eDC IITD THROUGH THE YEARS...</p>
        </div>
        <div className='w-full bg-white h-1 mt-[10px]'/>
      </div>
        <div className="w-full mx-auto px-8 pt-10">
        <HoverCluster IMAGES={IMAGES}  />
      </div>
        

      </div>
    </div>
  )
}

export default gallery
