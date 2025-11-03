import React, { useState } from 'react';
import lakshmisir from '../assets/lakshmisir.jpg';
import nikhilsir from '../assets/nikhilsir.jpeg';
import aloksir from '../assets/aloksir.jpeg';

const testimonials = [
  {
    NAME: 'Dr. Nikhil Agarwal',
    POR: 'MD FITT',
    description:
      '“In recent years, the Entrepreneurship Development Cell (eDC) at IIT Delhi has emerged as a vital catalyst in nurturing the spirit of innovation and entrepreneurship among students. Beyond enabling early-stage founders, eDC has successfully built an ecosystem that connects academia, industry, and investors transforming ideas into impactful ventures. Through its structured programs, mentorship initiatives, and unwavering student leadership, eDC has demonstrated how a student driven platform can inspire a new generation of problem solvers and change-makers. Their commitment to fostering innovation and responsible entrepreneurship reflects the larger vision of IIT Delhi and FITT to convert research and creativity into sustainable societal impact. We extend our appreciation to the eDC team for their dedication and foresight, and look forward to witnessing the greater milestones this vibrant community is poised to achieve in the years ahead.”',
    image: nikhilsir,
  },
  {
    NAME: 'Lakshmi Narayan Ramasubramanian',
    POR: 'Professor In-Charge, eDC, IIT Delhi',
    description:
      '“What began as a platform to encourage entrepreneurial curiosity has today become one of IIT Delhi’s most impactful student-led initiatives. The Entrepreneurship Development Cell has consistently empowered students to think beyond conventions, explore real-world challenges, and transform their ideas into ventures that make a difference. Through its blend of mentorship, industry engagement, and experiential learning, eDC has been successful to bridge the gap between academic knowledge and entrepreneurial execution. The dedication and leadership shown by our students reflect not just their potential but also IIT Delhi’s broader vision of driving innovation for societal good. It has been deeply fulfilling to witness eDC’s evolution into a community that truly embodies the spirit of responsible entrepreneurship and continues to inspire the changemakers of tomorrow.”',
    image: lakshmisir,
  },
  {
    NAME: 'Alok Mittal',
    POR: 'Co-founder and CEO of Indifi',
    description:
      '“Being part of eDC IIT Delhi’s journey has been a deeply rewarding experience both as an alumnus and as someone who believes in the power of entrepreneurship to drive change. Over the years, I’ve seen eDC grow from an enthusiastic student initiative into a structured, high-impact platform that genuinely supports young founders in turning ideas into scalable ventures. What stands out most is the maturity and initiative of the students, their ability to think critically, collaborate effectively, and execute with purpose. The Cell’s consistent efforts in building a strong entrepreneurial ecosystem through mentorship, competitions, and industry linkages have made IIT Delhi a breeding ground for the next wave of startup leaders. I’m proud to see eDC continuing to uphold the institute’s legacy of innovation, and I look forward to mentoring and supporting the bold ideas that will emerge from this incredible community in the years ahead.”',
    image: aloksir,
  },
];

const Card = ({ NAME, POR, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="md:h-[580px] lg:h-[460px] w-full bg-[#3B2486] rounded-2xl shadow-2xl p-[30px] md:px-[45px] md:py-[44px] flex flex-col lg:flex-row items-center gap-[20px] md:gap-[30px]">
      <img
        src={image}
        alt={`${NAME}`}
        className="w-32 md:size-[150px] lg:size-[300px] xl:size-[370px] rounded-2xl object-cover"
      />

      <div className="flex flex-col gap-[15px] lg:gap-[26px] md:h-[370px] text-white w-full">
        <div className="flex flex-col gap-[5px] text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px]">
          <p className="font-bold">{NAME}</p>
          <p>{POR}</p>
        </div>

        {/* Clamp on < md; un-clamp on md+ (no plugin needed) */}
        <p
          className={[
            'text-sm md:text-md xl:text-[17px]',
            expanded
              ? ''
              : [
                  '[display:var(--clamp-fallback,_-webkit-box)]',
                  '[-webkit-line-clamp:4]',
                  '[-webkit-box-orient:vertical]',
                  'overflow-hidden',
                  // unset clamp on md+
                  'md:[display:initial]',
                  'md:[-webkit-line-clamp:initial]',
                  'md:[-webkit-box-orient:initial]',
                  'md:overflow-visible',
                ].join(' '),
          ].join(' ')}
        >
          {description}
        </p>

        {/* Toggle only on small screens */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="md:hidden self-start underline underline-offset-4 mt-1"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="flex flex-col min-h-[1797px] w-full bg-white relative md:mb-[62px]">
      <div className="bg-[#2D1B66] h-[2700px] sm:h-[2200px] md:h-[2200px] lg:h-[1750px] w-full">
        <p className="text-white text-[50px] sm:text-[70px] md:text-[80px] lg:text-[96px] font-bold md:pl-[101px] pt-5 md:pt-10 lg:pt-[114px]">
          TESTIMONIALS
        </p>
      </div>

      {/* Floating testimonials container */}
      <div className="absolute w-full top-[150px] md:top-[200px] lg:top-[301px] px-[80px] md:px-[111px]">
        {testimonials.map((t, i) => (
          <div key={i} className="w-full mb-[45px] md:mb-[57px]">
            <Card {...t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
