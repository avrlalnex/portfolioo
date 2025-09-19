import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About Me
      </h2>

      <div className="space-y-20">
        {/* Row 1 - Intro */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
          >
            <img
              src="./src/assets/grad.jpg"
              alt="About Me"
              className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div
            className="w-full md:w-1/2 text-lg leading-relaxed text-justify"
            data-aos="fade-left"
          >
            <p className="mb-4">
              👋 Hi, I’m Avril! I’m passionate about building clean, responsive,
              and user-friendly websites. My journey in tech has been fueled by
              curiosity and the drive to turn ideas into impactful digital
              experiences.
            </p>
            <p>
              🚀 I enjoy working with modern frameworks like React, TailwindCSS,
              and Vite. When I’m not coding, I explore design tools and
              experiment with UI/UX concepts to make my projects more
              user-friendly.
            </p>
          </div>
        </div>

        {/* Row 2 - Dance Journey */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
          >
            <img
              src="./src/assets/dance.jpg"
              alt="Dance Journey"
              className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div
            className="w-full md:w-1/2 text-lg leading-relaxed text-justify"
            data-aos="fade-right"
          >
            <p className="mb-4">
              💃 Dancing has always been part of my life since elementary. I was
              a <span className="font-semibold">majorette</span> in our Drum and
              Lyre Band, and in high school I was often chosen to lead and
              choreograph for school competitions.
            </p>
            <p className="mb-4">
              🎶 During senior high, I joined{" "}
              <span className="font-semibold">TDC (Tupi Dance Crew)</span> in my
              municipality, where I performed with passionate dancers and grew
              more in my craft.
            </p>
            <p>
              🏆 In college, I became part of{" "}
              <span className="font-semibold">Ciphers</span>, our cluster’s
              dance crew. We joined competitions within and outside the school,
              and I proudly served as the{" "}
              <span className="font-semibold">Secretary General</span>, honing
              my leadership and teamwork skills.
            </p>
          </div>
        </div>

        {/* Row 3 - Hobbies */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            data-aos="fade-right"
          >
            <img
              src="./src/assets/taek.jpg"
              alt="Taekwondo"
              className="w-full h-[250px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
            <img
              src="./src/assets/motor.jpg"
              alt="Motocross"
              className="w-full h-[250px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div
            className="w-full md:w-1/2 text-lg leading-relaxed text-justify"
            data-aos="fade-left"
          >
            <p className="mb-4">
              🎮 Aside from coding and dancing, I also enjoy{" "}
              <span className="font-semibold">gaming</span> , especially calming
              games that help me relax and recharge.
            </p>
            <p className="mb-4">
              🥋 I practiced{" "}
              <span className="font-semibold">Taekwondo</span>, which taught me
              discipline, perseverance, and focus.
            </p>
            <p>
              🏍️ I even joined{" "}
              <span className="font-semibold">motocross competitions</span>,
              pushing my limits and embracing challenges beyond my comfort zone.
            </p>
          </div>
        </div>

        {/* Row 4 - Collecting Figurines */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            data-aos="fade-left"
          >
            <img
              src="./src/assets/genshin.jpg"
              alt="Genshin Figurine"
              className="w-full h-[250px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
            <img
              src="./src/assets/one.jpg"
              alt="Anime Figurine"
              className="w-full h-[250px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div
            className="w-full md:w-1/2 text-lg leading-relaxed text-justify"
            data-aos="fade-right"
          >
            <p className="mb-4">
              🧸 I also enjoy{" "}
              <span className="font-semibold">collecting figurines</span> and
              small collectibles, they’re like little treasures that bring
              excitement to my space.
            </p>
            <p>
              My shelves are filled with characters from{" "}
              <span className="font-semibold">
                Star Wars, One Piece, Jujutsu Kaisen, Demon Slayer
              </span>{" "}
              and even{" "}
              <span className="font-semibold">Genshin Impact</span>! These
              collectibles reflect both my love for anime and gaming, and they
              inspire me with creativity every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
