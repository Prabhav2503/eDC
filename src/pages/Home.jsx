import React, { use, useEffect } from "react";
import Landing from "../components/landing";
import AboutHome from "../components/abouthome";
import Incentive from "../components/incentive";
import Stats from "../components/stats";
import PastSpeakers from "../components/pastSpeakers";
import { useInView } from "react-intersection-observer";

const Home = ({ JPG, setShrink }) => {
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
    <div className="w-full h-full ">
      <Landing JPG={JPG} />
      <div ref={ref}>
        <AboutHome JPG={JPG} />
        <Stats />
        <Incentive />
        <PastSpeakers />

      </div>
    </div>
  );
};

export default Home;
