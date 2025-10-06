import React, { use, useEffect } from 'react'
import Landing from '../components/landing'
import AboutUs from '../components/aboutus'
import Incentive from "../components/incentive"
import Stats from '../components/stats'
import PastSpeakers from '../components/pastSpeakers'
import { useInView } from 'react-intersection-observer'

 const Home = ({JPG, setShrink}) => {
  const { ref, inView } = useInView({
  threshold: 0.01, // Trigger when 1% of the element is visible
  rootMargin: '10px', // Extend the trigger area by 10px
});
  useEffect(()=>{
    console.log(inView)
    setShrink(inView)
  }, [inView])
  return (
    <div className='w-full h-full '>
        <Landing JPG={JPG}/>
        <AboutUs JPG={JPG}/>
        <Stats ref={ref} />
        <AboutUs JPG={JPG}/>
        <PastSpeakers />
        {/* <Incentive /> */}
       
    </div>
  )
}

export default Home
