import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TeamsCard from "./teamscard";
import { Speakers } from "../utility/speaker";

const pastSpeakers = () => {
  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      splide.on("move", (newIndex) => {
        setActiveIndex(newIndex);
      });
    }
  }, []);

  return (
    <div className="w-full bg-white text-black flex flex-col px-4 sm:px-6 lg:px-20 py-10 lg:py-20 overflow-hidden">
      <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-10 overflow-hidden">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            PAST SPEAKERS
          </h1>
          <div className="w-full h-0.5 bg-black"></div>
        </div>

        {/* Carousel */}
        <div className="w-full mx-auto overflow-hidden">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 4,
              focus: "center",
              autoplay: true,
              interval: 1800, // faster, smoother interval
              speed: 700, // quick smooth slide
              pauseOnHover: false,
              pauseOnFocus: false,
              arrows: false,
              pagination: false,
              gap: "1rem",
              breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
            aria-label="Past Speakers Carousel"
          >
            {Speakers.map((speaker, index) => (
              <SplideSlide key={index}>
                <TeamsCard key={index} {...speaker} isActive={index === activeIndex} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </div>
  );
};

export default pastSpeakers;
