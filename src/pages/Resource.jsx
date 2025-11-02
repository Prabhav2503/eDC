import React, { useEffect } from 'react'
import Blogs from '../components/blogs';
import Resources from '../components/resources';

const Resource = ({JPG,SVGs}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Resources JPG={JPG} />                                                                                                         
        <Blogs JPG={JPG} />
       </div>
  )
}

export default Resource;
