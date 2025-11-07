import React from "react";
import { technologies } from "../constants/technologies";

const Tech = () => {
  return (
    <section id="tech" className="py-[var(--html-spacing)] flex flex-col items-center">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-xl lg:text-4xl font-bold text-white mb-12 tracking-wider text-center md:text-start drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent inline-block">
            &lt; TECH I USE /&gt;
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mt-2 mx-auto"></div>
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-white/5 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/40 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>
              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-white text-sm font-medium text-center group-hover:text-purple-200 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
