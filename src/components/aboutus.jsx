import React from "react";

const AboutEDC = ({ JPG }) => {
  return (
    <div className="w-full pt-10 bg-transparent text-white">
      {/* Main Section with Heading */}
      <section className="px-8 md:px-20 pt-16 pb-12">
        {/* Top Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-left">
            About eDC IIT Delhi
          </h1>
        </div>

        {/* Content and Image Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Entrepreneurship Development Cell (eDC) at IIT Delhi is India’s largest student-run body dedicated to nurturing the spirit of entrepreneurship since 2007. We empower young minds, early-stage startups, and professionals to think big, innovate fearlessly, and build impactful ventures. More than just promoting entrepreneurship, we partner in your journey by providing a dynamic ecosystem of learning, mentorship, and opportunities. Through workshops, bootcamps, hackathons, competitions, boardroom discussions, speaker sessions, and real-time funding avenues, we equip aspiring entrepreneurs with the skills, insights, and networks needed to transform ideas into reality. With a legacy of impact and a vibrant community, eDC continues to inspire and shape the next generation of changemakers across India.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={JPG.iitbuilding}
              alt="eDC IIT Delhi Team"
              className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values, Innovation Section */}
      <section className="px-8 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#1A2332] rounded-2xl p-8 border border-gray-700/30">
            <div className="flex items-start gap-4 mb-6">
              {/* <div className="bg-blue-600 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div> */}
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Fueled by the vision to inspire the next generation of entrepreneurs, eDC IIT Delhi is committed to cultivating a vibrant startup ecosystem on campus. Our mission is to transform innovative ideas into successful ventures by providing mentorship, resources, and experiential learning and empowering students to evolve into visionary leaders who drive meaningful impact and shape the future of business and society.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1A2332] rounded-2xl p-8 border border-gray-700/30">
            <div className="flex items-start gap-4 mb-6">
              
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At eDC IIT Delhi strive to empower young minds to create impactful startups that inspire change across the globe. We believe every dreamer, regardless of background, location, or prior experience, deserves the opportunity to pursue entrepreneurship. Standing with every risk-taker who dares to dream, eDC is committed to nurturing innovators and shaping the next generation of entrepreneurs.
            </p>
          </div>

        
        </div>
      </section>
      
      </div>
  );
};

export default AboutEDC;
