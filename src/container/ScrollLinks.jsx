import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import translations from "../translations";

const ScrollLinks = ({ color = "#EEEEEE" }) => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const styles = {
    link: `text-[${color}] ml-5 cursor-pointer text-[1.25rem] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`,
  };
  return (
    <>
      <Link to="About me" smooth={true} duration={900} className={styles.link}>
        {translations[language]["scroll_links"]["About_me"]}
      </Link>
      <Link to="Skills" smooth={true} duration={900} className={styles.link}>
        {translations[language]["scroll_links"]["Skills"]}
      </Link>
      <Link
        to="Experience"
        smooth={true}
        duration={900}
        className={styles.link}
      >
        {translations[language]["scroll_links"]["Experience"]}
      </Link>
      <Link to="Education" smooth={true} duration={900} className={styles.link}>
        {translations[language]["scroll_links"]["Education"]}
      </Link>
      <Link to="Projects" smooth={true} duration={900} className={styles.link}>
        {translations[language]["scroll_links"]["Projects"]}
      </Link>
      <Link
        to="Recommendations"
        smooth={true}
        duration={900}
        className={styles.link}
      >
        {translations[language]["scroll_links"]["Recommendations"]}
      </Link>
    </>
  );
};
export default ScrollLinks;
