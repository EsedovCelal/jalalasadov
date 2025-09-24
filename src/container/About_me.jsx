import { motion } from "motion/react";
import jalalasadov from "../assets/img/jalalasadov.jpg";
import { fadeInLeft, fadeInRight } from "../tools/motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
const About_me = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // 30% animation will start
  });
  return (
    <Element
      name="About me"
      className="flex justify-center my-[40px] px-8 text-[#EEEEEE]"
    >
      <div className="md:flex mx-auto w-full justify-between max-w-[1300px] md:h-[500px] mb-[30px] lg:mb-[0]">
        <motion.div
          ref={ref}
          variants={fadeInLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:flex md:flex-col place-content-around mr-[40px] md:w-[60%] text-center md:text-left"
        >
          <span className="text-[3.25rem] capitalize">about me</span>
          <span className="md:inline block">
            I'm Jalal Asadov, a Software Engineer passionate about creating
            scalable, data-driven applications that solve real-world problems.
            With over 3 years of professional experience and a Master’s degree
            in Computer Science from the Technical University of Munich (TUM), I
            combine strong academic foundations with practical expertise. I
            thrive in fast-paced environments and confidently take on
            projects—even those involving unfamiliar technologies—by rapidly
            mastering new stacks and delivering high-quality solutions that meet
            or exceed expectations.
          </span>
          <span className="md:inline block mb-[30px]">
            My technical toolkit includes Java, React, Node.js, AWS, and
            cloud-native technologies, enabling me to build efficient,
            user-focused systems across diverse domains. From automating complex
            workflows to developing educational platforms impacting hundreds of
            students, I am committed to clean code, collaboration, and
            continuous learning. I’m always eager to embrace meaningful
            challenges where I can apply my adaptability and drive to create
            lasting technological impact.
          </span>
          <button className=" mb-[30px] h-[40px] w-[150px] cursor-pointer text-[#EEEEEE] outline-[#EEEEEE] bg-[#3E5F44] outline-1 rounded-[5px]">
            my projects
          </button>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeInRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-col place-content-around "
        >
          <img src={jalalasadov} className="img_about_me" />
        </motion.div>
      </div>
    </Element>
  );
};
export default About_me;
