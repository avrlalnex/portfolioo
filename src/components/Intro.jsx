import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          Avril Lalaine
        </h1>

        <p className="text-base md:text-cl mb-6 font-medium">
          <Typewriter
            words={["Web Development", "UI/UX Design", "Tech Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 mt-4">
          <a
            href="https://github.com/avrlalnex"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000"
              alt="GitHub"
              className="w-10 h-10"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/avril-lalaine-linaza-297b0b262/?trk=opento_sprofile_topcard"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://img.icons8.com/?size=100&id=64154&format=png&color=000000"
              alt="LinkedIn"
              className="w-10 h-10"
            />
          </a>
          <a href="/resume.pdf" download="Avril-Lalaine-Resume.pdf">
            <img
              src="https://img.icons8.com/clouds/100/download.png"
              alt="Download Resume"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 animate-bounce text-gray-600 dark:text-gray-300 text-sm md:text-base">
  ↓ Scroll down to learn more about me ↓
</div>
    </section>
  );
}

export default Intro;
