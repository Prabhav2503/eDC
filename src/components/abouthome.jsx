import React from "react";

const AboutHome = ({ JPG }) => {
  return (
    <section className="w-full bg-transparent text-white py-20 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
    
      <div className="w-full h-full flex flex-col justify-center lg:w-1/2" style={{ fontFamily: "Poppins" }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left" style={{ fontFamily: "Montserrat" }}>
          About eDC IIT Delhi?
        </h2>
        <p className="text-gray-300 text-base md:text-xl leading-relaxed pb-50 text-center lg:text-left">
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
      {/* Added 'self-start' to the image container to align it to the top */}
      <div className="w-full lg:w-6/10 flex justify-center self-start">
        <img
          src={JPG.edcteam}
          alt="eDC IIT Delhi Team"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutHome;