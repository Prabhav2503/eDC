import React, {useRef, useEffect} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Testimonials} from "../utility/teams"




const Card = ({ member, isCore = true }) => {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden transform transition-all duration-500 ease-in-out border border-gray-700/30 ${
          isCore ? "min-h-[320px]" : "min-h-[280px]"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 p-2 lg:p-8 text-center transition-opacity duration-300 ease-in-out">
          {/* Profile Image */}
          <div
            className={`mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 ${
              isCore
                ? "w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40"
                : "w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Member Info */}
          <div className="space-y-2 flex flex-col items-center">
            <h3
              className={`font-bold text-white ${
                isCore ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
              }`}
            >
              {member.name}
            </h3>
            <p
              className={`text-white font-medium ${
                isCore ? "text-base lg:text-lg" : "text-sm lg:text-base"
              }`}
            >
              {member.position}
            </p>

            {/* Description with quotation marks */}
            <p
              className={`w-[80%] text-white italic font-medium leading-relaxed ${
                isCore ? "text-base lg:text-lg" : "text-sm lg:text-base"
              }`}
            >
              <span className="text-yellow-400 text-3xl align-top mr-1">“</span>
              {member.description}
              <span className="text-yellow-400 text-xl lg:text-3xl align-bottom ml-1">”</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const pastSpeakers = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            TESTIMONIALS
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"/>
        </div>
        <div className="w-full mx-auto px-8 ">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 1000,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 800,
            arrows: true,
            pagination: false,
            gap: "1rem",
            breakpoints: {
              1024: { perPage: 1 },
              768: { perPage: 1 },
              640: { perPage: 1 },
              480: { perPage: 1 },
            },
          }}
          aria-label="Auto rotating founder carousel"
        >
          {Object.values(Testimonials).map((item, index) => (
            <SplideSlide key={index}>
              <Card member={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
        
      </section>
        </div>
    )
}

export default pastSpeakers;
