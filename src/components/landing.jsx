import React from "react";

const Landing = ({ JPG }) => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover flex flex-col justify-center items-center text-center m-0 p-0"
      style={{ backgroundImage: `url(${JPG.iitbuilding})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 px-4">
        <h1 className="font-bold text-7xl lg:text-[85px] text-blue-400">Entrepreneurship</h1>
        <h3 className="font-bold text-7xl lg:text-[84px] text-white">Development Cell</h3>
        <h5 className="font-bold text-xl lg:text-2xl text-white">Ideate-Innovate-Incubate</h5>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2">
            Know More →
          </button>
          <button className="bg-transparent border border-gray-400 hover:bg-gray-800 text-white px-6 py-2 rounded-md font-medium">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};


export default Landing;
