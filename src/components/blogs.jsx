import React from "react";

// Dummy blog data
const blogsData = [
  {
    id: 1,
    title: "Everything about Tesla entering India",
    author: "E-Cell IIT Bombay",
    description: "Creating Job Creators",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    category: "Technology"
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence in Business",
    author: "Tech Innovators Hub",
    description: "Transforming Industries",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
    category: "AI & Tech"
  },
  {
    id: 3,
    title: "Startup Funding Strategies for 2025",
    author: "Venture Capital Weekly",
    description: "Investment Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    category: "Finance"
  },
  {
    id: 4,
    title: "Building Sustainable Business Models",
    author: "Green Business Forum",
    description: "Environmental Impact",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "The Rise of Indian Unicorns",
    author: "Startup India Magazine",
    description: "Success Stories",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop&crop=center",
    category: "Startups"
  },
  {
    id: 6,
    title: "Digital Marketing Trends for Entrepreneurs",
    author: "Marketing Masters",
    description: "Growth Strategies",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center",
    category: "Marketing"
  },
  {
    id: 7,
    title: "Blockchain Revolution in Finance",
    author: "Crypto Entrepreneurs",
    description: "Decentralized Future",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    category: "Blockchain"
  },
  {
    id: 8,
    title: "Women Leadership in Tech Industry",
    author: "Diversity & Inclusion Hub",
    description: "Breaking Barriers",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
    category: "Leadership"
  },
  {
    id: 9,
    title: "E-commerce Growth in Rural India",
    author: "Rural Business Network",
    description: "Market Expansion",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    category: "E-commerce"
  },
  {
    id: 10,
    title: "Innovation in Healthcare Technology",
    author: "MedTech Innovators",
    description: "Saving Lives",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    category: "Healthcare"
  },
  {
    id: 11,
    title: "The Future of Work: Remote vs Hybrid",
    author: "Workplace Evolution",
    description: "New Work Models",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=center",
    category: "Future of Work"
  },
  {
    id: 12,
    title: "Quantum Computing and Business Applications",
    author: "Quantum Research Lab",
    description: "Next-Gen Computing",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
    category: "Quantum Tech"
  }
];

// Blog Card Component
const BlogCard = ({ blog }) => {
  return (
    <div className="group cursor-pointer bg-[#1A2332] rounded-2xl overflow-hidden border border-gray-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Blog Image */}
      <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-white text-lg font-bold mb-3 line-clamp-2 ">
          {blog.title}
        </h3>

        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#193fbe] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {blog.author.split(' ').map(word => word[0]).join('').slice(0, 2)}
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
            <button className="p-2 rounded-full border border-gray-600/50 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300">
              <svg className="w-4 h-4 text-gray-400 hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-600/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
              <svg className="w-4 h-4 text-gray-400 hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
          
          <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

const Blogs = ({ JPG }) => {
  return (
    <div className="w-full bg-[#0A0E1A] text-white py-16">
      <div className="px-6 sm:px-8 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Latest Blogs
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and stories from the entrepreneurship world
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
    </div>
  );
};

export default Blogs;