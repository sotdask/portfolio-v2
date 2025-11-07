import React from "react";
import { Projects } from "../constants/projects";
import { ProjectCard } from "../assets/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Work = () => {
  return (
    <section id="projects" className="py-[var(--html-spacing)] flex flex-col items-center">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 tracking-wider text-center md:text-start drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent inline-block">
            &lt; PROJECTS /&gt;
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mt-2 mx-auto"></div>
          </span>
        </h2>
        <div className="mt-12 mb-8 w-full">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 40,
              },
            }}
            className="projects-swiper"
          >
            {Projects.map((item) => (
              <SwiperSlide key={item.id}>
                <ProjectCard project={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
