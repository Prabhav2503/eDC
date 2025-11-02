import React from 'react';
import bird from "../assets/Vector.svg";
import edc from  "../assets/edciitd.svg";
import {Mail, MapPin, Instagram,Linkedin, Facebook } from "lucide-react"
const footer = () => {
  return (
    <div className='flex flex-col relative md:min-h-[455px] md:px-[60px]'>
      <img src={bird} alt="" className='absolute top-0 lg:right-[110px]' />
      <div className='lg:mt-[35px] bg-[#2D1B66] flex-1 flex-col  rounded-t-4xl'>
        <div className='flex justify-evenly md:px-[74px] md:pt-[65px]'>
          <div className='flex flex-col md:gap-[52px]'>
          <img src={edc} alt="" className='md:w-[233px] md:h-[144px]' />
          <div className='flex md:gap-[29px] items-center'>
            <a className='bg-[#D9D9D9] rounded-full md:size-[56px] flex items-center justify-center cursor-pointer' onClick={() => window.open("https://www.instagram.com/edc_iitd/?hl=en", "_blank")}><Instagram size={35}/></a>
            <a className='bg-[#D9D9D9] rounded-full md:size-[56px] flex items-center justify-center cursor-pointer' onClick={() => window.open("https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in", "_blank")}><Linkedin size={35}/></a>
            
          </div>
        </div>
        <div className='flex flex-col items-center text-white text-xl gap-2 '>
          <p className='font-bold text-2xl'>Quick Access</p>
          <div className='flex flex-col items-center flex-1 gap-2'>
          <p>Home</p>
          <p>About</p>
          <p>Events</p>
          <p>teams</p>
          <p>Sponsors</p>
          <p>Contact</p>
          </div>
        </div>
        <div className='flex flex-col items-center text-white text-xl gap-3 '>
          <p className='font-bold text-2xl'>Contact Us</p>
          <div className='flex flex-col  flex-1 gap-2'>
          <p><Mail className='inline mr-3' />info@edciitd.ac.in</p>
          <p><MapPin className='inline mr-3' />Indian Institute of Technology Delhi <br />Hauz Khas, New Delhi, 110016</p>

          </div>
        </div>
        </div>
        <div className='md:mt-[44px] md:mx-[22px] bg-white h-1 z-10'/>
        <div className='flex items-center justify-between text-white font-white md:px-[47px] md:pt-[18px]'>
          <p>Copyright eDC IIT Delhi</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default footer



