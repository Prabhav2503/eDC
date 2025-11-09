import IIT from '../assets/IIT.jpg';
import initiatives from '../utility/initiative.jsx';

const AboutSection = ({ image, title, description, reverse = false }) => {
  const sectionClasses = ` sticky top-10 md:h-[400px] ${reverse
    ? 'w-full  bg-white text-[#2D1B69] py-12 flex flex-col items-center lg:flex-row justify-between px-6 gap-10'
    : 'w-full bg-[#2D1B69]  text-white py-12  flex flex-col px-6 lg:flex-row items-center justify-between gap-10'}`;

  return (
    <section className={sectionClasses}>
      <div className="w-full flex flex-col justify-center lg:w-full ">
        <h2
          className="text-4xl lg:text-8xl md:text-5xl font-bold mb-6 text-center lg:text-left"
          style={{ fontFamily: 'Inter' }}
        >
          {title}
        </h2>
        <p className=" text-base md:text-xl w-[900px] lg:text-base leading-relaxed text-center lg:text-left">
          {description}
        </p>
      </div>

      <div className="w-full lg:w-45/100  flex justify-center self-start">
        <img
          src={image}
          alt={title}
          className=" shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

const Initiative = ({ SVGs }) => {

  return (
    <div className="w-full">
      {/* Header Section - Full Width Purple Background */}
      <div className="w-full bg-[#2D1B69] pt-32 pb-16">
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mt-10 lg:text-7xl font-bold text-white mb-4">
            INITIATIVES
          </h1>
          <div className="w-full h-1 bg-white mb-2"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-md text-white font-light text-right">
            Comprehensive programs designed to support every stage of your entrepreneurial journey
          </p>
        </div>
      </div>

      {/* Content Section with Initiatives */}
      <div className="w-full  text-white py-16 ">
        <div className="w-full flex flex-col items-center justify-center gap-10">
          {Array.isArray(initiatives) &&
            initiatives.map((item, idx) => (
              <AboutSection
                key={`${item.title || 'initiative'}-${idx}`}
                title={item.title}
                description={item.description}
                image={item.image}
                reverse={idx % 2 === 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Initiative;
