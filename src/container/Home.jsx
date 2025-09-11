import jalalasadov from "../assets/img/jalalasadov.jpg";
import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import "./BlogPage.css";
import { fadeInUp, fadeInDown, fadeInRight, fadeInLeft } from "../tools/motion";
import { Element } from "react-scroll";

const Home = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const styles = {
    link: "after:content-[''] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:text-[lightcoral] hover:[transition:color_0.9s_ease] text-[1.25rem] [transition:color_0.9s_ease] cursor-pointer relative ml-[20px] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:after:w-full",
    list_links:
      "min-[1280px]:hidden flex flex-col items-center justify-evenly h-1/2 w-screen left-[0] absolute z-10 text-[1.25rem] bg-[rgba(255,_255,_255,_0.7)] backdrop-filter backdrop-blur",
    section_one_flex_box: {
      marginTop: "50px", // my-[40px]
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      zIndex: "1",
      marginBottom: "50px", // my-[40px]
      width: "70%",
    },
  };
  const list_links = (
    <Box className={styles.list_links}>
      <Link className={styles.link}>About me</Link>
      <Link className={styles.link}>Experience</Link>
      <Link className={styles.link}>Education</Link>
      <Link className={styles.link}>Projects</Link>
      <Link className={styles.link}>Publications</Link>
      <Link className={styles.link}>Recommendations</Link>
    </Box>
  );
  return (
    <Element name="Home">
      <Box className="flex justify-center">
        {isOpen && list_links}
        <Box style={styles.section_one_flex_box}>
          <Box className="section_one_texts_box ">
            <motion.div
              variants={fadeInDown} // assign the variants
              initial="hidden" // start at "hidden"
              animate="visible" // animate to "visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="text-3xl font-bold text-[#EEEEEE] text-[1.5rem]"
              marginBottom={3}
            >
              SOFTWARE ENGINEER | FRONT-END WEB DEVELOPER
            </motion.div>
            <motion.spam
              variants={fadeInLeft} // assign the variants
              initial="hidden" // start at "hidden"
              animate="visible" // animate to "visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="font-[700] text-[#EEEEEE] text-[3.75rem]"
            >
              JALAL
              <br />
              ASADOV
            </motion.spam>
            <motion.div
              variants={fadeInUp} // assign the variants
              initial="hidden" // start at "hidden"
              animate="visible" // animate to "visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="text-[#EEEEEE] text-[1.5rem] text-base leading-normal"
            >
              Merit graduate of TUM (22nd worldwide) with publications in ACM
              and Springer JITT. Creator of the internationally recognized Green
              Destination Recommender. Over 3 years of software engineering
              experience in Germany, delivering scalable, reliable full-stack
              solutions to real-world problems.
            </motion.div>
          </Box>
          <motion.div
            variants={fadeInRight} // assign the variants
            initial="hidden" // start at "hidden"
            animate="visible" // animate to "visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="section_one_img_box "
          >
            <img
              src={jalalasadov}
              className="w-[400px] h-[400px] bg-[#111] relative z-[99] rounded-[10px]"
            />
          </motion.div>
        </Box>
      </Box>
    </Element>
  );
};

export default Home;
