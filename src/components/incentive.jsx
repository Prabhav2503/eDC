
import IIT from '../assets/IIT.jpg'
import logo from "../assets/iitdlogo.png";
import Moonshot from "../assets/Moonshot.JPG"
import Kinesis from "../assets/Kinesis.JPG"
import VentureStudio from "../assets/venturestudio.jpg"
import { useNavigate } from "react-router-dom";


const initiatives = [
  {
    title: 'Venture Studio',
    description: 'Alumni-Powered Startup Accelerator',
    image: VentureStudio,
    logo: logo,
  },
  {
    title: 'BECon ',
    description: 'Business and Entrepreneurship Conclave',
    image: IIT,
    logo: logo,
  },
  {
    title: 'Regionals',
    description: ' Taking eDC Pan India',
    image: IIT,
    logo: logo,
  },
  {
    title: 'Anastomosis ',
    description: 'Enterpreneursh   for School Students',
    image: IIT,
    logo: logo,
  },
  {
    title: 'Industry Connect',
    description: '"Where Academia Meets Industry"',
    image: IIT,
    logo: logo,
  },
  
  {
    title: 'Kinesis ',
    description: 'Bootcamps. Workshops. Hackathons',
    image: IIT,
    logo: logo,
  },
];




const InitiativeCard = ({ initiative, isCore = false }) => {
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer w-100">
      <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl border border-gray-700/30 ${
        isCore ? 'min-h-[280px]' : 'min-h-[280px]'
      }`}>
        {/* Background Image that expands on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img
            src={initiative.image}
            alt={initiative.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Normal state content */}
        <div className="relative z-10 p-8 text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          {/* Profile Image with Zoom Effect */}
          <div className={`mx-auto mb-6 rounded-full overflow-hidden ${
            isCore ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-36 lg:h-36' : 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
          }`}>
            <img
              src={initiative.logo}
              alt={initiative.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* initiative Info */}
          <div className="space-y-2">
            <h3 className={`font-bold text-white ${
              isCore ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
            }`}>
              {initiative.title}
            </h3>
            <p className={`text-white font-medium text-center ${
            isCore ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'
          }`}>
            {initiative.description}
          </p>
          </div>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center px-8 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h3 className={`font-bold text-white text-center mb-2 ${
            isCore ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
          }`}>
            {initiative.title}
          </h3>
          {/* <p className={`text-white font-medium text-center mt-4 ${
            isCore ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'
          }`}>
            {initiative.description}
          </p> */}
          <button className=" px-6 md:px-8 lg:px-6 py-3 md:py-4 lg:py-2 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl md:rounded-2xl text-white font-semibold text-base md:text-lg lg:text-xl transform transition-all duration-300 ease-in-out  border border-blue-600/40 mt-10 " onClick={() => (navigate("/initial"))}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Incentive() {
  return (
    <div className="w-full bg-transparent text-white flex flex-col items-center justify-center px-4 lg:px-20 pt-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Our Flagship Initiatives
        </h2>
        <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your
          entrepreneurial journey
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={initiative.title || index} initiative={initiative} />
          ))}
        </div>
      </div>
    </div>
  );
}

