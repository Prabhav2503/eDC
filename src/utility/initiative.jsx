import IIT from '../assets/IIT.jpg';
import { Code, TrendingUp, Users, GraduationCap, Rocket, Briefcase, ArrowRight } from 'lucide-react';

const initiatives = [
  {
    title: 'Venture Studio',
    description: 'Venture Studio is eDC IIT Delhi’s flagship initiative - a full-semester, hands-on entrepreneurship program designed to transform bold ideas into impactful ventures. It helps aspiring founders turn bold ideas into impactful ventures by guiding them through every stage of startup creation - from ideation and validation to business strategy and execution. Through weekly sessions, structured learning modules, and personalized guidance from distinguished IIT Delhi alumni such as Pawan Raj Kumar, Alok Mittal, and Vivek Srivastava, Venture Studio bridges the gap between academia and industry. Participants gain direct access to a vibrant ecosystem of mentors, investors, and industry leaders, helping them refine ideas, solve real-world problems, and bring their visions to life.Now in its third edition, Venture Studio continues to empower IIT Delhi students to think big, act bold, and build ventures that define the future of entrepreneurship in India',
    image: IIT,
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


export default initiatives;