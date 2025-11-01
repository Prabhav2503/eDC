import React, {useRef, useEffect} from "react";
import ekansh from '../assets/ekansh_core.webp';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Speakers} from "../utility/teams.js"



//Card Component
const Card = ({ member, isCore = false },) => {
  return (
    <div className="group cursor-pointer">
      <div className={`relative bg-[#D9D9D9]  overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl ${
        isCore ? 'min-h-[30px]' : 'min-h-[10px]'
      }`}>
        {/* Background Image that expands on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Normal state content */}
        <div className="relative z-10 py-5 text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          {/* Profile Image with Zoom Effect */}
          <div className={`mx-auto mb-6 rounded-full overflow-hidden bg-white ${
            isCore ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40' : 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
          }`}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Member Info */}
          <div className="space-y-2">
            <h3 className={`font-bold text-white ${
              isCore ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
            }`}>
              {member.name}
            </h3>
            <p className={`text-white font-medium ${
              isCore ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
            }`}>
              {member.position}
            </p>
          </div>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h3 className={`font-bold text-white text-center mb-2 ${
            isCore ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
          }`}>
            {member.name}
          </h3>
          <p className={`text-white font-medium text-center ${
            isCore ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'
          }`}>
            {member.position}
          </p>
        </div>
      </div>
    </div>
  );
};

const pastSpeakers = ({PNG}) => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      // Optional: Custom autoplay controls
    }
  }, []);
  
    return (
        <div className="w-full bg-transparent text-white">
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
        {/* Core Team Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            PAST SPEAKERS
          </h2>
          <div className="w-320 h-1 bg-black mx-auto"/>
        </div>
        <div className="w-full mx-auto px-8 ">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 800,
            arrows: true,
            pagination: false,
            gap: "1rem",
            breakpoints: {
              1024: { perPage: 4 },
              768: { perPage: 3 },
              640: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
          aria-label="Auto rotating founder carousel"
        >
          {Object.values(Speakers).map((item, index) => (
            <SplideSlide key={index}>
              <Card member={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

        {/* Core Team Members - 4 in a row */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {Object.keys(coreTeam).map((key) => (
            <Card 
              key={key}
              member={coreTeam[key]} 
              isCore={true}
            />
          ))}
        </div> */}
        {/* Additional Team Members Heading */}
        
      </section>
        </div>
    )
}

export default pastSpeakers;
