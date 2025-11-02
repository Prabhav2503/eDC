import { useState, useEffect } from 'react';
import venturestudio from '../assets/venturestudio.jpg';
import industryconnect from '../assets/industryconnect.jpg';   
import regionals from '../assets/regionals.jpg';
import becon from '../assets/becon.jpg';
import kinesis from '../assets/kinesis.jpg';
import anastomosis from '../assets/anastomosis.jpg';
import { useNavigate } from 'react-router-dom';

// Sample images - replace with your actual image paths
const initiatives = [
  {
    title: 'Venture Studio',
    description: 'Alumni-Powered Startup Accelerator',
    image: venturestudio,
  },
  {
    title: 'BECon',
    description: 'Business and Entrepreneurship Conclave',
    image:becon ,
  },
  {
    title: 'Regionals',
    description: 'Taking eDC Pan India',
    image: regionals,
  },
  {
    title: 'Anastomosis',
    description: 'Entrepreneurship for School Students',
    image: anastomosis,
  },
  {
    title: 'Industry Connect',
    description: 'Where Academia Meets Industry',
    image: industryconnect,
  },
  {
    title: 'Kinesis',
    description: 'Bootcamps. Workshops. Hackathons',
    image: kinesis,
  },
];

export default function Incentive() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const TRANSITION_DURATION = 3000; // 5 seconds per slide

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (TRANSITION_DURATION / 50));
      });
    }, 50);

    const transitionInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % initiatives.length);
      setProgress(0);
    }, TRANSITION_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(transitionInterval);
    };
  }, []);

  const currentInitiative = initiatives[currentIndex];

  const handleKnowMore = () => {
    console.log('Navigate to:', currentInitiative.title);
    // Add your navigation logic here
  };

  return (
    <div className="w-full bg-white text-black min-h-screen flex flex-col px-4 sm:px-6 lg:px-20 py-10 lg:py-20">
      {/* Header */}
      <div className="mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4">
          FLAGSHIP EVENTS
        </h1>
        <div className="w-full h-0.5 bg-black"></div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-7xl relative mx-auto w-full bg-[#E8E4F3] rounded-3xl px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/4 space-y-4 lg:space-y-6 lg:mt-55">
          <p className="text-base sm:text-lg lg:text-md lg:font-bold leading-relaxed mt-10">
            {currentInitiative.description}
          </p>

          <button 
            onClick={() => (navigate('/initial'))}
            className="text-base sm:text-lg font-bold underline hover:opacity-70 transition-opacity duration-300 inline-block"
          >
            Know More
          </button>
        </div>

        {/* Center - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-md overflow-hidden shadow-2xl bg-gray-200">
            <img
              src={currentInitiative.image}
              alt={currentInitiative.title}
              className="w-full h-64 sm:h-80 lg:h-[330px] object-cover transition-all duration-500"
              key={currentIndex}
            />
          </div>
        </div>
        <div className='w-1/4'/>
        {/* Right Side - Heading */}
        <div className=" absolute right-10 top-0 w-full lg:w-[35%] flex items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#3B2486] leading-tight text-right transition-all duration-500">
            {currentInitiative.title.toUpperCase()}
          </h2>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-12 lg:mt-16 flex gap-2 sm:gap-3 max-w-7xl mx-auto w-full px-4 lg:px-0">
        {initiatives.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-black transition-all duration-100 ease-linear ${
                index === currentIndex ? '' : index < currentIndex ? 'w-full' : 'w-0'
              }`}
              style={{
                width: index === currentIndex ? `${progress}%` : undefined,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Navigation Dots (Optional - for mobile clarity) */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        {initiatives.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}