import jalalasadov from "../assets/img/jalalasadov.jpg";
import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import "./BlogPage.css";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeInLeft,
  underlineVariants,
} from "../tools/motion";

const Introduction_section = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isOpen = useSelector((state) => state.menu.isOpen);
  const styles = {
    link: "after:content-[''] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:text-[lightcoral] hover:[transition:color_0.9s_ease] text-[1.25rem] [transition:color_0.9s_ease] cursor-pointer relative ml-[20px] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:after:w-full",
  };
  const list_links = (
    <Box className={isMobile && "when_burger_isOpen"}>
      <Link className={styles.link}>About me</Link>
      <Link className={styles.link}>Experience</Link>
      <Link className={styles.link}>Education</Link>
      <Link className={styles.link}>Projects</Link>
      <Link className={styles.link}>Publications</Link>
      <Link className={styles.link}>Recommendations</Link>
    </Box>
  );
  return (
    <Box>
      {isOpen && list_links}
      <Box className="section_one_flex_box ">
        <Box className="section_one_texts_box ">
          <motion.div
            variants={fadeInDown} // assign the variants
            initial="hidden" // start at "hidden"
            animate="visible" // animate to "visible"
            className="text-3xl font-bold text-white text-[1.5rem]"
            marginBottom={3}
          >
            SOFTWARE ENGINEER | FRONT-END WEB DEVELOPER
          </motion.div>
          <motion.spam
            variants={fadeInLeft} // assign the variants
            initial="hidden" // start at "hidden"
            animate="visible" // animate to "visible"
            className="font-[700] text-white text-[3.75rem]"
          >
            JALAL
            <br />
            ASADOV
          </motion.spam>
          <motion.div
            variants={fadeInUp} // assign the variants
            initial="hidden" // start at "hidden"
            animate="visible" // animate to "visible"
            className="text-white text-[1.5rem] text-base leading-normal"
          >
            Merit graduate of TUM (22nd worldwide) with publications in ACM and
            Springer JITT. Creator of the internationally recognized Green
            Destination Recommender. Over 3 years of software engineering
            experience in Germany, delivering scalable, reliable full-stack
            solutions to real-world problems.
          </motion.div>
        </Box>
        <motion.div
          variants={fadeInRight} // assign the variants
          initial="hidden" // start at "hidden"
          animate="visible" // animate to "visible"
          className="section_one_img_box "
        >
          <img
            src={jalalasadov}
            className="w-[400px] h-[400px] bg-[#111] relative z-[99] rounded-[10px]"
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Introduction_section;
