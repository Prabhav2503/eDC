import React from 'react'
import ekansh from "../assets/ekansh_core.webp"
import TeamCard from './teamscard';
import {teamMembers, coreTeam} from "../utility/teams";

const team = () => {
  return (
    <div className='w-full flex flex-col items-center md:pb-[115px] relative  '>
      <div className=' text-white md:h-[500px] w-full bg-[#2D1B66] flex flex-col items-center md:pt-[104px] px-18'>
        <p className='font-bold text-6xl w-full text-center'>CORE TEAM</p>
        <div className='bg-white h-1 w-full md:mt-[10px] md:mb-[24px]'/>
        
        
      </div>
      <div className='w-full md:pt-[165px] text-black flex flex-col items-center px-18'>
        <p className='font-bold text-6xl w-full text-center'>TEAM MEMBERS</p>
        <div className='bg-black h-1 w-[60%] md:mt-[10px] md:mb-[24px]'/>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-18 md:pt-[90px]">
  {teamMembers.map((member, idx) => (
    <TeamCard key={idx} {...member} />
  ))}
</div>
      <div className='grid md:grid-cols-4 px-18 items-center justify-center md:gap-[33px] w-full absolute md:top-[280px]'>
        {coreTeam.map((member, idx) => (
    <TeamCard key={idx} {...member} />
  ))}
      </div>
    </div>
  )
}

export default team