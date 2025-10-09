import React, { useEffect } from 'react'

const BeCon = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl">BeCon (Placeholder)</h1>
      <p>This is the BeCon page.</p>
    </div>
  )
}

export default BeCon
