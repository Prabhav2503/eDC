import React from "react";
import blogsData from "../utility/edc_blogs.js";

// Blog Card Component
const BlogCard = ({ blog }) => {
  return (
    <div className="group cursor-pointer bg-[#2D1B66] rounded-lg sm:rounded-xl overflow-hidden border border-gray-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Blog Image */}
      <div className="relative h-36 sm:h-48 md:h-52 lg:h-60 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Blog Content */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Title */}
        <h3 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 line-clamp-2">
          {blog.title}
        </h3>

        {/* Author Info */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#193fbe] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">
              {blog.author
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs sm:text-sm font-medium truncate">{blog.author}</p>
            <p className="text-gray-400 text-[10px] sm:text-xs truncate">{blog.description}</p>
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
            className="text-blue-400 text-xs sm:text-sm font-medium hover:text-blue-300 transition-colors duration-300 whitespace-nowrap"
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
    <div className="w-full bg-white text-white py-12 sm:py-16">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Header Section */}
        
          <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-2 sm:mb-3">
            LATEST BLOGS
          </h1>
          <div className="w-full h-[2px] sm:h-[3px] bg-black"></div>
        </div>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            Stay updated with the latest insights, trends, and stories from the
            entrepreneurship world            
          </p>
        </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
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
