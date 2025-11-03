import React from 'react'
import ekansh from "../assets/ekansh_core.webp"
import TeamCard from './teamscard';
import {teamMembers, coreTeam} from "../utility/teams";

const team = () => {
  return (
    <div className='w-full flex flex-col items-center pb-12 sm:pb-16 md:pb-20 lg:pb-[115px] relative'>
      {/* Core Team Section */}
      <div className='text-white w-full bg-[#2D1B66] flex flex-col items-center pt-12 sm:pt-16 md:pt-20 lg:pt-[104px] pb-32 sm:pb-40 md:pb-48 lg:pb-56 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18'>
        <p className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full text-center mb-3 sm:mb-4'>
          CORE TEAM
        </p>
        <div className='bg-white h-[2px] sm:h-[3px] w-full max-w-6xl'/>
      </div>

      {/* Core Team Cards - Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-40 mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10'>
        {coreTeam.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
      
      {/* Team Members Section */}
      <div className='w-full text-black flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 mb-8 sm:mb-10 md:mb-12'>
        <p className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full text-center mb-3 sm:mb-4'>
          TEAM MEMBERS
        </p>
        <div className='bg-black h-[2px] sm:h-[3px] w-full max-w-4xl'/>
      </div>

      {/* Team Members Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} {...member} />
        ))}
      </div>
    </div>
  )
}

export default team