import { Element } from "react-scroll";
import { fadeIn } from "../tools/motion2";
import { motion } from "framer-motion";
import m1_project from "../assets/img/m1_project.png";
import m2_project from "../assets/img/m2_project.png";
import m3_project from "../assets/img/m3_project.png";
import m4_project from "../assets/img/m4_project.png";
const Projects = () => {
  return (
    <Element name="Projects" className="text-[#EEEEEE] px-8  pt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <p className="text-6xl text-center mb-[15px]">Projects</p>
        <p className="text-lg text-center mb-[50px]">
          A selection of key projects showcasing my expertise in building
          scalable, maintainable, and user-focused software solutions. These
          projects reflect my ability to quickly learn new technologies, tackle
          complex challenges, and deliver high-quality results across diverse
          domains and tech stacks.
        </p>
        <div className="w-full border-2 border-gray-300 hidden lg:block mb-[50px]"></div>
      </motion.div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left w-full md:w-[70%]"
          >
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
            <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
              <button className="text-2xl ">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-[#479b9c] rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]"
          >
            <img
              src={m1_project}
              className="w-full max-w-md h-auto mx-auto object-cover overflow-x-hidden"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left w-full md:w-[70%]"
          >
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
            <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
              <button className="text-2xl ">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-[#479b9c] rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]"
          >
            <img
              src={m2_project}
              className="w-full max-w-md h-auto mx-auto object-cover overflow-x-hidden"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left w-full md:w-[70%]"
          >
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
            <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
              <button className="text-2xl ">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-[#479b9c] rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]"
          >
            <img
              src={m3_project}
              className="w-full max-w-md h-auto mx-auto object-cover overflow-x-hidden"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left w-full md:w-[70%]"
          >
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
            <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
              <button className="text-2xl ">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-[#479b9c] rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]"
          >
            <img
              src={m4_project}
              className="w-full max-w-md h-auto mx-auto object-cover overflow-x-hidden"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left w-full md:w-[70%]"
          >
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
            <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
              <button className="text-2xl ">View</button>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 bg-[#479b9c] rounded-full ml-2 text-white"
              >
                <path
                  className="text-[EEEEEE]"
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px]"
          >
            <img
              src={m1_project}
              className="w-full max-w-md h-auto mx-auto object-cover overflow-x-hidden"
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
