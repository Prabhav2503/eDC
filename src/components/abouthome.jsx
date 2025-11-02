import React from "react";

 const AboutHome = ({JPG}) => {
  return (
    <section className="w-full bg-white py-16 px-8 md:px-16 lg:px-24">
      {/* Outer container: full width, with padding for spacing */}
      <div className="max-w-7xl mx-auto">

```
    {/* Heading Section */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
      What is eDC
    </h2>
    <div className="w-full h-[2px] bg-black mb-0" />

    {/* Content Row */}
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* Left Text Column */}
      <div className="md:w-2/3 text-sm md:text-base py-3 text-gray-800 leading-relaxed">
        <p>
          Entrepreneurship Development Cell (eDC), IIT Delhi is India’s largest student-driven organization committed to fostering a culture of innovation and entrepreneurship. Established in 2007, eDC has been at the forefront of empowering students, early-stage founders, and professionals to transform ideas into impactful ventures. Through a blend of experiential learning, mentorship, and industry engagement, eDC provides an enabling ecosystem where innovation thrives and ambition meets execution. At eDC, we don’t just encourage entrepreneurship - we enable it, empowering innovators to build what they believe in.
        </p>
      </div>

      {/* Right Image Column */}
      <div className="md:w-2/3 bg-gray-300 h-64 md:h-72 lg:h-80">
        {/* 👇 Replace the below div with your image */}
        <img src={JPG.edcteam} alt="Who We Are" className="w-full h-full object-cover" />
      </div>

    </div>
  </div>
</section>
  );
};

export default AboutHome;