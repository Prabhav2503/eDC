import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Card = ({ initials, name, company }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md min-w-[150px]">
      <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 text-xl font-bold">
        {initials}
      </div>
      <h3 className="mt-2 text-white font-semibold">{name}</h3>
      <p className="text-gray-400">{company}</p>
    </div>
  );
};

const data = [
  { initials: "KS", name: "Kunal Shah", company: "CRED" },
  { initials: "RA", name: "Ritesh Agarwal", company: "OYO" },
  { initials: "BA", name: "Bhavish Aggarwal", company: "Ola" },
  { initials: "FN", name: "Falguni Nayar", company: "Nykaa" },
];

const pastSpeakers = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (splide) {
      // Optional: Custom autoplay controls
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6 bg-transparent p-4 ">
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="w-full text-white text-center text-4xl font-bold ">
          Past Speakers
        </h1>
        <p className="w-full text-gray-400 text-center text-2xl font-semibold  ">
          Learn from the best entrepreneurs and industry leaders
        </p>
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
            pagination: true,
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
          {data.map((item, index) => (
            <SplideSlide key={index}>
              <Card {...item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default pastSpeakers;
