import React from 'react';
import bird from "../assets/Vector.svg";
import { useNavigate } from 'react-router-dom';
import edc from  "../assets/edciitd.svg";
import footeredc from "../assets/footeredc.png"
import {Mail, MapPin, Instagram,Linkedin, Facebook } from "lucide-react"
const footer = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col relative min-h-[400px] md:min-h-[455px] px-4 sm:px-6 md:px-[60px]'>
      <img src={footeredc} alt="" className='absolute top-0 w-20 sm:w-24 md:w-32 right-4 sm:right-8 lg:right-[130px]' />
      <div className='mt-6 sm:mt-8 lg:mt-[35px] bg-[#2D1B66] flex-1 flex-col rounded-t-2xl sm:rounded-t-3xl md:rounded-t-4xl'>
        <div className='flex flex-col lg:flex-row justify-evenly gap-8 sm:gap-10 lg:gap-0 px-6 sm:px-8 md:px-[74px] pt-8 sm:pt-10 md:pt-[65px]'>
          {/* Logo and Social Media */}
          <div className='flex flex-col items-center lg:items-start gap-4 sm:gap-6'>
            <img src={edc} alt="" className='w-40 h-24 sm:w-48 sm:h-28 md:w-[233px] md:h-[144px]' />
            <div className='flex gap-4 sm:gap-6 md:gap-[29px] justify-center items-center'>
              <a className='bg-[#D9D9D9] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] flex items-center justify-center cursor-pointer hover:bg-white transition-colors' onClick={() => window.open("https://www.instagram.com/edc_iitd/?hl=en", "_blank")}>
                <Instagram size={28} className='sm:w-8 sm:h-8 md:w-[35px] md:h-[35px]'/>
              </a>
              <a className='bg-[#D9D9D9] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:size-[56px] flex items-center justify-center cursor-pointer hover:bg-white transition-colors' onClick={() => window.open("https://www.linkedin.com/company/edc-iit-delhi/?originalSubdomain=in", "_blank")}>
                <Linkedin size={28} className='sm:w-8 sm:h-8 md:w-[35px] md:h-[35px]'/>
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div className='flex flex-col items-center text-white gap-3 sm:gap-4'>
            <p className='font-bold text-xl sm:text-2xl'>Quick Access</p>
            <div className='flex flex-col items-center flex-1 gap-2 text-base sm:text-lg md:text-xl'>
              <button onClick={() => navigate("/")} className='hover:underline transition-all'>Home</button>
              <button onClick={() => navigate("/about")} className='hover:underline transition-all'>About</button>
              <button onClick={() => navigate("/events")} className='hover:underline transition-all'>Events</button>
              <button onClick={() => navigate("/teams")} className='hover:underline transition-all'>Teams</button>
              <button onClick={() => navigate("/sponsors")} className='hover:underline transition-all'>Sponsors</button>
              <button onClick={() => navigate("/contact")} className='hover:underline transition-all'>Contact</button>
            </div>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col items-center lg:items-start text-white gap-3 sm:gap-4 pb-8 lg:pb-0'>
            <p className='font-bold text-xl sm:text-2xl'>Contact Us</p>
            <div className='flex flex-col flex-1 gap-3 sm:gap-4 text-sm sm:text-base md:text-xl text-center lg:text-left'>
              <p className='flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2'>
                <Mail className='inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
                <span>info@edciitd.ac.in</span>
              </p>
              <p className='flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2'>
                <MapPin className='inline w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
                <span>Indian Institute of Technology Delhi <br />Hauz Khas, New Delhi, 110016</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-8 sm:mt-10 md:mt-[44px] mx-4 sm:mx-6 md:mx-[22px] bg-white h-[2px] sm:h-1 z-10'/>

        {/* Copyright */}
        <div className='flex flex-col sm:flex-row items-center justify-between text-white text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-[47px] pt-4 sm:pt-5 md:pt-[18px] pb-6 sm:pb-8 gap-2 sm:gap-0'>
          <p>Copyright eDC IIT Delhi</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default footer



