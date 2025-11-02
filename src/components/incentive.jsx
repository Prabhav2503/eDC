import { useState, useEffect } from 'react';

// Sample images - replace with your actual image paths
const initiatives = [
  {
    title: 'Venture Studio',
    description: 'Alumni-Powered Startup Accelerator',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
  },
  {
    title: 'BECon',
    description: 'Business and Entrepreneurship Conclave',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
  {
    title: 'Regionals',
    description: 'Taking eDC Pan India',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    title: 'Anastomosis',
    description: 'Entrepreneurship for School Students',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
  },
  {
    title: 'Industry Connect',
    description: 'Where Academia Meets Industry',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
  },
  {
    title: 'Kinesis',
    description: 'Bootcamps. Workshops. Hackathons',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
  },
];

export default function Incentive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const TRANSITION_DURATION = 5000; // 5 seconds per slide

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
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 max-w-7xl relative mx-auto w-full">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/4 space-y-4 lg:space-y-6 lg:mt-55">
          <p className="text-base sm:text-lg leading-relaxed mt-10">
            We empower young minds, early-stage startups, and professionals to think big.
          </p>

          <button 
            onClick={handleKnowMore}
            className="text-base sm:text-lg font-bold underline hover:opacity-70 transition-opacity duration-300 inline-block"
          >
            Know More
          </button>
        </div>

        {/* Center - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gray-200">
            <img
              src={currentInitiative.image}
              alt={currentInitiative.title}
              className="w-full h-64 sm:h-80 lg:h-[400px] object-cover transition-all duration-500"
              key={currentIndex}
            />
          </div>
        </div>
        <div className='w-1/4'/>
        {/* Right Side - Heading */}
        <div className=" absolute right-10 top-0 w-full lg:w-[35%] flex items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 leading-tight text-left transition-all duration-500">
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