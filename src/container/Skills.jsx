import { Element } from "react-scroll";
import { motion } from "motion/react";
import computer from "../assets/img/computer.jpg";
import { fadeInDown, fadeInUp } from "../tools/motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import translations from "../translations";
import { useSelector } from "react-redux";
const Skills = () => {
  const language = useSelector((state) => state.language.defaultlanguage);
  const icons = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      style: "hover:text-orange-500 hover:scale-125 hover:-translate-y-2",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      style: "hover:text-blue-500 hover:rotate-12 hover:scale-110",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      style: "hover:text-yellow-400 hover:-rotate-12 hover:scale-110",
    },
    {
      name: "React",
      icon: <FaReact />,
      style: "hover:text-cyan-400 hover:animate-spin",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.03, // 30% animation will start
  });
  return (
    <Element name="Skills" className="flex justify-center">
      <div className="mx-[50px] max-w-[1000px]">
        <div className="flex justify-center text-[white]">
          <div>
            <motion.div
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h1 className="text-center text-[50px]">
                {translations[language]["skills"]["skills"]}
              </h1>
              <p>
                Comprehensive skill set spanning full-stack development, cloud
                infrastructure, distributed systems, and modern software design.
                Proficient in key programming languages, frameworks, and
                architectural patterns. Strong grasp of system design,
                algorithms, and blockchain technologies, enabling robust,
                scalable, and maintainable solutions across diverse domains
              </p>
              <div className="w-full border-2 border-gray-300 hidden lg:block mt-[50px]"></div>
            </motion.div>

            <motion.div
              ref={ref}
              variants={fadeInDown}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-10 mt-10"
            >
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Software Engineering & Design
                </p>
                <p>
                  OOP, System Design, Software Design Patterns, Algorithms &
                  Data Structures, RESTful API Design, Microservices
                  Architecture, Agile Development, Continuous
                  Integration/Delivery
                </p>
              </div>
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Cloud & DevOps
                </p>
                <p>AWS, Docker, Airflow, CI/CD (Bamboo, GitHub Actions), Git</p>
              </div>
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Blockchain & Distributed Systems
                </p>
                <p>
                  Smart Contracts, Blockchain Fundamentals, Distributed System
                  Design, Consensus Algorithms
                </p>
              </div>
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Programming Languages
                </p>
                <p>
                  Java, JavaScript, TypeScript, C#, Python, SQL (MySQL,
                  PostgreSQL), NoSQL (MongoDB)
                </p>
              </div>
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Frameworks & Libraries
                </p>
                <p>
                  React, React Native, Angular, Node.js, Spring Boot, Material
                  UI
                </p>
              </div>
              <div>
                <p className="underline text-[20px] mb-[10px] font-bold">
                  Testing & Automation
                </p>
                <p>JUnit, Automated Testing, Code Quality Tools</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-10 gap-10">
          {icons.map((item, i) => (
            <motion.div
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              key={i}
              className="flex flex-col items-center gap-2"
            >
              <div
                className={`text-7xl text-white cursor-pointer transition-all duration-500 ${item.style}`}
              >
                {item.icon}
              </div>
              <span className="text-lg font-semibold text-white">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="h-[90px] relative left-1/2 right-1/2 w-screen -ml-[50.7vw] -mr-[50vw] hidden lg:block">
          <div className="w-full border-2 border-gray-300 "></div>
          <img
            src={computer}
            alt="Banner"
            className="h-full object-cover relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]"
          />
          <div className="w-full border-2 border-gray-300 "></div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;
