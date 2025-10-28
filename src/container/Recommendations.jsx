import { Element } from "react-scroll";
import temp2 from "../assets/img/temp2.jpg";
import { fadeIn } from "../tools/motion2";
import { motion } from "framer-motion";
import translations from "../translations";
import { useSelector } from "react-redux";

const Recommendations = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  return (
    <Element name="Recommendations" className="text-white px-8 pt-[120px]">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <p className="text-4xl md:text-5xl lg:text-6xl text-center mb-[15px]">
          {translations[language]["recommendations"]["recommendations"]}
        </p>
        <p className="text-lg text-center mb-[50px]">
          {translations[language]["recommendations"]["text1"]}
        </p>
      </motion.div>
      <div className="w-full border-2 border-gray-300 hidden lg:block mb-[50px]"></div>
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex justify-center items-center ">
          <img src={temp2} className="w-full h-auto object-cover max-w-200" />
        </div>
        <div className="flex justify-center items-center">
          <a
            className="text-2xl text-[#479b9c] cursor-pointer pt-[20px]"
            href="https://www.linkedin.com/in/c%C9%99lal-%C9%99s%C9%99dov-ba404823b/"
          >
            {translations[language]["recommendations"]["linkedn"]}
          </a>
        </div>
      </motion.div>
    </Element>
  );
};
export default Recommendations;
