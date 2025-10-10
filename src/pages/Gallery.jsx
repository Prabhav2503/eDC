import React, { useEffect } from 'react'
import Navbar from "../components/navbar";

const Gallery = ({SVGs}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="absolute top-0 w-full z-20">
          <Navbar SVGs={SVGs} shrink={true} />
        </div>
    <div className="text-white p-8">
      <h1 className="text-3xl">Gallery (Placeholder)</h1>
      <p>This is the Gallery page.</p>
    </div>
    </div>
  )
}

export default Gallery
