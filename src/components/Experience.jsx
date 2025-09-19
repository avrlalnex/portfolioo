import React, { useState, useEffect } from "react";

// Experiences
const experiences = [
  { 
    id: 1, 
    img: "/src/assets/ssc.jpg", 
    title: "SSC President", 
    text: "Served as SSC President in high school, leading student programs and school initiatives while honing leadership and teamwork skills.", 
    year: "2019 - 2020"
  },
  { 
    id: 2, 
    img: "/src/assets/sec.jpg", 
    title: "Secretary General of Ciphers", 
    text: "Managed schedules, performances, and team coordination to keep the dance crew active and recognized.", 
    year: "2023 - 2025"
  },
  { 
    id: 3, 
    img: "/src/assets/ojt.jpg", 
    title: "Frontend Developer Intern at Infosoft", 
    text: "Built and improved user interfaces, applied classroom knowledge, and collaborated with a dev team.", 
    year: "June 2024 - July 2024"
  },
  { 
    id: 4, 
    img: "/src/assets/scholar.jpg", 
    title: "Ateneo de Davao University Scholar", 
    text: "Maintained high academic performance while balancing scholarship duties and personal growth.", 
    year: "2021 - 2025"
  },
];

function Experience() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle every 1.5s unless paused
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [paused]);

  const getPositionStyle = (index) => {
    if (index === current) return "translate-x-0 scale-100 z-20 opacity-100";
    if ((index + 1) % experiences.length === current)
      return "-translate-x-[32rem] scale-90 z-10 opacity-70 hover:scale-95 hover:opacity-100";
    if ((index + experiences.length - 1) % experiences.length === current)
      return "translate-x-[32rem] scale-90 z-10 opacity-70 hover:scale-95 hover:opacity-100";
    return "opacity-0 scale-75";
  };

  const handleHover = (index) => {
    setPaused(true);
    setCurrent(index);
  };

  const handleLeave = () => {
    setPaused(false);
  };

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-[1200px] h-[650px]">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            className={`absolute transition-all duration-700 ease-in-out transform w-[500px] h-[500px] border rounded-2xl shadow-xl bg-white dark:bg-stone-800 flex flex-col items-center justify-start p-6 cursor-pointer ${getPositionStyle(
              index
            )}`}
          >
            <img
              src={exp.img}
              alt={exp.title}
              className="rounded-xl mb-4 shadow-md w-full h-[250px] object-cover"
            />
            {/* Title */}
            <h3 className="text-lg font-bold text-center">
              {exp.title}
            </h3>
            {/* Explanation slightly lower than title */}
            <p className="text-sm italic leading-relaxed text-center mt-6 mb-4">
              {exp.text}
            </p>
            {/* Year stays at the bottom */}
            <span className="text-xs text-gray-500 dark:text-gray-400 italic">
              {exp.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
