import Navbar from "./navbar";
import "./BlogPage.css";
import Introduction_section from "./introduction_section";
import Line_Text from "./Text_Line";
import About_me from "./About_me";

const BlogPage = () => {
  return (
    <div className="bg-[#222831]">
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
