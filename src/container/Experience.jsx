import Computer from "../assets/img/computer.jpg";
import { Element } from "react-scroll";
/* import { useInView } from "react-intersection-observer"; */
import { fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from "../tools/motion";
import { motion } from "motion/react";
const Experience = () => {
  /*   const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.03, // 30% animation will start
  }); */
  return (
    <Element
      name="Experience"
      className="text-white flex flex-col items-center justify-center px-8"
    >
      <motion.div
        variants={fadeInDown} // assign the variants
        /*      ref={ref} */
        initial="visible" // start at "hidden"
        /*    animate={inView ? "visible" : "hidden"} */
        className="text-center mt-[80px] md:mb-[80px] mb-[40px]"
      >
        <h1 className="text-[60px]">Experience</h1>
        <span>
          Over three years of hands-on experience delivering scalable software
          solutions across startups, academia, and enterprise environments.
          Proven ability to take ownership of full-stack projects, quickly adapt
          to unfamiliar technologies, and deliver high-quality outcomes.
          Consistently contributed to critical systems, cross-platform
          integrations, and internal tooling that improved team efficiency and
          business performance.
        </span>
      </motion.div>
      <div className="w-full border-2 border-gray-300 hidden md:block"></div>
      <div className="flex gap-4 lg:flex-row flex-col py-[50px] lg:w-[1000px] items-center">
        <motion.div
          variants={fadeInLeft} // assign the variants
          /*   ref={ref} */
          initial="visible" // start at "hidden"
          /*           animate={inView ? "visible" : "hidden"} */
          className="lg:basis-1/3 text-center w-[300px]"
        >
          <div className="mb-4">
            <p className="text-3xl uppercase">since 2021</p>
          </div>
          <div className="flex justify-center mb-4">
            <div className="text-[#2980B9] w-15">
              <p className="text-5xl font-bold">3+</p>
              <p className="font-bold">Years</p>
            </div>
            <p className="text-5xl font-bold w-15">-</p>
            <div className=" text-[#2980B9] w-15">
              <p className="text-5xl font-bold">10+</p>
              <p className="font-bold">Projects</p>
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
          variants={fadeInUp} // assign the variants
          /*           ref={ref} */
          initial="visible" // start at "hidden"
          /*         animate={inView ? "visible" : "hidden"} */
          className="lg:basis-1/3 w-[300px]"
        >
          <img src={Computer} className="w-full h-[350px] rounded-full" />
        </motion.div>
        <motion.div
          variants={fadeInRight} // assign the variants
          /*           ref={ref} */
          initial="visible" // start at "hidden"
          /*           animate={inView ? "visible" : "hidden"} */
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
      <div className="w-full border-2 border-gray-300 hidden md:block"></div>
      <div></div>
    </Element>
  );
};

export default Experience;
