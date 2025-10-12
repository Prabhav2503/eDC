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
    className="w-full h-150  sticky top-30 "
  >
    <div className="rounded-xl overflow-hidden flex flex-row items-center bg-gray-900">
      <img src={image} alt={title} className="w-4/10 object-cover" />

    <div className="flex-1 flex flex-col items-center gap-10 p-4 relative z-20">
      <h3 className="text-5xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-xl text-center ">{description}</p>
      <NavLink to="/initial" className="inline-flex text-2xl items-center gap-2 text-blue-400  mt-4">
        <span>Know More</span>
        <ArrowRight className="w-4 h-4 inline-block" />
      </NavLink>
    </div>
    </div>
  </div>
);


export default function Incentive() {
  return (
    <div className="w-full bg-transparent text-white flex flex-col items-center justify-center px-20 pt-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold mb-4">Our Flagship Initiatives</h2>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your
          entrepreneurial journey
        </p>
      </div>
      <div className="w-full">
        {initiatives.map((initiative, index) => (
            <InitiativeCard key={index} {...initiative} />
        ))}
      </div>
      </div>
  );
}
