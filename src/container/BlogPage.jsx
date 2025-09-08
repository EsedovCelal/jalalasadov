import Navbar from "./navbar";
import "./BlogPage.css";
import Introduction_section from "./introduction_section";
import Line_Text from "./Text_Line";
import About_me from "./About_me";

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
          <Introduction_section />
          <Line_Text />
          <About_me />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
