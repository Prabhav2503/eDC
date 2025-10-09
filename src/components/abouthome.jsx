import React from "react";

const AboutHome = ({ JPG }) => {
  return (
    <section className="w-full bg-[#0D0F12] text-white py-20 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Side - Text */}
      <div className="w-full lg:w-1/2 text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About eDC IIT Delhi?
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          We empower young minds, early-stage startups, and professionals to
          think big, innovate fearlessly, and build impactful ventures. We
          partner in your journey by providing the right blend of learning,
          mentorship, and opportunities. Through workshops, bootcamps,
          hackathons, competitions, mentorship programmes and funding avenues,
          we create a thriving ecosystem to turn ideas into reality. With a
          strong legacy since 2007, eDC continues to inspire and shape the next
          generation of changemakers across India.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={JPG.iitbuilding}
          alt="eDC IIT Delhi Team"
          className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutHome;