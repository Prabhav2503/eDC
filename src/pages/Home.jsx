import React, { use, useEffect } from "react";
import Landing from "../components/landing";
import AboutHome from "../components/abouthome";
import Incentive from "../components/incentive";
import Stats from "../components/stats";
import PastSpeakers from "../components/pastSpeakers";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/navbar";
import Testimonial from "../components/testimonial";

const Home = ({ JPG,SVGs,shrink, setShrink }) => {
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
        <div className={`sticky top-0 z-20 ${shrink ? 'bg-transparent' : 'bg-[#262626]/80'}`}>
          <Navbar SVGs={SVGs} shrink={shrink} />
        </div>
        <div className="sticky top-0">
          <Landing JPG={JPG} />
        </div>
        <div className="sticky top-0">
          {/* small divider gradient to visually separate landing and content on all sizes */}
          <div className="w-full bg-gradient-to-t from-[#0F0C29] to-transparent h-4" />
      <div ref={ref} className="bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
        
        <AboutHome JPG={JPG} />
        <Stats />
        <Incentive />
        <PastSpeakers />
        <Testimonial />
      </div>
        </div>
      </div>

);


};

export default Home;





      