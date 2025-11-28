import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Experience from "./components/Experience"; 
import Portfolio from "./components/Portfolio";
import Prototypes from "./components/Prototypes";

function App() {
  const [theme, setTheme] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const scrollRef = useRef(null);

  // Set theme based on system preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const introPos = document.getElementById("intro").getBoundingClientRect().top;
      const experiencePos = document.getElementById("experience").getBoundingClientRect().top;
      const portfolioPos = document.getElementById("portfolio").getBoundingClientRect().top;
      const prototypesPos = document.getElementById("prototypes").getBoundingClientRect().top;
      const contactPos = document.getElementById("contact").getBoundingClientRect().top;

      if (contactPos <= 0) {
        setActiveSection("contact");
      } else if (prototypesPos <= 0) {
        setActiveSection("prototypes");
      } else if (portfolioPos <= 0) {
        setActiveSection("portfolio");
      } else if (experiencePos <= 0) {
        setActiveSection("experience");
      } else if (introPos <= 0) {
        setActiveSection("intro");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Apply theme to html element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {/* Theme switch button */}
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      {/* Floating Download CV button */}
      <a
  href="/portfolioo/assets/resume_linaza.pdf" // your CV file
  download
  className="
    fixed bottom-8 right-8 z-50
    bg-gradient-to-r from-purple-500 to-pink-500
    text-white px-4 py-3 rounded-full
    shadow-lg shadow-purple-400/50
    font-medium
    text-sm md:text-base
    flex items-center justify-center
    hover:scale-105 transition-transform duration-300
    animate-bounce
  "
>
  Download CV
</a>

      <div
        className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter"
        ref={scrollRef}
      >
        <div className="max-w-6xl w-11/12 mx-auto">
          <Intro id="intro" active={activeSection === "intro"} />
          <Experience id="experience" active={activeSection === "experience"} /> 
          <Portfolio id="portfolio" active={activeSection === "portfolio"} />
          <Prototypes id="prototypes" active={activeSection === "prototypes"} />
          <Contact id="contact" active={activeSection === "contact"} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
