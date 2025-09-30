import { Element } from "react-scroll";
import { motion } from "motion/react";
import { fadeInDown, fadeInLeft, fadeInRight } from "../tools/motion";
import { useInView } from "react-intersection-observer";
const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.03, // 30% animation will start
  });
  return (
    <Element name="Education" className="text-[white] mb-[100px] px-8">
      <motion.div
        variants={fadeInDown} // assign the variants
        ref={ref}
        initial="hidden" // start at "hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mt-[80px] mb-[80px]"
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
          variants={fadeInLeft} // assign the variants
          ref={ref}
          initial="hidden" // start at "hidden"
          animate={inView ? "visible" : "hidden"}
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
          variants={fadeInRight} // assign the variants
          ref={ref}
          initial="hidden" // start at "hidden"
          animate={inView ? "visible" : "hidden"}
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
