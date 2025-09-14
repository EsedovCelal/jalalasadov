import { Element } from "react-scroll";
import { motion } from "motion/react";
import computer from "../assets/img/computer.jpg";
import { fadeInDown, fadeInUp } from "../tools/motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // 30% animation will start
  });
  return (
    <Element name="Skills">
      <div className="flex justify-center max-h-[600px]">
        <div className="w-[60%]">
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-[50px]"
          >
            <h1 className="text-[white] text-center text-[50px]">Skills</h1>
            <p className="text-[white]">
              Comprehensive skill set spanning full-stack development, cloud
              infrastructure, distributed systems, and modern software design.
              Proficient in key programming languages, frameworks, and
              architectural patterns. Strong grasp of system design, algorithms,
              and blockchain technologies, enabling robust, scalable, and
              maintainable solutions across diverse domains
            </p>
          </motion.div>
          <div className="w-full border-2 border-gray-300"></div>
          <motion.div
            ref={ref}
            variants={fadeInDown}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-row max-h-[600px]"
          >
            <div className="flex flex-col justify-between my-[20px]">
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Software Engineering & Design
                </p>
                <p className="text-[white]">
                  OOP, System Design, Software Design Patterns, Algorithms &
                  Data Structures, RESTful API Design, Microservices
                  Architecture, Agile Development, Continuous
                  Integration/Delivery
                </p>
              </div>
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Cloud & DevOps
                </p>
                <p className="text-[white]">
                  AWS, Docker, Airflow, CI/CD (Bamboo, GitHub Actions), Git
                </p>
              </div>
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Blockchain & Distributed Systems
                </p>
                <p className="text-[white]">
                  Smart Contracts, Blockchain Fundamentals, Distributed System
                  Design, Consensus Algorithms
                </p>
              </div>
            </div>
            <div className=" my-[20px]">
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Programming Languages
                </p>
                <p className="text-[white]">
                  Java, JavaScript, TypeScript, C#, Python, SQL (MySQL,
                  PostgreSQL), NoSQL (MongoDB)
                </p>
              </div>
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Frameworks & Libraries
                </p>
                <p className="text-[white]">
                  React, React Native, Angular, Node.js, Spring Boot, Material
                  UI
                </p>
              </div>
              <div>
                <p className="text-[white] underline text-[20px] mb-[10px]">
                  Testing & Automation
                </p>
                <p className="text-[white]">
                  JUnit, Automated Testing, Code Quality Tools
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[90px]">
        <div className="w-full border-2 border-gray-300"></div>
        <img
          src={computer}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="w-full border-2 border-gray-300"></div>
      </div>
    </Element>
  );
};
export default Skills;
