import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import tree from "../assets/Group.png";

// Dummy resources data
const resourcesData = [
  {
    id: 1,
    title: "We Put Google's Most Popular Tools Inside WordPress",
    description: "We partnered with Google to make Site Kit, and put tools like Analytics and Search Console inside WordPress... and into the hands of 5 million site owners.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop&crop=center",
    // tags: ["Backend", "Branding", "Design", "Research", "Web"],
    caseStudyLink: "#"
  },
  {
    id: 2,
    title: "Revolutionizing E-commerce with AI-Powered Analytics",
    description: "How we transformed online retail by implementing machine learning algorithms to predict customer behavior and optimize conversion rates for leading brands.",
    
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center",
    // tags: ["AI", "Analytics", "E-commerce", "Machine Learning", "UX"],
    caseStudyLink: "#"
  },
  {
    id: 3,
    title: "Building the Future of Remote Collaboration",
    description: "Creating seamless video conferencing experiences that connect teams worldwide. Our platform handles over 10 million daily meetings with zero downtime.",
   
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=500&fit=crop&crop=center",
    // tags: ["SaaS", "Video", "Collaboration", "Cloud", "Mobile"],
    caseStudyLink: "#"
  },
  {
    id: 4,
    title: "Transforming Healthcare Through Digital Innovation",
    description: "Developing telemedicine solutions that brought healthcare to rural communities, serving over 2 million patients during the global pandemic.",
    
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&crop=center",
    // tags: ["Healthcare", "Mobile", "Telemedicine", "IoT", "Security"],
    caseStudyLink: "#"
  },
  {
    id: 5,
    title: "Sustainable Energy Management Platform",
    description: "Building smart grid solutions that reduced energy consumption by 40% across major metropolitan areas through IoT sensors and predictive algorithms.",
    
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop&crop=center",
    // tags: ["Sustainability", "IoT", "Energy", "Smart Grid", "Analytics"],
    caseStudyLink: "#"
  },
  {
    id: 6,
    title: "Next-Generation Financial Services Platform",
    description: "Revolutionizing banking with blockchain technology and AI-driven fraud detection, processing over $1 billion in secure transactions daily.",
    company: "FinTech Pro",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop&crop=center",
    tags: ["Blockchain", "FinTech", "Security", "AI", "Mobile Banking"],
    caseStudyLink: "#"
  },
  {
    id: 7,
    title: "EdTech Platform for Global Learning",
    description: "Creating immersive online learning experiences with AR/VR technology, reaching over 5 million students across 50 countries worldwide.",
    company: "EduVerse",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&crop=center",
    // tags: ["EdTech", "AR/VR", "Mobile", "Gamification", "AI"],
    caseStudyLink: "#"
  },
  {
    id: 8,
    title: "Smart City Infrastructure Solutions",
    description: "Implementing IoT-based traffic management systems that reduced urban congestion by 35% and improved air quality in major cities.",
    company: "SmartCity Inc",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&crop=center",
    // tags: ["Smart City", "IoT", "Traffic", "Sustainability", "Big Data"],
    caseStudyLink: "#"
  }
];

// Resource Card Component
const ResourceCard = ({ resource, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`group cursor-pointer transform transition-all duration-700 mb-8 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative rounded-3xl overflow-hidden border border-gray-700/30 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/50 min-h-[400px] lg:min-h-[500px]">
        {/* Background Image */}
        <img
          src={resource.image}
          alt={resource.title}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center">
          {/* Company Badge */}
          <div className="mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 inline-block">
              <span className="text-white font-semibold text-sm">Google</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight max-w-2xl">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl">
            {resource.description}
          </p>

          {/* Case Study Link */}
          <div className="mb-8">
            <button className="inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-blue-300 transition-colors duration-300 group/btn">
              Read Case Study
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Tags
          <div className="flex flex-wrap gap-3 max-w-2xl">
            {resource.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Resources = ({ JPG }) => {

  const [visibleResources, setVisibleResources] = useState(4);
  
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const handleClick = () => {
  window.open("https://edciitd.notion.site/?v=d74695ec05bb4e98a9395ee263346b16", "_blank");
};

  const loadMoreResources = () => {
    setVisibleResources(prev => Math.min(prev + 4, resourcesData.length));
  };

  return (
    <div className="w-full bg-white text-white">
      
      <div className="relative w-full min-h-screen bg-[#2D1B66] overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-12 min-h-screen">
    
    {/* Left Side - Heading & Content */}
        <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10">
      
      {/* Heading with underline */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          RESOURCES
        </h1>
        <div className="h-[3px] bg-white w-[850px]"></div>
      </div>

      {/* Subtext */}
      <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl">
        Explore a curated list of resources to help you on your entrepreneurial journey.
      </p>

      {/* Notion Link Button */}
      <div>
        <button onClick={handleClick} className="border border-white text-white px-6 py-3 rounded-2xl text-base sm:text-lg font-medium hover:bg-white hover:text-[#221B52] transition-all duration-300">
          KNOWLEDGE BASE
        </button>
      </div>
    </div>

    {/* Right Side - Tree Image */}
    <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mb-0">
      {/* Replace below line with your actual image */}
      <img src={tree} alt="Resources Tree" className="size-150 object-contain" />
    </div>
  </div>



        {/* Background Pattern/Decoration */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 rounded-full"></div>
            <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
          </div>
        </div> */}
      </div>

      {/* Blogs Section - Keep as is */}
      </div>
  );
};


export default Resources;