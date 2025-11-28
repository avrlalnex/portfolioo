import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const aboutCards = [
  {
    id: 1,
    img: "/portfolioo/assets/grad.jpg",
    title: "About Me",
    text: "I’m Avril, a Computer Science graduate passionate about building clean, responsive, and user-centered websites. I enjoy working with React, TailwindCSS, and modern UI/UX design.",
  },
  {
    id: 2,
    img: "/portfolioo/assets/dance.jpg",
    title: "My Dance Journey",
    text: "Dancing has been part of my life since elementary. I’ve choreographed, led performances, and in college, I became Secretary General of our dance crew, Ciphers.",
  },
  {
    id: 3,
    img: "/portfolioo/assets/genshin.jpg",
    title: "Hobbies & Collections",
    text: "I enjoy relaxing games and collecting figurines from anime and games. These little collectibles inspire creativity and bring personality to my workspace.",
  },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full max-w-[1600px]">
        {aboutCards.map((card, index) => (
          <div
            key={card.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="
              w-[500px] h-[500px]
              border rounded-2xl shadow-xl bg-white dark:bg-stone-800
              p-6 flex flex-col items-center
              transition-transform duration-300
              hover:scale-105 hover:shadow-2xl
              cursor-pointer
            "
          >
            <div className="w-full h-[250px] overflow-hidden rounded-xl mb-4 shadow-md">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-bold text-center mb-3">{card.title}</h3>
            <p className="text-sm italic leading-relaxed text-center">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
