import { motion } from "framer-motion";
import { fadeIn } from "../tools/motion2";
import jalalasadov from "../assets/img/jalalasadov.png";
import { Element } from "react-scroll";
import translations from "../translations";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
const About_me = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  return (
    <Element
      name="About me"
      className="flex justify-center px-8 text-[#EEEEEE] pt-[30px] md:pt-[120px]"
    >
      <div className="md:flex justify-between md:h-[500px] mb-[30px] lg:mb-0">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="md:flex md:flex-col place-content-around md:w-[60%] text-center md:text-left "
        >
          <span className="text-[3.25rem] capitalize">
            {translations[language]["about_me"]["about_me"]}
          </span>
          <span className="md:inline block text-[1rem]">
            {translations[language]["about_me"]["text1"]}
          </span>
          <span className="md:inline block mb-[30px] text-[1rem]">
            {translations[language]["about_me"]["text2"]}
          </span>
          <Link to="Projects" smooth={true} duration={900}>
            <button className=" mb-[30px] h-10 w-[150px] cursor-pointer text-[#EEEEEE] outline-[#EEEEEE] hover:bg-[#479b9c] hover:text-indigo-600 capitalize transition-all outline-1 rounded-[5px] ">
              {translations[language]["about_me"]["my_projects"]}
            </button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex md:flex-col  justify-center"
        >
          <div className="absolute bg-linear-to-br from-red-500 via-red-600 to-red-700 w-[260px] h-[400px] rounded-[80px] rotate-6 blur-sm opacity-60"></div>
          <div className="relative w-[260px] h-[400px] rounded-[80px] overflow-hidden shadow-2xl">
            <img
              src={jalalasadov}
              alt="jalalasadov"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </Element>
  );
};
export default About_me;
