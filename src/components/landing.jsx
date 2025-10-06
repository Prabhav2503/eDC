import React from "react";

const Landing = ({ JPG }) => {
  return (
    <div
      className="w-full h-[100vh] bg-center bg-cover relative flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${JPG.iitbuilding})` }}
    >
      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 z-10">

        <h1 className="w-full font-bold text-9xl text-center text-blue-400 ">Entrepreneurship</h1>
        <h3 className="w-full font-bold text-7xl text-center text-white"  >Development Cell</h3>
        <h5 className="w-full font-bold text-2xl text-center text-white"  >Ideate-Innovate-Incubate</h5>

        {/* Buttons */}
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
