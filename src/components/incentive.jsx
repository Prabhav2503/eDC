import { NavLink } from "react-router-dom";
import {ArrowRight }  from  "lucide-react"
import IIT from '../assets/IIT.jpg'




const initiatives = [
  {
    title: 'Hackathons',
    description: 'Intensive coding competitions where innovation meets execution. Build solutions to real-world problems.',
    image: IIT,
  },
  {
    title: 'Pitch Competitions',
    description: 'Showcase your startup ideas to investors and industry experts. Win funding and mentorship.',
    image: IIT,
  },
  {
    title: 'Networking Events',
    description: 'Connect with fellow entrepreneurs, investors, and industry leaders to expand your network.',
    image: IIT,
  },
  {
    title: 'Mentorship Program',
    description: 'Get personalized guidance from successful entrepreneurs and industry veterans.',
    image: IIT,
  },
  {
    title: 'Startup Incubator',
    description: 'Access resources, workspace, and support to transform your idea into a thriving business.',
    image: IIT,
  },
  {
    title: 'Workshop Series',
    description: 'Learn essential entrepreneurial skills through hands-on workshops and training sessions.',
    image: IIT,
  },
];


const InitiativeCard = ({ index, title, description, image }) => (
  <div
    key={index}
    className="w-[30%] rounded-xl overflow-hidden flex flex-col items-center bg-gray-900 relative group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
  >
    {/* white overlay that fades in on hover */}
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300 pointer-events-none z-10" />

    <img src={image} alt={title} className="w-full object-cover" />

    <div className="flex-1 flex flex-col items-center p-4 relative z-20">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-center ">{description}</p>
      <NavLink to="/initial" className="inline-flex items-center gap-2 text-blue-400  mt-4">
        <span>Know More</span>
        <ArrowRight className="w-4 h-4 inline-block" />
      </NavLink>
    </div>
  </div>
);


export default function Incentive() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center p-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold mb-4">Our Flagship Initiatives</h2>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your
          entrepreneurial journey
        </p>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 ">
        {initiatives.map((initiative, index) => (
            <InitiativeCard key={index} {...initiative} />
        ))}
      </div>
      </div>
  );
}
