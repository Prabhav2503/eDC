import React, { useEffect } from 'react';
import IIT from '../assets/IIT.jpg';
import {ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/navbar";
import initiatives from '../utility/initiative.jsx';


const AboutHome = ({ image,title,description }) => {
  return (
    <section className="w-full bg-[#101c30] rounded-2xl text-white py-12 px-6   flex flex-col lg:flex-row items-center justify-between gap-10 ">
    
      <div className="w-full  flex flex-col justify-center lg:w-60/100 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left" style={{ fontFamily: "Montserrat" }}>
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-xl leading-relaxed text-center lg:text-left">
          {description}
        </p>
      </div>

  <div className="w-full lg:w-45/100 flex justify-center self-start">
        <img
          src={image}
          alt="eDC IIT Delhi Team"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

const AboutHomeReverse = ({ image,title,description }) => {
  return (
    <section className="w-full bg-[#101c30] rounded-2xl text-white py-12 px-6   flex flex-col lg:flex-row-reverse items-center justify-between gap-10 ">

      <div className="w-full  flex flex-col justify-center lg:w-60/100 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left" style={{ fontFamily: "Montserrat" }}>
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-xl leading-relaxed text-center lg:text-left">
          {description}
        </p>
      </div>

  <div className="w-full lg:w-45/100 flex justify-center self-start">
        <img
          src={image}
          alt="eDC IIT Delhi Team"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

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
      <div className=" absolute top-0 w-full z-20">
          <Navbar SVGs={SVGs} shrink={shrink} />
        </div>
      <div className="w-full bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] text-white flex flex-col items-center justify-center px-10 py-30">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-7xl font-bold mb-6">Our Initiatives</h2>
        <p className="text-3xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your entrepreneurial journey
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10" ref={ref}>
        <AboutHome image={IIT} title="Venture Studio" description="Venture Studio is eDC IIT Delhi’s flagship initiative - a full-semester, hands-on entrepreneurship program designed to transform bold ideas into impactful ventures. It helps aspiring founders turn bold ideas into impactful ventures by guiding them through every stage of startup creation - from ideation and validation to business strategy and execution. Through immersive workshops, expert mentorship, and real-world challenges, Venture Studio equips participants with the skills, knowledge, and network needed to launch successful startups. With a focus on innovation, collaboration, and practical learning, it empowers the next generation of entrepreneurs to create ventures that drive meaningful change."/>
        <AboutHomeReverse image={IIT} title="Venture Studio" description="Venture Studio is eDC IIT Delhi’s flagship initiative - a full-semester, hands-on entrepreneurship program designed to transform bold ideas into impactful ventures. It helps aspiring founders turn bold ideas into impactful ventures by guiding them through every stage of startup creation - from ideation and validation to business strategy and execution. Through immersive workshops, expert mentorship, and real-world challenges, Venture Studio equips participants with the skills, knowledge, and network needed to launch successful startups. With a focus on innovation, collaboration, and practical learning, it empowers the next generation of entrepreneurs to create ventures that drive meaningful change."/>
      </div>
    </div>
    </div>
  );
};

export default Initiative;