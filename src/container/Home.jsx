import jalalasadov from "../assets/img/jalalasadov.jpg";
import { Box } from "@mui/material";
import { motion } from "motion/react";
import "./BlogPage.css";
import { fadeInUp, fadeInDown, fadeInRight, fadeInLeft } from "../tools/motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const styles = {
    section_one_flex_box: {
      marginTop: "50px", // my-[50px]
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      zIndex: "1",
      marginBottom: "50px", // my-[50px]
      width: "80%",
    },
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // 30% animation will start
  });
  return (
    <Element name="Home">
      <Box className="flex justify-center mt-20">
        <Box style={styles.section_one_flex_box}>
          <Box className="section_one_texts_box ">
            <motion.div
              variants={fadeInDown} // assign the variants
              ref={ref}
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl font-bold text-[#EEEEEE] text-[1.5rem]"
              marginBottom={3}
            >
              SOFTWARE ENGINEER | FRONT-END WEB DEVELOPER
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInLeft} // assign the variants
              className="font-[700] text-[#EEEEEE] text-[3.75rem]"
            >
              JALAL
              <br />
              ASADOV
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeInUp} // assign the variants
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
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
            ref={ref}
            variants={fadeInRight} // assign the variants
            initial="hidden" // start at "hidden"
            animate={inView ? "visible" : "hidden"}
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
