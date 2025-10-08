import React from "react";
import { TrendingUp, Users, Calendar } from 'lucide-react';

const StatItem = ({ icon, endValue, label }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const nextValue = Math.floor(start + (endValue - start) * ease);

      if (nextValue <= endValue) {
        setValue(nextValue);
        requestAnimationFrame(animate);
      } else {
        setValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [endValue]);

  return (
    <div className="flex flex-col items-center justify-center w-3/10 h-full p-6 text-center  bg-gray-900 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105">
      <div className="text-blue-400 mb-2">{icon}</div>
      <div className="text-3xl font-bold text-blue-400">{value}+</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 items-center p-4 bg-gradient-to-r from-[#000046] to-[#1CB5E0] text-white">
        <StatItem icon={<TrendingUp />} endValue={50} label="Startups Incubated" />
        <StatItem icon={<Users />} endValue={10000} label="Social Media Reach" />
        <StatItem icon={<Calendar />} endValue={100} label="Events Hosted" />
      </div>
    </div>
  );
};
export default Stats;
