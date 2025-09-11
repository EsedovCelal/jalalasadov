import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const styles = {
    link: "text-[#EEEEEE] after:content-[''] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:text-[#00ADB5] hover:[transition:color_0.9s_ease] text-[1.25rem] [transition:color_0.9s_ease] cursor-pointer relative ml-[20px] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[#00ADB5] after:[transition:width_0.9s] hover:after:w-full",
  };
  const list_links = (
    <div className="max-[1280px]:hidden">
      <Link to="About me" smooth={true} duration={900} className={styles.link}>
        About me
      </Link>
      <Link to="Skills" smooth={true} duration={900} className={styles.link}>
        Skills
      </Link>
      <Link
        to="Experience"
        smooth={true}
        duration={900}
        className={styles.link}
      >
        Experience
      </Link>
      <Link to="Education" smooth={true} duration={900} className={styles.link}>
        Education
      </Link>
      <Link to="Projects" smooth={true} duration={900} className={styles.link}>
        Projects
      </Link>
      <Link
        to="Publications"
        smooth={true}
        duration={900}
        className={styles.link}
      >
        Publications
      </Link>
      <Link
        to="Recommendations"
        smooth={true}
        duration={900}
        className={styles.link}
      >
        Recommendations
      </Link>
    </div>
  );
  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex justify-between items-center px-[40px] py-[0] border-[1px] border-[#00ADB5] rounded-[10px] mt-[5px]">
        <Link to="Home">
          <img src={logo} className="w-[100px] h-[100px]" />
        </Link>

        {list_links}
        <div className="flex justify-between">
          <a
            href="#_"
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Hire Me
            </span>
          </a>
          <div className=" min-[1280px]:hidden">
            <Hamburger
              easing="ease-in"
              toggled={isOpen} // control the toggle state
              toggle={() => dispatch(toggleMenu())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
