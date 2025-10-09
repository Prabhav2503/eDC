import React, { useEffect } from 'react'

const Resources = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl">Resources (Placeholder)</h1>
      <p>This is the Resources page.</p>
    </div>
  )
}

export default Resources
