import { motion } from "motion/react";
import { Box } from "@mui/material";
import jalalasadov from "../assets/img/jalalasadov.jpg";
const About_me = () => {
  return (
    <Box className="flex justify-between">
      <motion.div>
        <motion.spam>About me</motion.spam>
        <motion.h1>
          I'm Jalal Asadov, a Software Engineer passionate about creating
          scalable, data-driven applications that solve real-world problems.
          With over 3 years of professional experience and a Master’s degree in
          Computer Science from the Technical University of Munich (TUM), I
          combine strong academic foundations with practical expertise. I thrive
          in fast-paced environments and confidently take on projects—even those
          involving unfamiliar technologies—by rapidly mastering new stacks and
          delivering high-quality solutions that meet or exceed expectations.
        </motion.h1>
        <motion.h1>
          My technical toolkit includes Java, React, Node.js, AWS, and
          cloud-native technologies, enabling me to build efficient,
          user-focused systems across diverse domains. From automating complex
          workflows to developing educational platforms impacting hundreds of
          students, I am committed to clean code, collaboration, and continuous
          learning. I’m always eager to embrace meaningful challenges where I
          can apply my adaptability and drive to create lasting technological
          impact.
        </motion.h1>
        <motion.button>my projects</motion.button>
      </motion.div>
      <motion.div>
        <img src={jalalasadov} className="w-[400px] h-[400px]"></img>
      </motion.div>
    </Box>
  );
};
export default About_me;
