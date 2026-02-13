import React, { useState, useEffect } from "react";
import { FiCpu, FiBookOpen, FiWifi } from "react-icons/fi";

const stats = [
  { id: 1, icon: FiCpu, value: 10, label: "Team members" },
  { id: 2, icon: FiBookOpen, value: 200, label: "Projects Completed" },
  { id: 3, icon: FiWifi, value: 50, label: "Active Clients" },
];

export default function StatsSection() {
  // Create state to store animated values
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => {
          if (val < stats[i].value) {
            // increment by a small amount
            const increment = Math.ceil(stats[i].value / 100);
            return Math.min(val + increment, stats[i].value);
          }
          return val;
        })
      );
    }, 20); // update every 20ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-14 bg-[#f8fafc] mb-10">
      <div className="w-[90%] bg-blue-600 text-white rounded-3xl flex flex-wrap items-center px-10 py-6">
        {/* Left Section */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="bg-blue-500 bg-opacity-40 p-12 rounded-xl text-2xl font-bold leading-snug text-center">
            ALWAYS <br /> HAPPY!
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full md:w-3/4 flex justify-around flex-wrap gap-10">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col items-center text-center">
                <div className="bg-white p-6 rounded-xl mb-4 shadow-sm">
                  <Icon size={40} className="text-blue-600" />
                </div>

                {/* Animated counter */}
                <h3 className="text-3xl font-semibold">{counters[index]}{item.id === 1 || item.id === 2 ? '+' : ''}</h3>
                <p className="text-white/90 text-lg">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
