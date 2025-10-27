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
              <div className="bg-blue-600 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To cultivate an entrepreneurial ecosystem that transforms
              innovative ideas into successful ventures, empowering
              students to become future business leaders.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#1A2332] rounded-2xl p-8 border border-gray-700/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              we strive to empower young minds to create impactful startups that inspire change across the globe. We believe every dreamer - regardless of background, location, or prior experience - deserves the opportunity to pursue entrepreneurship. Standing with every risk-taker who dares to dream, eDC is committed to nurturing innovators and shaping the next generation of entrepreneurs.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-[#1A2332] rounded-2xl p-8 border border-gray-700/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Core Values</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Innovation, Integrity, Collaboration, and Excellence guide
              everything we do. We believe in building a supportive
              community where ideas flourish.
            </p>
          </div>

          {/* Innovation First Card */}
          <div className="bg-[#1A2332] rounded-2xl p-8 border border-gray-700/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Innovation First</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We champion creative thinking and bold experimentation,
              encouraging our community to push boundaries and
              challenge conventional wisdom.
            </p>
          </div>
        </div>
      </section>
      
      </div>
  );
};

export default AboutEDC;
