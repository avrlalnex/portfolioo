import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience"; // ✅ new import
import Portfolio from "./components/Portfolio";
import Prototypes from "./components/Prototypes";

function App() {
  const [theme, setTheme] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const introPos = document.getElementById("intro").getBoundingClientRect().top;
      const aboutPos = document.getElementById("about").getBoundingClientRect().top;
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
      } else if (aboutPos <= 0) {
        setActiveSection("about");
      } else if (introPos <= 0) {
        setActiveSection("intro");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      <div
        className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter"
        ref={scrollRef}
      >
        <div className="max-w-6xl w-11/12 mx-auto">
          <Intro id="intro" active={activeSection === "intro"} />
          <About id="about" active={activeSection === "about"} />
          <Experience id="experience" active={activeSection === "experience"} /> {/* ✅ added */}
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
