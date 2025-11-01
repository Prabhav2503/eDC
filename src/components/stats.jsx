import React from "react";
import { TrendingUp, Users, Calendar } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Stats = ({JPG}) => {
  // ========== ADJUST BACKGROUND IMAGE POSITION HERE ==========
  // Change this value to move the background image vertically:
  // - Use negative values (e.g., -50, -30, -10) to move image UP
  // - Use positive values (e.g., 10, 30, 50) to move image DOWN  
  // - Use 0 to center the image
  const backgroundVerticalOffset = 55; // Try values between -100 and 100
  // ===========================================================

  // Stats data matching the image
  const statsData = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      value: "10000+",
      label: "STARTUPS INCUBATED"
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: "2500000+",
      label: "SOCIAL MEDIA REACH"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      value: "100000+",
      label: "EVENTS HOSTED"
    }
  ];

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${JPG.statsbg})`,
          backgroundPosition: `center ${backgroundVerticalOffset}%`,
        }}
      >
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-4">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            focus: 'center',
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            speed: 800,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            arrows: false,
            pagination: false,
            drag: true,
            pauseOnHover: false,
            resetProgress: false,
            updateOnMove: true,
            trimSpace: false,
            classes: {
              page: 'splide__pagination__page custom-splide-dot',
            },
            breakpoints: {
              768: {
                perPage: 1,
                gap: '1rem',
              },
            },
          }}
        >
          {statsData.map((stat, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center text-white text-center py-8">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <div className="text-6xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Custom Styles for Splide */}
      <style jsx>{`
        .splide__slide {
          opacity: 0.5;
          transform: scale(0.85);
          transition: opacity 0.8s ease-out, 
                      transform 0.8s ease-out;
          will-change: opacity, transform;
        }
        
        .splide__slide.is-active {
          opacity: 1 !important;
          transform: scale(1) !important;
          z-index: 10;
          transition: opacity 0.8s ease-out, 
                      transform 0.8s ease-out;
        }

        .splide__slide.is-prev,
        .splide__slide.is-next {
          opacity: 0.5;
          transform: scale(0.85);
          transition: opacity 0.8s ease-out, 
                      transform 0.8s ease-out;
        }

        .splide__track {
          overflow: visible;
        }

        .splide__list {
          transition-timing-function: ease-out !important;
        }
      `}</style>
    </div>
  );
};

export default Stats;
