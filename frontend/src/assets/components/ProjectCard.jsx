import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
      <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full text-white text-xs font-bold shadow-lg">
          LIVE
        </div>
      </div>
      <div className="p-5 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/80 backdrop-blur-sm text-white flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies &&
            project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-xs text-purple-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
        </div>
         <div className="wrapper flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={project.githubLink} target="_blank"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-center block"
          >
            View Repository
          </a>
          <a
            href={project.projectPage} target="_blank"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm  text-white font-bold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-center block"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
