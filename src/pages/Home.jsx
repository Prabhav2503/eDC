import React, { use, useEffect } from "react";
import Landing from "../components/landing";
import AboutHome from "../components/abouthome";
import Incentive from "../components/incentive";
import Stats from "../components/stats";
import PastSpeakers from "../components/pastSpeakers";
import { useInView } from "react-intersection-observer";
import ScrollStack, { ScrollStackItem } from '../components/scrollstack';

const Home = ({ JPG, setShrink }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    setShrink(inView);
  }, [inView]);

return (
  <ScrollStack className="w-full h-full" useWindowScroll={false}>
    <ScrollStackItem className="w-screen h-screen m-0 p-0 overflow-hidden">
      <Landing JPG={JPG} />
    </ScrollStackItem>
    <ScrollStackItem className="w-screen min-h-screen m-0 p-0 overflow-hidden">
      <div ref={ref} className="bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E]">
        <AboutHome JPG={JPG} />
        <Stats />
        <Incentive />
        <PastSpeakers />
      </div>
    </ScrollStackItem>
  </ScrollStack>
);


};

export default Home;





      