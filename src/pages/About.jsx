import React, { useEffect } from 'react'
import AboutEDC from '../components/aboutus'

import Team from '../components/team';

const About = ({JPG,SVGs,PNG}) => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div  className="bg-white">
      {/* <AboutEDC JPG={JPG} /> */}
      <Team  JPG={JPG} PNG={PNG} />
    </div>
  )
}

export default About
