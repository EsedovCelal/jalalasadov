import { motion } from "framer-motion";
import { fadeIn } from "../tools/motion2";
import { Element } from "react-scroll";
import translations from "../translations";
import { useSelector } from "react-redux";
import Line_Text from "./Text_Line";
import jalalasadov from "../assets/img/jalalasadov.png";

const Home = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const styles = {
    section_one_img_box:
      "relative z-20 overflow-clip rounded-[10px] p-[5px] after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:h-[600px] after:w-[200px] after:bg-[#eeeeee] after:shadow-[0_0_10px_white,0_0_40px_white,0_0_80px_white] after:animate-[animate_10s_linear_infinite]",
  };
  return (
    <Element name="Home" className="px-8">
      <div className="pt-[15vh] md:pt-[10vh] text-[#EEEEEE]">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between py-[7vh]">
          <div className="w-full md:w-[70%]">
            <motion.div
              variants={fadeIn("down", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-3xl font-bold text-[1.5rem] uppercase"
              marginBottom={3}
            >
              {translations[language]["home"]["text1"]}
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="uppercase font-[700] lg:text-6xl  text-5xl font-bold py-8"
            >
              <span className="md:block inline">
                {translations[language]["home"]["Jalal"]}
              </span>
              <span> {translations[language]["home"]["Asadov"]}</span>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[1rem] text-base leading-normal mb-[15px]"
            >
              {translations[language]["home"]["text2"]}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <div className="relative">
                <div
                  className="absolute inset-0"
                  style={{ animation: "pulse 4s ease-in-out infinite" }}
                >
                  <div className="w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-30"></div>
                </div>
                <div
                  className="relative"
                  style={{ animation: "tilt 6s ease-in-out infinite" }}
                >
                  <div className="md:w-90 md:h-90 w-70 h-70 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-3xl shadow-2xl shadow-red-500/40 overflow-hidden">
                    <img
                      src={jalalasadov}
                      alt="jalalasadov"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-900/20"
                      style={{ animation: "pulse 5s ease-in-out infinite" }}
                    ></div>
                  </div>
                </div>
              </div>
              <style jsx>{`
                @keyframes tilt {
                  0%,
                  100% {
                    transform: perspective(400px) rotateY(0deg);
                  }
                  50% {
                    transform: perspective(400px) rotateY(15deg);
                  }
                }
              `}</style>
            </div>
          </motion.div>
        </div>
        <Line_Text />
      </div>
    </Element>
  );
};

export default Home;
