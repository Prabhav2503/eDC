import React, { useEffect } from 'react'

const Gallery = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl">Gallery (Placeholder)</h1>
      <p>This is the Gallery page.</p>
    </div>
  )
}

export default Gallery
