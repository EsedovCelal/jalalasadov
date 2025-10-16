import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setlanguage } from "../store/langSlice";
import ScrollLinks from "./ScrollLinks";
import { useState, useEffect } from "react";
import translations from "../translations";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.defaultLanguage);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const changeLanguage = () => {
    dispatch(setlanguage(language === "az" ? "en" : "az"));
  };
  useEffect(() => {
    if (language === "az") {
      navigate("/");
    } else {
      navigate(`/${language}`);
    }
  }, [language]);
  const styles = {
    links_when_hamburger_is_open:
      "!text-red min-[1280px]:hidden min-h-[400px] flex flex-col mt-30 items-center justify-evenly h-1/2 w-screen left-[0] absolute z-10 text-[1.25rem] bg-[rgba(255,_255,_255,_0.7)] backdrop-filter backdrop-blur",
  };
  return (
    <div className="flex justify-center fixed top-0 left-0 w-full z-50 md:px-8 px-2">
      <div className="w-full mx-auto max-w-[1300px] backdrop-blur-md flex justify-between items-center px-[10px] py-[0] border-[1px] border-[#3E5F44] rounded-[10px] mt-[5px]">
        <Link to="Home" smooth={true} duration={900} offset={-120}>
          <img src={logo} className="w-[100px] h-[100px] cursor-pointer" />
        </Link>
        <div className="max-[1280px]:hidden">
          <ScrollLinks />
        </div>
        <div className="flex justify-between h-[40px] gap-2">
          <div className="min-[1280px]:hidden flex items-center">
            <Hamburger
              easing="ease-in"
              toggled={isOpen}
              toggle={setOpen}
              color="#EEEEEE"
            />
          </div>
          <div className="hidden md:block cursor-pointer">
            <Link
              to="Contact me"
              smooth={true}
              duration={900}
              offset={-90}
              className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3E5F44] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {translations[language]["navbar"]["Hire_me"]}
              </span>
            </Link>
          </div>
          <div className="flex gap-2 ml-1">
            <button
              onClick={changeLanguage}
              className="cursor-pointer relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3E5F44] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {language === "az" ? <span>AZ-en</span> : <span>EN-az</span>}
              </span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.links_when_hamburger_is_open}>
          <ScrollLinks color="black" />
        </div>
      )}
    </div>
  );
};
export default Navbar;
