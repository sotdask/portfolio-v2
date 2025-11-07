import React from "react";

const Header = () => {
  return (
    <header className="fixed z-20 top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-2xl h-14 bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-4xl hidden md:flex items-center justify-center shadow-lg">
      <nav className="navbar hidden md:flex justify-center items-center pointer-events-auto  gap-x-12">
        <a
          href="#about"
          className="text-base lg:text-xl font-bold tracking-widest text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
        >
          ABOUT ME
        </a>
        <a
          href="#tech"
          className="text-base lg:text-xl font-bold tracking-widest text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
        >
          TECH I USE
        </a>
        <a
          href="#projects"
          className="text-base lg:text-xl font-bold tracking-widest text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="text-base lg:text-xl font-bold tracking-widest text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
        >
          CONTACT
        </a>
      </nav>
      <nav className="mobile hidden text-base font-bold tracking-widest text-white ">
    MENU
      </nav>
    </header>
  );
};

export default Header;
