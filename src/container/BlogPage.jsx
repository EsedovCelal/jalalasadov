import Navbar from "./navbar";
import "./BlogPage.css";
import Home from "./Home";
import Line_Text from "./Text_Line";
import About_me from "./About_me";
import Skills from "./Skills";

const BlogPage = () => {
  return (
    <div
      className="min-h-screen flex items-center
         bg-[#010e28]
         bg-[length:30px_30px]
         bg-[linear-gradient(to_bottom,#082740_1px,transparent_1px),linear-gradient(to_right,#082740_1px,transparent_1px)]
         bg-repeat
         animate-bgmove"
    >
      <div>
        <Navbar />
        <div>
          <Home />
          <Line_Text />
          <About_me />
          <Skills />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
