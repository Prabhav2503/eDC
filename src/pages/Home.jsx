import React, { use, useEffect } from "react";
import Landing from "../components/landing";
import AboutHome from "../components/abouthome";
import Incentive from "../components/incentive";
import Stats from "../components/stats";
import PastSpeakers from "../components/pastSpeakers";
import { useInView } from "react-intersection-observer";
import Testimonial from "../components/testimonial";

const Home = ({ JPG,SVGs, PNG }) => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);





return (
      <div className="bg-white">

        <div className="sticky top-0">
          <Landing JPG={JPG} Landing={Landing} SVGs={SVGs} />
        </div>
        <div className="sticky top-0">
          <div className="bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
            <AboutHome JPG={JPG} />
            <Stats JPG={JPG} />
            <Incentive />
            <PastSpeakers PNG={PNG} />
            <Testimonial />
        </div>
        </div>
      </div>

);


};

export default Home;





      