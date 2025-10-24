import { Element } from "react-scroll";
import { fadeIn } from "../tools/motion2";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import translations from "../translations";
const Projects = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const list = [];
    let i = 0;
    while (translations[language]["projects"][`project${i}`]) {
      list.push(translations[language]["projects"][`project${i}`]);
      i++;
    }
    setProjectList(list);
  }, [language]);
  return (
    <Element name="Projects" className="text-[#EEEEEE] px-8  pt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center"
      >
        <p className="text-6xl text-center mb-[15px]">
          {translations[language]["projects"]["projects"]}
        </p>
        <p className="text-lg text-center mb-[50px]">
          {translations[language]["projects"]["text1"]}
        </p>
        <div className="w-full border-2 border-gray-300 hidden lg:block mb-[50px]"></div>
      </motion.div>
      <div className="flex items-center justify-center flex-col">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 max-w-[900px] items-center justify-center mb-[50px]"
          >
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="text-center md:text-left w-full md:w-[70%]"
            >
              <p className="text-3xl">{project.name}</p>
              <p className="mb-[15px] font-thin">{project.during}</p>
              <p className="text-md font-light">{project.description}</p>
              <div className="flex justify-center md:justify-start mt-3 text-[#479b9c] cursor-pointer">
                <a className="text-2xl flex items-center" href={project.link}>
                  {translations[language]["projects"]["view"]}
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
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="border-white border transition-transform duration-400 ease-in-out hover:scale-110 rounded-[10px] overflow-hidden"
            >
              <img
                src={project.photo}
                className="w-full max-w-md h-auto mx-auto object-cover"
                alt={`m${index}_project`}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
