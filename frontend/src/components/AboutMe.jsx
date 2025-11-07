import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-[var(--html-spacing)] flex justify-center border-t-purple-400 border-t-1">
      <div className="container  px-8">
        <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 tracking-wider text-center md:text-start drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent inline-block">
            &lt; ABOUT ME /&gt;
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mt-2 mx-auto"></div>
          </span>
        </h2>
        <div className="mt-12">
          <div className="px-6 lg:px-0 wrapper flex flex-col lg:flex-row gap-12">
            <div>
              <h3 className="text-lg lg:text-4xl text-white">
                Hey, I'm Sotiris. Welcome to my Portfolio. Since you're here, sit
                back, relax and take a look around.
              </h3>
            </div>
            <div>
              <p className="text-white/90 leading-relaxed">
                I'm a dedicated Front-End React Developer based in Thessaloniki,
                Greece. My professional objective is to secure a position within
                an innovative company, enabling me to contribute substantively to
                its success by delivering tangible business value.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Simultaneously, I am driven to further enhance my skills and
                expertise in software development.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                My passion lies in meticulously crafting pixel-perfect,
                cutting-edge interfaces that seamlessly integrate beautiful design
                with intuitively implemented User Experience (UX). This commitment
                underscores my dedication to staying at the forefront of industry
                trends and delivering innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
