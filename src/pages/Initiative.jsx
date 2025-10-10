import React, { useEffect } from 'react';
import IIT from '../assets/IIT.jpg';
import { Code, TrendingUp, Users, GraduationCap, Rocket, Briefcase, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/navbar";

const initiatives = [
  {
    icon: <Code className="w-7 h-7 text-[#306ee8]" />,
    title: 'Venture Studio',
    description: 'Intensive 24-48 hour coding competitions where teams build innovative solutions to real-world problems. Participants get to work with cutting-edge technologies, collaborate with talented peers, and showcase their technical prowess.',
    image: IIT,
    features: ['Cash prizes up to ₹1 Lakh', 'Mentorship from industry experts', 'Networking opportunities', 'Free food and swag'],
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#306ee8]" />,
    title: 'Industry Connect',
    description: 'Platform for aspiring entrepreneurs to present their startup ideas to a panel of investors, industry veterans, and successful entrepreneurs. Winners receive funding, mentorship, and invaluable feedback.',
    image: IIT,
    features: ['Seed funding opportunities', 'Investor connections', 'Media coverage', 'Incubation support'],
  },
  {
    icon: <Users className="w-7 h-7 text-[#306ee8]" />,
    title: 'Genesis',
    description: 'Regular meetups, panel discussions, and social events designed to connect students with entrepreneurs, investors, and industry leaders. Build your professional network in a relaxed, engaging environment.',
    image: IIT,
    features: ['Meet successful founders', 'Industry insights', 'Career opportunities', 'Collaborative partnerships'],
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#306ee8]" />,
    title: 'Kinesis',
    description: 'Get paired with experienced entrepreneurs and industry professionals who provide personalized guidance on your startup journey. From ideation to scaling, our mentors have been there and done that.',
    image: IIT,
    features: ['1-on-1 mentoring sessions', 'Expert guidance', 'Strategic planning help', 'Long-term support'],
  },
  {
    icon: <Rocket className="w-7 h-7 text-[#306ee8]" />,
    title: 'Startup Incubator',
    description: 'Comprehensive support system for early-stage startups including workspace, resources, funding connections, and operational guidance. Transform your idea into a viable business with our incubation program.',
    image: IIT,
    features: ['Co-working space', 'Legal & financial support', 'Tech infrastructure', 'Funding assistance'],
  },
  {
    icon: <Briefcase className="w-7 h-7 text-[#306ee8]" />,
    title: 'Workshop Series',
    description: 'Hands-on training sessions covering essential entrepreneurial skills like business planning, financial modeling, marketing, product development, and more. Learn from practitioners and apply concepts immediately.',
    image: IIT,
    features: ['Expert instructors', 'Practical learning', 'Certificates', 'Networking sessions'],
  },
];

const InitiativeCard = ({ title, icon, description, features, image }) => (
  <div className="rounded-lg overflow-hidden shadow-lg flex items-center">
    <img src={image} alt={title} className="h-100 hidden md:flex object-cover flex-11/20" />
    <div className="h-100 bg-[#0d121c] p-8 flex-9/20">
      <div className="flex items-center gap-3 pb-5">
        <div className="w-[50px] h-[50px] rounded-2xl bg-[#101c30] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <h4 className="text-white font-bold text-base pb-2">Key Benefits:</h4>
      <ul className="list-disc list-inside bullet-custom">
        {features.map((point, index) => (
          <li key={index} className="text-gray-300">{point}</li>
        ))}
      </ul>
      <button className="flex items-center gap-2 text-white bg-[#306ee8] px-4 py-2 rounded mt-4">
        Learn More <ArrowRight className="inline w-4 h-4" />
      </button>
    </div>
  </div>
);

const InitiativeCardReverse = ({ title, icon, description, features, image }) => (
  <div className="rounded-lg overflow-hidden shadow-lg flex items-center flex-row-reverse">
    <img src={image} alt={title} className="h-100 hidden md:flex object-cover flex-11/20" />
    <div className="h-100 bg-[#0d121c] p-8 flex-9/20">
      <div className="flex items-center gap-3 pb-5">
        <div className="w-[50px] h-[50px] rounded-2xl bg-[#101c30] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <h4 className="text-white font-bold text-base pb-2">Key Benefits:</h4>
      <ul className="list-disc list-inside bullet-custom">
        {features.map((point, index) => (
          <li key={index} className="text-gray-300">{point}</li>
        ))}
      </ul>
      <button className="flex items-center gap-2 text-white bg-[#306ee8] px-4 py-2 rounded mt-4">
        Learn More <ArrowRight className="inline w-4 h-4" />
      </button>
    </div>
  </div>
);

const Initiative = ({ setShrink,shrink, SVGs }) => {
  const { ref, inView } = useInView();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(inView);
    setShrink(inView);
  }, [inView]);

  return (
    <div>
      <div className="absolute top-0 w-full z-20">
          <Navbar SVGs={SVGs} shrink={shrink} />
        </div>
      <div className="w-full bg-black text-white flex flex-col items-center justify-center px-20 py-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-7xl font-bold mb-6">Our Initiatives</h2>
        <p className="text-3xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your entrepreneurial journey
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10" ref={ref}>
        {Array.from({ length: Math.ceil(initiatives.length / 2) }).map((_, pairIndex) => (
          <div key={pairIndex} className="w-full flex flex-wrap items-center justify-center gap-10">
            {initiatives[pairIndex * 2] && (
              <InitiativeCard
                {...initiatives[pairIndex * 2]}
              />
            )}
            {initiatives[pairIndex * 2 + 1] && (
              <InitiativeCardReverse
                {...initiatives[pairIndex * 2 + 1]}
              />
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Initiative;