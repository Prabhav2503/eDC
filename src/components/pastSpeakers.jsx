import React from 'react';
import ekansh from '../assets/ekansh_core.webp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Card = ({ image, name }) => {
  return (
    <div className="bg-[#D9D9D9] w-full md:max-w-[403px] md:h-[304px] flex flex-col items-center p-8 gap-5">
      <img src={image} alt="" className="rounded-full md:size-48" />
      <p className="text-white text-3xl font-semibold">{name}</p>
    </div>
  );
};

// Capitalize component name for React
const PastSpeakers = () => {
  return (
    <div className="flex flex-col w-full items-center bg-white relative overflow-x-hidden">
      <h2 className="text-black font-bold md:text-[65px] w-full text-center">PAST SPEAKERS</h2>
      <div className="bg-black md:mt-[10px] h-1 w-full" />

      {/* Constrain the carousel width + clip overflow */}
      <div className="flex items-center justify-center w-full overflow-x-hidden">
        <Splide
          className="w-full max-w-[80vw] overflow-hidden" // <-- important
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 800,
            arrows: true,
            pagination: false,
            gap: '1rem',
            // Use descending breakpoints with smaller perPage as screen shrinks
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 3 },
              768:  { perPage: 2 },
              640:  { perPage: 1 },
            },
            // Make sure widths are percentage-based
            autoWidth: false,
            width: '100%',
          }}
          aria-label="Auto rotating founder carousel"
        >
          <SplideSlide>
            <div className="px-2"> {/* small inner padding to respect gap without pushing width */}
              <Card name="Ekansh Gupta" image={ekansh} />
            </div>
          </SplideSlide>

          {/* Add more slides to better test width behavior */}
          <SplideSlide>
            <div className="px-2">
              <Card name="Speaker Two" image={ekansh} />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <Card name="Speaker Three" image={ekansh} />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default PastSpeakers;
