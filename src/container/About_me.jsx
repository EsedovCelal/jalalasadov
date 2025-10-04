import { motion } from "motion/react";
import jalalasadov from "../assets/img/jalalasadov.png";
import { fadeInLeft, fadeInRight } from "../tools/motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import translations from "../translations";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
const About_me = () => {
  const language = useSelector((state) => state.language.defaultlanguage);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4, // 3% animation will start
  });
  return (
    <Element
      name="About me"
      className="flex justify-center my-[40px] px-8 text-[#EEEEEE]"
    >
      <div className="md:flex justify-between md:h-[500px] mb-[30px] lg:mb-[0]">
        <motion.div
          ref={ref}
          variants={fadeInLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:flex md:flex-col place-content-around mr-[40px] md:w-[60%] text-center md:text-left "
        >
          <span className="text-[3.25rem] capitalize">
            {translations[language]["about_me"]["about_me"]}
          </span>
          <span className="md:inline block">
            {translations[language]["about_me"]["text1"]}
          </span>
          <span className="md:inline block mb-[30px]">
            {translations[language]["about_me"]["text2"]}
          </span>
          <Link to="Projects" smooth={true} duration={900} offset={-120}>
            <button className=" mb-[30px] h-[40px] w-[150px] cursor-pointer text-[#EEEEEE] outline-[#EEEEEE] bg-[#3E5F44] outline-1 rounded-[5px]">
              {translations[language]["about_me"]["my_projects"]}
            </button>
          </Link>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeInRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-col place-content-around "
        >
          <img
            src={jalalasadov}
            className="img_about_me object-cover object-left"
          />
        </motion.div>
      </div>
    </Element>
  );
};
export default About_me;
