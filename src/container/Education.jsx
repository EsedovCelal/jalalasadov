import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../tools/motion2";
const Education = () => {
  return (
    <Element name="Education" className="text-[white] px-8 pt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-[80px]"
      >
        <p className="text-[60px]">Education</p>
        <p>
          Completed rigorous academic training in Computer Science, earning
          degrees from two top-tier institutions. Graduated with merit from the
          Technical University of Munich (TUM), Germany’s highest-ranked
          university, and obtained foundational expertise from Bilkent
          University, one of Turkey’s leading engineering schools. Recognized
          for outstanding academic performance and research contributions in
          sustainable technologies.
        </p>
      </motion.div>
      <div className="w-full border-2 border-gray-300 mb-[80px] hidden lg:block"></div>
      <div className="md:flex md:gap-20 md:justify-center">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="mb-4">
            <p className="text-[#2980B9]">Bilkent University</p>
            <p>Bachelor of Science, Computer Science</p>
            <p>2016-2020</p>
          </div>
          <ul className="list-disc">
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="mb-4">
            <p className="text-[#2980B9]">Bilkent University</p>
            <p>Bachelor of Science, Computer Science</p>
            <p>2016-2020</p>
          </div>
          <ul className="list-disc">
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
            <li>
              Graduated from one of Turkey’s top-ranked engineering universities
            </li>
          </ul>
        </motion.div>
      </div>
    </Element>
  );
};
export default Education;
