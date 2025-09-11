import { motion } from "motion/react";
import jalalasadov from "../assets/img/jalalasadov.jpg";
import { fadeInLeft } from "../tools/motion";
import { Element } from "react-scroll";
const About_me = () => {
  return (
    <Element name="About me">
      <div className="flex justify-center my-[40px] ">
        <div className="flex justify-between w-[70%] h-[500px]">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="flex flex-col place-content-around mr-[40px]"
          >
            <motion.spam className="text-[3.25rem] text-[#EEEEEE] capitalize">
              about me
            </motion.spam>
            <motion.h1 className="text-[#EEEEEE]">
              I'm Jalal Asadov, a Software Engineer passionate about creating
              scalable, data-driven applications that solve real-world problems.
              With over 3 years of professional experience and a Master’s degree
              in Computer Science from the Technical University of Munich (TUM),
              I combine strong academic foundations with practical expertise. I
              thrive in fast-paced environments and confidently take on
              projects—even those involving unfamiliar technologies—by rapidly
              mastering new stacks and delivering high-quality solutions that
              meet or exceed expectations.
            </motion.h1>
            <motion.h1 className="text-[#EEEEEE]">
              My technical toolkit includes Java, React, Node.js, AWS, and
              cloud-native technologies, enabling me to build efficient,
              user-focused systems across diverse domains. From automating
              complex workflows to developing educational platforms impacting
              hundreds of students, I am committed to clean code, collaboration,
              and continuous learning. I’m always eager to embrace meaningful
              challenges where I can apply my adaptability and drive to create
              lasting technological impact.
            </motion.h1>
            <motion.button className="h-[40px] w-[150px] text-[#EEEEEE] outline-[#EEEEEE] bg-[#00ADB5] outline-1 rounded-[5px]">
              my projects
            </motion.button>
          </motion.div>
          <motion.div className="flex flex-col place-content-around">
            <img src={jalalasadov} className="w-[400px] h-[400px]"></img>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};
export default About_me;
