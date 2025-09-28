import jalalasadov from "../assets/img/jalalasadov.png";
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
    threshold: 0.03, // 30% animation will start
  });
  const styles = {
    section_one_img_box:
      "relative z-20 overflow-clip rounded-[10px] p-[5px] after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:h-[600px] after:w-[200px] after:bg-[#eeeeee] after:shadow-[0_0_10px_white,0_0_40px_white,0_0_80px_white] after:animate-[animate_10s_linear_infinite]",
  };
  return (
    <Element name="Home" className="px-8">
      <div className="pt-20 text-[#EEEEEE]">
        <div className="text-center md:text-left my-[50px] flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <div>
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
              className="uppercase font-[700] lg:text-6xl  text-5xl font-bold py-8"
            >
              <span className="md:block inline">
                {translations[language]["home"]["Jalal"]}
              </span>
              <span> {translations[language]["home"]["Asadov"]}</span>
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeInUp} // assign the variants
              initial="hidden" // start at "hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[1.2rem] text-base leading-normal mb-[15px]"
            >
              {translations[language]["home"]["text2"]}
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            variants={fadeInRight} // assign the variants
            initial="hidden" // start at "hidden"
            animate={inView ? "visible" : "hidden"}
            className={styles.section_one_img_box}
          >
            <img
              src={jalalasadov}
              className="w-[400px] h-[400px] bg-[#111] relative z-[99] rounded-[10px] object-cover object-left"
            />
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
