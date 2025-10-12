import React from "react";
import ekansh from '../assets/ekansh.webp';
import chirag from '../assets/chirag.png';

// Team data objects
const coreTeam = {
  abhinavSrivastav: {
    name: "Ekansh Agarwal",
    position: "CO-OC",
    image: ekansh
  },
  rishavSaha: {
    name: "Rishav Saha", 
    position: "CO-OC",
    image: "https://via.placeholder.com/400x400/059669/FFFFFF?text=RS"
  },
  sanchitVijay: {
    name: "Sanchit Vijay",
    position: "CO-OC", 
    image: "https://via.placeholder.com/400x400/374151/FFFFFF?text=SV"
  },
  vipinshMehra: {
    name: "Vipinsh Mehra",
    position: "CO-OC",
    image: "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=VM"
  }
};

const teamMembers = {
  arunKumar: {
    name: "Chirag Bhambri",
    position: "Marketing Head",
    image: chirag
  },
  priyaSharma: {
    name: "Priya Sharma", 
    position: "Design Lead",
    image: "https://via.placeholder.com/400x400/6366F1/FFFFFF?text=PS"
  },
  rahulGupta: {
    name: "Rahul Gupta",
    position: "Tech Lead",
    image: "https://via.placeholder.com/400x400/14B8A6/FFFFFF?text=RG"
  },
  snehaDevi: {
    name: "Sneha Devi",
    position: "Events Head", 
    image: "https://via.placeholder.com/400x400/F97316/FFFFFF?text=SD"
  },
  vikashKumar: {
    name: "Vikash Kumar",
    position: "Finance Head",
    image: "https://via.placeholder.com/400x400/06B6D4/FFFFFF?text=VK"
  },
  anjaliPatel: {
    name: "Anjali Patel",
    position: "PR Head",
    image: "https://via.placeholder.com/400x400/84CC16/FFFFFF?text=AP"
  },
  mukeshSingh: {
    name: "Mukesh Singh",
    position: "Content Head",
    image: "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=MS"
  },
  kavyaJain: {
    name: "Kavya Jain", 
    position: "Research Head",
    image: "https://via.placeholder.com/400x400/F43F5E/FFFFFF?text=KJ"
  },
  arjunSaxena: {
    name: "Arjun Saxena",
    position: "Operations Head",
    image: "https://via.placeholder.com/400x400/10B981/FFFFFF?text=AS"
  },
  nehaTrivedi: {
    name: "Neha Trivedi",
    position: "Social Media Head",
    image: "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=NT"
  },
  devMalhotra: {
    name: "Dev Malhotra",
    position: "Web Developer",
    image: "https://via.placeholder.com/400x400/0EA5E9/FFFFFF?text=DM"
  },
  shwetaPandey: {
    name: "Shweta Pandey",
    position: "UI/UX Designer", 
    image: "https://via.placeholder.com/400x400/D946EF/FFFFFF?text=SP"
  },
  harshYadav: {
    name: "Harsh Yadav",
    position: "Photography Head",
    image: "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=HY"
  },
  sakshiMishra: {
    name: "Sakshi Mishra",
    position: "Video Editor",
    image: "https://via.placeholder.com/400x400/64748B/FFFFFF?text=SM"
  },
  amitAgarwal: {
    name: "Amit Agarwal",
    position: "Business Development",
    image: "https://via.placeholder.com/400x400/22C55E/FFFFFF?text=AA"
  },
  rituVerma: {
    name: "Ritu Verma",
    position: "Partnership Head",
    image: "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=RV"
  },
  neerajKumar: {
    name: "Neeraj Kumar",
    position: "Logistics Head", 
    image: "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=NK"
  },
  poojaThakur: {
    name: "Pooja Thakur",
    position: "Alumni Relations",
    image: "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=PT"
  }
};

// Team Card Component
const TeamCard = ({ member, isCore = false }) => {
  return (
    <div className="group cursor-pointer">
      <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl border border-gray-700/30 ${
        isCore ? 'min-h-[320px]' : 'min-h-[280px]'
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
            isCore ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40' : 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
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
        <div className="w-full bg-[#0A0E1A] text-white">
            <section className="px-6 sm:px-8 md:px-12 lg:px-20 py-16">
        {/* Core Team Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            CORE TEAM
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Core Team Members - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {Object.keys(coreTeam).map((key) => (
            <TeamCard 
              key={key}
              member={coreTeam[key]} 
              isCore={true}
            />
          ))}
        </div>
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
