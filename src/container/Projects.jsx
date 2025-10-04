import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import temp from "../assets/img/temp.jpg";
const Projects = () => {
  return (
    <Element name="Projects" className="text-[#EEEEEE] px-8">
      <div className="text-center">
        <p className="text-6xl text-center mb-[15px]">Projects</p>
        <p className="text-lg text-center mb-[50px]">
          A selection of key projects showcasing my expertise in building
          scalable, maintainable, and user-focused software solutions. These
          projects reflect my ability to quickly learn new technologies, tackle
          complex challenges, and deliver high-quality results across diverse
          domains and tech stacks.
        </p>
        <div className="w-full border-2 border-gray-300 hidden lg:block mb-[50px]"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <div className="text-center md:text-left">
            <p className="text-3xl">Green Destination Recommender</p>
            <p className="mb-[15px] font-thin">Sep 2023 - Mar 2024</p>
            <p className="text-md">
              Green Destination Recommender is a web-based application designed
              to promote responsible and sustainable tourism by providing
              personalized travel recommendations. It aligns users’
              preferences—such as departure city, travel month, and
              interests—with eco-friendly destinations that prioritize
              environmental conservation and social well-being. The platform
              evaluates transport options (train, driving, flight) and factors
              like CO₂ emissions, seasonal suitability, destination popularity
              via Google Trends, and travel duration to suggest sustainable
              routes and locations. Integrated mapping and detailed destination
              information guide users toward choices that minimize ecological
              impact while enhancing local community benefits. This project
              underscores the balance between personalized travel experiences
              and sustainability goals, encouraging users to make
              environmentally conscious decisions aligned with responsible
              tourism principles.
            </p>
            <div className="flex justify-center md:justify-start mt-3 text-green-400 cursor-pointer">
              <button className="text-2xl">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-green-400 rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]">
            <img
              src={temp}
              className="w-100 h-auto object-contain overflow-x-hidden"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
