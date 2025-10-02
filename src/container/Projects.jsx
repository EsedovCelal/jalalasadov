import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import temp from "../assets/img/temp.jpg";
const Projects = () => {
  return (
    <Element name="Projects" className="text-[#EEEEEE] ">
      <div className="text-center">
        <p className="text-6xl text-center mb-[15px]">Projects</p>
      </div>
      <div>
        <p className="text-lg text-center">
          A selection of key projects showcasing my expertise in building
          scalable, maintainable, and user-focused software solutions. These
          projects reflect my ability to quickly learn new technologies, tackle
          complex challenges, and deliver high-quality results across diverse
          domains and tech stacks.
        </p>
        <div className="w-full border-2 border-gray-300 my-[80px] hidden lg:block"></div>
        <div>
          <div>
            <p>Green Destination Recommender</p>
            <p>Sep 2023 - Mar 2024</p>
            <p>
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
            <button></button>
          </div>
          <div>
            <img src={temp} className="w-[350px] h-[350px] " />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
