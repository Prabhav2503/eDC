import React from "react";
import ShineBorder from "./shineborder";
import { useNavigate } from "react-router-dom"; 

const Landing = ({ JPG }) => {
  const navigate = useNavigate();

  return (
    <div
  className="relative w-full h-screen bg-center bg-cover flex flex-col justify-center items-center text-center m-0 p-0 overflow-hidden"

      style={{ backgroundImage: `url(${JPG.iitbuilding})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] opacity-70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 px-4">
  <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[85px] text-blue-400">Entrepreneurship</h1>
  <h3 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-white">Development Cell</h3>
  <h5 className="font-bold text-lg sm:text-xl lg:text-3xl pt-2 text-white">Ideate. Innovate. Incubate.</h5>

        <div className=" flex flex-wrap justify-center items-center gap-4">
          <button className=" text-base lg:text-2xl text-white px-8 py-4 rounded-md font-medium flex items-center gap-2" onClick={() => (navigate("/about"))}>
            <ShineBorder>Know More →</ShineBorder>
          </button>
          
        </div>
      </div>
    </div>
  );
};


export default Landing;
