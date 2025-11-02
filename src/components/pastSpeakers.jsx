import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const pastSpeakers = () => {
  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const Speakers = [
    { name: "Speaker 1" },
    { name: "Speaker 2" },
    { name: "Speaker 3" },
    { name: "Speaker 4" },
    { name: "Speaker 5" },
    { name: "Speaker 6" },
    { name: "Speaker 7" },
    { name: "Speaker 8" },
  ];

  const Card = ({ member, isActive }) => (
    <div
      className={`bg-gray-200 w-[320px] h-[300px] flex justify-center items-center rounded-lg shadow-md transition-transform duration-300 ease-out ${
        isActive ? "scale-100 shadow-lg" : "scale-100"
      }`}
    >
      <div
        className={`text-lg font-semibold ${
          isActive ? "text-black" : "text-gray-600"
        }`}
      >
        {member.name}
      </div>
    </div>
  );

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
                <Card member={speaker} isActive={index === activeIndex} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </div>
  );
};

export default pastSpeakers;
