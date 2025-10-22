import React from "react";
import {JPG,PNG} from '../utility/images';

// Team data objects
const coreTeam = {
  ekansh: {
    name: "Ekansh Agarwal",
    position: "Overall Coordinator",
    image: JPG.Ekansh,
  },
  tanmay: {
    name: "Tanmay Sharma",    
    position: "Overall Coordinator",
    image: JPG.Tanmay
  },
  xyz: {
    name: "xyz",
    position: "Overall Coordinator", 
    image: "https://via.placeholder.com/400x400/374151/FFFFFF?text=SV"
  },
  abc: {
    name: "abc",
    position: "Overall Coordinator",
    image: "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=VM"
  },
  pqr: {
    name: "pqr",
    position: "Overall Coordinator",
    image: "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=VM"
  }
};

const teamMembers = {
  tripti: {
    name: "Tripti",
    position: "AnF",
    image: JPG.Tripti
  },
  lmn: {
    name: "lmn", 
    position: "AnF ",
    image: "https://via.placeholder.com/400x400/6366F1/FFFFFF?text=PS"
  },
  chirag: {
    name: "Chirag Bhambri",
    position: "Corporate Relations",
    image: PNG.chirag
  },
  sarthak: {
    name: "Sarthak Gupta",
    position: "Corporate Relations", 
    image: PNG.Sarthak
  },
  nishka: {
    name: "Nishka Murarka",
    position: "Design",
    image: JPG.Nishka
  },
  pratibha: {
    name: "Pratibha Kashyap",
    position: "Design",
    image: PNG.Pratibha
  },
  xyz: {
    name: "xyz",
    position: "Design",
    image: "https://via.placeholder.com/400x400/0EA5E9/FFFFFF?text=DM"
  },
  dishit: {
    name: "Dishit Johari",
    position: "Events",
    image: JPG.Dishit
  },
  kabir: {
    name: "Kabir", 
    position: "Events",
    image: PNG.Kabir
  },
  lakshay: {
    name: "Lakshay Goel",
    position: "Marketing",
    image: JPG.Lakshay
  },
  sakshi: {
    name: "Sakshi Sharma",
    position: "Marketing",
    image: JPG.Sakshi
  },
  tejas: {
    name: "tejas Kamble",
    position: "Media",
    image: PNG.Tejas
  },
  pqr: {
    name: "pqr",
    position: "Media", 
    image: "https://via.placeholder.com/400x400/D946EF/FFFFFF?text=SP"
  },
  aghamarsh: {
    name: "Aghamarsh Chetluru",
    position: "OC Office",
    image: JPG.Aghamarsh
  },
  vaibhav: {
    name: "Vaibhav Pandey",
    position: "Startup Support",
    image: JPG.Vaibhav
  },
  mno: {
    name: "mno",
    position: "Startup Support",
    image: "https://via.placeholder.com/400x400/22C55E/FFFFFF?text=AA"
  },
  // rituVerma: {
  //   name: "Ritu Verma",
  //   position: "Partnership Head",
  //   image: "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=RV"
  // },
  // neerajKumar: {
  //   name: "Neeraj Kumar",
  //   position: "Logistics Head", 
  //   image: "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=NK"
  // },
  // poojaThakur: {
  //   name: "Pooja Thakur",
  //   position: "Alumni Relations",
  //   image: "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=PT"
  // }
};

// Team Card Component
const TeamCard = ({ member, isCore = false }) => {
  return (
    <div className="group cursor-pointer">
      <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl border border-gray-700/30 ${
        isCore ? 'min-h-[280px]' : 'min-h-[280px]'
      }`}>
        {/* Background Image that expands on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Normal state content */}
        <div className="relative z-10 p-8 text-center group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          {/* Profile Image with Zoom Effect */}
          <div className={`mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 ${
            isCore ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-36 lg:h-36' : 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
          }`}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Member Info */}
          <div className="space-y-2">
            <h3 className={`font-bold text-white ${
              isCore ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
            }`}>
              {member.name}
            </h3>
            <p className={`text-white font-medium ${
              isCore ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
            }`}>
              {member.position}
            </p>
          </div>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h3 className={`font-bold text-white text-center mb-2 ${
            isCore ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
          }`}>
            {member.name}
          </h3>
          <p className={`text-white font-medium text-center ${
            isCore ? 'text-lg lg:text-xl' : 'text-base lg:text-lg'
          }`}>
            {member.position}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = ({ JPG }) => {
    return (
        <div className="w-full bg-transparent text-white">
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
        {/* Core Team Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            CORE TEAM
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Core Team Members - custom layout: 3 on first row, 2 centered on second */}
       {/* Core Team Members - 3 on first row, 2 centered on second */}
{/* Core Team Members - 3 on first row, 2 centered on second */}
{
  (() => {
    const coreKeys = Object.keys(coreTeam);
    const firstRow = coreKeys.slice(0, 3);
    const secondRow = coreKeys.slice(3);

    return (
      <div className="mb-20 space-y-8">
        {/* First Row - exactly 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {firstRow.map((key) => (
            <div
              key={key}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
            >
              <TeamCard member={coreTeam[key]} isCore={true} />
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="flex justify-center gap-8 flex-wrap">
          {secondRow.map((key) => (
            <div
              key={key}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px]"
            >
              <TeamCard member={coreTeam[key]} isCore={true} />
            </div>
          ))}
        </div>
      </div>
    );
  })()
}

        {/* Additional Team Members Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            TEAM MEMBERS
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {Object.keys(teamMembers).map((key) => (
            <TeamCard 
              key={key}
              member={teamMembers[key]} 
              isCore={false}
            />
          ))}
        </div>
      </section>
        </div>
    )
}

export default Team;
