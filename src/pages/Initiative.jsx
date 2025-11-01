import IIT from '../assets/IIT.jpg';
import Navbar from '../components/navbar';
import initiatives from '../utility/initiative.jsx';

const AboutSection = ({ image, title, description, reverse = false }) => {
  const sectionClasses = ` sticky top-10 ${reverse
    ? 'w-full  bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70  rounded-2xl text-white py-12 px-6 flex flex-col lg:flex-row-reverse items-center justify-between gap-10'
    : 'w-full bg-[#101c30] rounded-2xl text-white py-12 px-6 flex flex-col lg:flex-row items-center justify-between gap-10'}`;

  return (
    <section className={sectionClasses}>
      <div className="w-full flex flex-col justify-center lg:w-60/100">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left"
          style={{ fontFamily: 'Montserrat' }}
        >
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-xl leading-relaxed text-center lg:text-left">
          {description}
        </p>
      </div>

      <div className="w-full lg:w-45/100 flex justify-center self-start">
        <img
          src={image || IIT}
          alt={title}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

const Initiative = ({ shrink, SVGs }) => {

  return (
    <div>
      <div className="absolute top-0 w-full z-20">
        <Navbar SVGs={SVGs} shrink={true} />
      </div>

      <div className="w-full bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] text-white flex flex-col items-center justify-center  py-30">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-7xl font-bold mb-6">Our Initiatives</h2>
          <p className="text-3xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive programs designed to support every stage of your entrepreneurial journey
          </p>
        </div>

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
