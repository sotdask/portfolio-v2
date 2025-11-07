import React from "react";
import { techLogos } from "../assets/assets";

const HeroSection = () => {
  return (
    <div className="absolute px-12 inset-0 flex flex-col justify-center items-center z-10 pointer-events-none">
      <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-white text-center mb-4 tracking-wider drop-shadow-2xl">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          &lt; SOTIRIS DASKALOU /&gt;
        </span>
      </h1>
      <h2 className="text-xl font-bold lg:text-2xl xl:text-3xl text-white/90 text-center max-w-2xl mb-4 leading-relaxed drop-shadow-lg">
        Frontend Developer | Digital Artist
      </h2>
      <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl text-white/90 text-center max-w-2xl mb-8 leading-relaxed drop-shadow-lg">
        Let's Create Something Beautiful Together
      </h3>
      <div className="wrapper flex flex-col gap-6 md:flex-row md:gap-12">
        <a
          href="#projects"
          className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600/80 to-pink-500/80 border-2 border-purple-400/60 rounded-full cursor-pointer pointer-events-auto transition-all duration-300 ease-out backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </a>
        <a
          href="/sotdask-cv%20.pdf"
          download="Sotiris_Daskalou_CV.pdf"
          className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600/80 to-pink-500/80 border-2 border-purple-400/60 rounded-full cursor-pointer pointer-events-auto transition-all duration-300 ease-out backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Download My CV</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </a>
      </div>
      <div className="wrapper cursor-pointer pointer-events-auto flex-wrap flex justify-center gap-4 md:flex-nowrap lg:gap-8 bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 mt-12">
        <a
          href="tel:6940883297"
          className="group w-10 lg:w-full flex items-center justify-center md:p-2 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <img
            src={techLogos.telephone}
            alt="telephone"
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        </a>
        <a
          href="mailto:sotdaskalou@gmail.com"
          className="group w-10 lg:w-full flex items-center justify-center  md:p-2 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <img
            src={techLogos.email}
            alt="email"
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        </a>
        <a
          href="https://github.com/sotdask"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-10 lg:w-full flex items-center justify-center  md:p-2 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <img
            src={techLogos.github}
            alt="github"
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/sotdask"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-10 lg:w-full flex items-center justify-center  md:p-2 rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <img
            src={techLogos.linkedin}
            alt="linkedin"
            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
