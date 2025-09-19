import jalalasadov from "../assets/img/jalalasadov.jpg";
import { Box } from "@mui/material";
import { motion } from "motion/react";
import { fadeInUp, fadeInDown, fadeInRight, fadeInLeft } from "../tools/motion";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import translations from "../translations";
import { useSelector } from "react-redux";

const Home = () => {
  const language = useSelector((state) => state.language.defaultlanguage);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // 30% animation will start
  });
  return (
    <Element name="Home" className="px-8">
      <Box className="flex justify-center pt-20 text-[#EEEEEE] ">
        <Box className="my-[50px] flex flex-row items-center justify-between relative z-[1] max-w-[1300px]">
          <Box className="section_one_texts_box ">
            <motion.div
              variants={fadeInDown} // assign the variants
              ref={ref}
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl font-bold text-[1.5rem] uppercase"
              marginBottom={3}
            >
              {translations[language]["home"]["text1"]}
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInLeft} // assign the variants
              className="font-[700] text-[3.75rem]"
            >
              {translations[language]["home"]["Jalal"]}
              <br />
              {translations[language]["home"]["Asadov"]}
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeInUp} // assign the variants
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[1.5rem] text-base leading-normal"
            >
              {translations[language]["home"]["text2"]}
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
