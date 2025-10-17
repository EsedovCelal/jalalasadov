import Computer from "../assets/img/computer.jpg";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import translations from "../translations";
import { useSelector } from "react-redux";
import { fadeIn } from "../tools/motion2";
const Experience = () => {
  const language = useSelector((state) => state.language.defaultLanguage);
  return (
    <Element
      name="Experience"
      className="text-white flex flex-col items-center justify-center px-8 pt-[120px]"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:mb-[80px] mb-[40px]"
      >
        <h1 className="text-6xl mb-[15px]">
          {translations[language]["experience"]["experience"]}
        </h1>
        <span>{translations[language]["experience"]["text1"]}</span>
      </motion.div>
      <div className="w-full border-2 border-gray-300 hidden md:block"></div>
      <div className="flex gap-4 lg:flex-row flex-col py-[50px] lg:w-[1000px] items-center">
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:basis-1/3 text-center w-[300px]"
        >
          <div className="mb-4">
            <p className="text-3xl uppercase">since 2021</p>
          </div>
          <div className="flex justify-center mb-4">
            <div className="text-[#2980B9] w-15">
              <p className="text-6xl font-bold">3+</p>
              <p className="text-3xl font-bold">Years</p>
            </div>
            <p className="text-5xl font-bold w-15">-</p>
            <div className=" text-[#2980B9] w-15">
              <p className="text-6xl font-bold">10+</p>
              <p className="text-3xl font-bold">Projects</p>
            </div>
          </div>
          <div className="text-center">
            <p>
              Versatile Full Stack Developer with 3+ years of experience
              building modern web applications across varied tech stacks. Known
              for quickly mastering unfamiliar tools and consistently delivering
              production-ready solutions that improve efficiency, scalability,
              and user experience.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:basis-1/3 w-[300px]"
        >
          <img src={Computer} className="w-full h-[350px] rounded-full" />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:basis-1/3 text-center border-1 border-indigo-500 rounded-md p-6 w-full h-auto"
        >
          <p className="text-lg">
            I specialize in building robust full stack systems using Java,
            Node.js, and React, with a strong focus on backend architecture,
            scalability, and clean integration. My experience includes designing
            distributed services, automating workflows, and delivering
            end-to-end solutions that are both maintainable and
            production-ready.
          </p>
        </motion.div>
      </div>
      <div className="w-full border-2 border-gray-300 hidden md:block mb-[50px]"></div>
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="flex md:flex-row flex-col rounded-2 gap-10 md:gap-0"
      >
        <div
          className="border-2 border-dashed p-5 
         rounded-lg w-full md:max-h-full"
        >
          <p className="font-bold">Full Stack Developer</p>
          <p>Formpress | Ankara, Turkey</p>
          <p>2020-2021</p>
          <ul className="list-disc mt-[20px] pl-4">
            <li>Developed customizable forms using HTML, CSS, and React</li>
            <li>
              Enhanced functionality for both open-source and premium plans
            </li>
            <li>
              Collaborated closely with a teammate on design and implementation
            </li>
            <li>
              Improved platform accessibility and overall user-friendliness for
              users
            </li>
          </ul>
        </div>
        <div className="items-center hidden md:flex">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="border-2 border-dashed p-5 rounded-lg w-full md:max-h-full">
          <p className="font-bold">Full Stack Developer</p>
          <p>Formpress | Ankara, Turkey</p>
          <p>2020-2021</p>
          <ul className="list-disc mt-[20px] pl-4">
            <li>Developed customizable forms using HTML, CSS, and React</li>
            <li>
              Enhanced functionality for both open-source and premium plans
            </li>
            <li>
              Collaborated closely with a teammate on design and implementation
            </li>
            <li>
              Improved platform accessibility and overall user-friendliness for
              users
            </li>
          </ul>
        </div>
        <div className="items-center hidden md:flex">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="border-2 border-dashed p-5 rounded-lg w-full md:max-h-full">
          <p className="font-bold">Full Stack Developer</p>
          <p>Formpress | Ankara, Turkey</p>
          <p>2020-2021</p>
          <ul className="list-disc mt-[20px] pl-4">
            <li>Developed customizable forms using HTML, CSS, and React</li>
            <li>
              Enhanced functionality for both open-source and premium plans
            </li>
            <li>
              Collaborated closely with a teammate on design and implementation
            </li>
            <li>
              Improved platform accessibility and overall user-friendliness for
              users
            </li>
          </ul>
        </div>
      </motion.div>
    </Element>
  );
};

export default Experience;
