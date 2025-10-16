import { Element } from "react-scroll";
import temp2 from "../assets/img/temp2.jpg";

const Recommendations = () => {
  return (
    <Element name="Recommendations" className="text-white px-8 pt-15">
      <p className="text-4xl md:text-5xl lg:text-6xl text-center mb-[15px]">
        Recommendations
      </p>
      <p className="text-lg text-center mb-[50px]">
        I’m grateful for the professional relationships I’ve built and the
        positive impact I’ve made along the way. Below are selected
        recommendations from colleagues, mentors, and collaborators that
        highlight my skills, work ethic, and contributions. Their feedback
        reflects my commitment to delivering quality solutions and fostering
        effective teamwork.
      </p>
      <div className="w-full border-2 border-gray-300 hidden lg:block mb-[50px]"></div>
      <div className="flex justify-center items-center ">
        <img src={temp2} className="w-full h-auto object-cover max-w-200" />
      </div>
      <div className="flex justify-center imtes-center">
        <a
          className="text-2xl text-[#479b9c] cursor-pointer text-[#479b9c] py-[20px]"
          href="https://www.linkedin.com/in/c%C9%99lal-%C9%99s%C9%99dov-ba404823b/"
        >
          View on LinkedIn
        </a>
      </div>
    </Element>
  );
};
export default Recommendations;
