import React, { useEffect } from 'react'
import AboutEDC from '../components/aboutus'
import Navbar from "../components/navbar";
import Team from '../components/team';

const About = ({JPG,SVGs}) => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div className="absolute top-0 w-full z-20">
          <Navbar SVGs={SVGs} shrink={true} />
        </div>
    <div  className="text-white bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] ">
      <AboutEDC JPG={JPG} />
      <Team  JPG={JPG} />
    </div>
    </div>
  )
}

export default About
