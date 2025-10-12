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
    <div  className="text-white ">
      <AboutEDC JPG={JPG} />
      <Team  JPG={JPG} />
    </div>
    </div>
  )
}

export default About
