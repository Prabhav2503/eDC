import React from "react";
import blogsData from "../utility/edc_blogs.js";

// Blog Card Component
const BlogCard = ({ blog }) => {
  return (
    <div className="group cursor-pointer bg-[#2D1B66] rounded-xl overflow-hidden border border-gray-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Blog Image */}
      <div className="relative h-40 sm:h-52 lg:h-60 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-fit transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-white text-base font-semibold mb-3 line-clamp-2 ">
          {blog.title}
        </h3>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#193fbe] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {blog.author
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">{blog.author}</p>
            <p className="text-gray-400 text-xs">{blog.description}</p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            
          </div>

          <a
            href={blog.postURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

const Blogs = ({ JPG }) => {
  return (
    <div className="w-full bg-transparent text-white py-16">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Header Section */}
        
          <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl text-black lg:text-5xl font-bold mb-2">
            LATEST BLOGS
          </h1>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
        <div className="text-center">
          <p className="text-black text-lg  md:text-xl max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and stories from the
           <p>entrepreneurship world</p>             
          </p>
        </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20 md:px-[60px] lg:gap-8">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Load More Articles
          </button>
        </div> */}
      </div>
    
  );
};

export default Blogs;
