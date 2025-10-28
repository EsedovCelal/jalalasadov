import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../tools/motion2";
import translations from "../translations";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Education = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const [edu_list, setEdu_list] = useState([]);
  const [edu_title, setEdu_title] = useState([]);
  useEffect(() => {
    const list = [];
    let a = 0;
    while (translations[language]["education"][`education${a}`]) {
      list.push(translations[language]["education"][`education${a}`]);
      a++;
    }
    setEdu_list(list);
  }, [language]);
  return (
    <Element name="Education" className="text-[white] px-8 pt-[120px]">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center mb-[80px]"
      >
        <p className="text-[60px]">
          {translations[language]["education"]["education"]}
        </p>
        <p>{translations[language]["education"]["text1"]}</p>
      </motion.div>
      <div className="w-full border-2 border-gray-300 mb-[80px] hidden lg:block"></div>
      <div className="md:flex md:gap-20 md:justify-center">
        {edu_list.map((edu, index) => (
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="mb-[30px] md:mb-[0]"
          >
            <div className="mb-4">
              <p className="text-[#2980B9]">{edu.uni_name}</p>
              <p>{edu.edu_name}</p>
              <p>{edu.years}</p>
            </div>
            <ul className="list-disc">
              {Object.values(edu.title).map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Element>
  );
};
export default Education;
