import Navbar from "./navbar";
import Home from "./Home";
import Line_Text from "./Text_Line";
import About_me from "./About_me";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";
import Education from "./Education";

const Main = () => {
  return (
    <div
      className="bg-[#010e28]
         bg-[length:30px_30px]
         bg-[linear-gradient(to_bottom,#082740_1px,transparent_1px),linear-gradient(to_right,#082740_1px,transparent_1px)]
         bg-repeat
         animate-bgmove"
    >
      <div className="flex justify-center">
        <Navbar />
        <div>
          <Home />
          <Line_Text />
          <About_me />
          <Skills />
          <Experience />
          <Education />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Main;
