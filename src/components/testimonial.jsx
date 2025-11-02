import React from 'react'
import ekansh from "../assets/ekansh_core.webp"

const testimonials = [
  {
    NAME: "John Doe", 
    POR: "Software Engineer",
    description: "John is a software engineer with 5 years of experience.",
    image: ekansh
  },
  {
    NAME: "John Doe", 
    POR: "Software Engineer",
    description: "John is a software engineer with 5 years of experience.",
    image: ekansh
  },
  {
    NAME: "John Doe", 
    POR: "Software Engineer",
    description: "John is a software engineer with 5 years of experience.",
    image: ekansh
  },
  // Add more testimonials as needed
];

const Card = ({NAME,POR,description,image}) => {
  return (
    <div className='md:h-[459px] w-full bg-[#3B2486] rounded-2xl shadow-2xl md:px-[45px] md:py-[44px] flex items-center md:gap-[30px]'>
      <img src={image} alt="" className='w-32 md:h-[370px] md:w-[320px] rounded-2xl ' />
      <div className='flex flex-col md:gap-[44px] md:h-[370px] text-white text-[24px]'>
        <div className='flex flex-col md:gap-[11px] text-[32px]'>
          <p className='font-bold'>{NAME}</p>
          <p>{POR}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}
const testimonial = () => {
  return (
    <div className='flex flex-col min-h-[1797px] w-full bg-white relative '>
      <div className='bg-[#2D1B66] md:h-[1744px] w-full'>
        <p className='text-white lg:text-[96px] font-bold md:pl-[101px] md:pt-[114px]'>TESTIMONIAL</p>
      </div>
        {/* Testimonials container, stuck to bottom of white div */}
        <div className='absolute w-full md:top-[301px] md:px-[111px] bottom-0 '>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='w-full md:mb-[57px]'>
              <Card {...testimonial} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default testimonial