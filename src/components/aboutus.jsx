import React from "react";

const AboutEDC = ({ JPG }) => {
  return (
    <div className="w-full bg-[#0A0E1A] text-white">
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
              We empower young minds, early-stage startups, and professionals to
              think big, innovate fearlessly, and build impactful ventures. We
              partner in your journey by providing the right blend of learning,
              mentorship, and opportunities. Through workshops, bootcamps,
              hackathons, competitions, mentorship programmes and funding avenues,
              we create a thriving ecosystem to turn ideas into reality. With a
              strong legacy since 2007, eDC continues to inspire and shape the next
              generation of changemakers across India.
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
              To be India's premier hub for student entrepreneurship,
              driving innovation and creating sustainable impact on
              society and economy.
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

      {/* Core Team Section */}
      <section className="px-8 md:px-20 py-16">
        {/* Core Team Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CORE TEAM
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Core Team Members - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Core Team Member 1 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-blue-600">
              <img
                src="https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=AS"
                alt="Abhinav Srivastav"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Abhinav Srivastav</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Core</p>
            <p className="text-gray-400 text-sm">abhinav@edc.iitd.ac.in</p>
          </div>

          {/* Core Team Member 2 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-blue-600">
              <img
                src="https://via.placeholder.com/300x300/059669/FFFFFF?text=RS"
                alt="Rishav Saha"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rishav Saha</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Core</p>
            <p className="text-gray-400 text-sm">rishav@edc.iitd.ac.in</p>
          </div>

          {/* Core Team Member 3 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600">
              <img
                src="https://via.placeholder.com/300x300/374151/FFFFFF?text=SV"
                alt="Sanchit Vijay"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sanchit Vijay</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Core</p>
            <p className="text-gray-400 text-sm">sanchit@edc.iitd.ac.in</p>
          </div>

          {/* Core Team Member 4 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-600">
              <img
                src="https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=VM"
                alt="Vipinsh Mehra"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Vipinsh Mehra</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Core</p>
            <p className="text-gray-400 text-sm">vipinsh@edc.iitd.ac.in</p>
          </div>
        </div>

        {/* Additional Team Members Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            TEAM MEMBERS
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Additional Team Members - 18 members in rows of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Row 1 - Members 1-4 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-red-600">
              <img
                src="https://via.placeholder.com/300x300/EC4899/FFFFFF?text=AK"
                alt="Arun Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Arun Kumar</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Marketing Head</p>
            <p className="text-gray-400 text-sm">arun@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-600">
              <img
                src="https://via.placeholder.com/300x300/6366F1/FFFFFF?text=PS"
                alt="Priya Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Priya Sharma</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Design Lead</p>
            <p className="text-gray-400 text-sm">priya@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400 to-green-600">
              <img
                src="https://via.placeholder.com/300x300/14B8A6/FFFFFF?text=RG"
                alt="Rahul Gupta"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rahul Gupta</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Tech Lead</p>
            <p className="text-gray-400 text-sm">rahul@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 to-red-600">
              <img
                src="https://via.placeholder.com/300x300/F97316/FFFFFF?text=SD"
                alt="Sneha Devi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sneha Devi</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Events Head</p>
            <p className="text-gray-400 text-sm">sneha@edc.iitd.ac.in</p>
          </div>

          {/* Row 2 - Members 5-8 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600">
              <img
                src="https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=VK"
                alt="Vikash Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Vikash Kumar</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Finance Head</p>
            <p className="text-gray-400 text-sm">vikash@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-lime-400 to-green-600">
              <img
                src="https://via.placeholder.com/300x300/84CC16/FFFFFF?text=AP"
                alt="Anjali Patel"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Anjali Patel</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">PR Head</p>
            <p className="text-gray-400 text-sm">anjali@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-400 to-purple-600">
              <img
                src="https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=MS"
                alt="Mukesh Singh"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mukesh Singh</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Content Head</p>
            <p className="text-gray-400 text-sm">mukesh@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-400 to-pink-600">
              <img
                src="https://via.placeholder.com/300x300/F43F5E/FFFFFF?text=KJ"
                alt="Kavya Jain"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kavya Jain</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Research Head</p>
            <p className="text-gray-400 text-sm">kavya@edc.iitd.ac.in</p>
          </div>

          {/* Row 3 - Members 9-12 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600">
              <img
                src="https://via.placeholder.com/300x300/10B981/FFFFFF?text=AS"
                alt="Arjun Saxena"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Arjun Saxena</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Operations Head</p>
            <p className="text-gray-400 text-sm">arjun@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-orange-600">
              <img
                src="https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=NT"
                alt="Neha Trivedi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Neha Trivedi</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Social Media</p>
            <p className="text-gray-400 text-sm">neha@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600">
              <img
                src="https://via.placeholder.com/300x300/0EA5E9/FFFFFF?text=DM"
                alt="Dev Malhotra"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dev Malhotra</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Web Developer</p>
            <p className="text-gray-400 text-sm">dev@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-400 to-purple-600">
              <img
                src="https://via.placeholder.com/300x300/D946EF/FFFFFF?text=SP"
                alt="Shweta Pandey"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Shweta Pandey</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">UI/UX Designer</p>
            <p className="text-gray-400 text-sm">shweta@edc.iitd.ac.in</p>
          </div>

          {/* Row 4 - Members 13-16 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-red-400 to-rose-600">
              <img
                src="https://via.placeholder.com/300x300/EF4444/FFFFFF?text=HY"
                alt="Harsh Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Harsh Yadav</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Photography</p>
            <p className="text-gray-400 text-sm">harsh@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-400 to-gray-600">
              <img
                src="https://via.placeholder.com/300x300/64748B/FFFFFF?text=SM"
                alt="Sakshi Mishra"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sakshi Mishra</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Video Editor</p>
            <p className="text-gray-400 text-sm">sakshi@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600">
              <img
                src="https://via.placeholder.com/300x300/22C55E/FFFFFF?text=AA"
                alt="Amit Agarwal"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Amit Agarwal</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Business Dev</p>
            <p className="text-gray-400 text-sm">amit@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600">
              <img
                src="https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=RV"
                alt="Ritu Verma"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ritu Verma</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Partnership</p>
            <p className="text-gray-400 text-sm">ritu@edc.iitd.ac.in</p>
          </div>

          {/* Row 5 - Members 17-18 */}
          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-violet-600">
              <img
                src="https://via.placeholder.com/300x300/A855F7/FFFFFF?text=NK"
                alt="Neeraj Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Neeraj Kumar</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Logistics</p>
            <p className="text-gray-400 text-sm">neeraj@edc.iitd.ac.in</p>
          </div>

          <div className="bg-[#1A2332] rounded-2xl p-6 border border-gray-700/30 text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-rose-600">
              <img
                src="https://via.placeholder.com/300x300/EC4899/FFFFFF?text=PT"
                alt="Pooja Thakur"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pooja Thakur</h3>
            <p className="text-blue-400 text-lg font-medium mb-3">Alumni Relations</p>
            <p className="text-gray-400 text-sm">pooja@edc.iitd.ac.in</p>
          </div>
        </div>
      </section>

      </div>
  );
};

export default AboutEDC;
