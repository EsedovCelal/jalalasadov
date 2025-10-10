import Navbar from "./navbar";
import Home from "./Home";
import About_me from "./About_me";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";
import Education from "./Education";
import Contact_me from "./Contact_me";
import Projects from "./Projects";

const Main_blog = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c1d31] to-[#0f0f1f]">
      <div className="max-w-[1300px] mx-auto w-full">
        <ul class="blobs">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Navbar />
        <Home />
        <About_me />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact_me />
        <Footer />
      </div>
    </div>
  );
};
export default Main_blog;
