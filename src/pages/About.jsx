import React, { useEffect } from 'react'
import AboutEDC from '../components/aboutus'

const About = ({JPG}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white p-8">
      <AboutEDC JPG={JPG} />
    </div>
  )
}

export default About
