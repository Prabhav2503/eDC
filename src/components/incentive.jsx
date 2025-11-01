import { NavLink } from "react-router-dom";
import {ArrowRight }  from  "lucide-react"
import IIT from '../assets/IIT.jpg'




const initiatives = [
  {
    title: 'Venture Studio',
    description: 'A 6-month intensive program designed to transform student startup ideas into market-ready ventures through hands-on workshops, expert mentorship, and pitching sessions.',
    image: IIT,
  },
  {
    title: 'BECon ',
    description: 'Business and Entrepreneurship Conclave  is the flagship initiative and e-Summit of IIT Delhi, organized by eDC. Spanning 5+ cities with over 200 competitions, workshops, speaker sessions, and fireside chats, BECon stands as India’s largest student-organized entrepreneurship summit.',
    image: IIT,
  },
  {
    title: 'Industry Connect',
    description: 'Industry Connect by eDC IIT Delhi bridges academia and industry, giving students real-world exposure through Trend Talks, industry visits, and global startup events. It empowers students to observe operations firsthand, engage with leaders, and apply critical thinking to innovate around real-world challenges.',
    image: IIT,
  },
  {
    title: 'Regionals',
    description: ' Regionals takes eDC beyond IIT Delhi, to India’s top startup hubs including Hyderabad, Bengaluru, and Mumbai. With Blueprint, Moonshot, and the Startup Clinic, it brings funding, mentorship, and networking opportunities to student and early-stage founders nationwide.',
    image: IIT,
  },
  
  {
    title: 'Kinesis ',
    description: 'Kinesis (Bootcamp, workshops, Musketeers, Hackathons)  is our skill-building entrepreneurship program that helps students turn ideas into ventures. Through bootcamps, workshops on MVP building and venture creation, hackathons, and competitions, it provides mentorship, guidance, and opportunities to innovate, collaborate, and bring ideas to life.',
    image: IIT,
  },
  {
    title: 'Anastomosis ',
    description: 'Anastomosis inspires young innovators by introducing school students to entrepreneurship through interactive bootcamps, competitions, and mentorship. It blends learning with real-world experience, empowering them to think creatively and take their first steps toward building ventures.',
    image: IIT,
  },
];


const InitiativeCard = ({ index, title, description, image }) => (
  <div key={index} className="w-full mb-8 sticky top-30">
    <div className="rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch bg-gray-900">
      <img src={image} alt={title} className="w-full md:w-5/12 object-cover h-56 md:h-auto" />

    <div className="flex-1 flex flex-col items-center md:items-start gap-6 p-6 relative z-20">
      <h3 className="text-3xl lg:text-5xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-lg md:text-xl text-center md:text-left">{description}</p>
      <NavLink to="/initial" className="inline-flex text-xl md:text-2xl items-center gap-2 text-blue-400 mt-4">
        <span>Know More</span>
        <ArrowRight className="w-4 h-4 inline-block" />
      </NavLink>
    </div>
    </div>
  </div>
);


export default function Incentive() {
  return (
    <div className="w-full bg-transparent text-white flex flex-col items-center justify-center px-5 lg:px-20 pt-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className=" text-3xl lg:text-5xl font-bold mb-4">Our Flagship Initiatives</h2>
        <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
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
