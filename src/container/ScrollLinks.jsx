import { Link } from "react-scroll";
const ScrollLinks = () => {
  const styles = {
    link: "text-[#EEEEEE] max-[1280px]:text-[black] ml-5 cursor-pointer text-[1.25rem] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
  };
  return (
    <>
      <Link
        to="About me"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        About me
      </Link>
      <Link
        to="Skills"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Skills
      </Link>
      <Link
        to="Experience"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Experience
      </Link>
      <Link
        to="Education"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Education
      </Link>
      <Link
        to="Projects"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Projects
      </Link>
      <Link
        to="Publications"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Publications
      </Link>
      <Link
        to="Recommendations"
        smooth={true}
        duration={900}
        className={styles.link}
        offset={-90}
      >
        Recommendations
      </Link>
    </>
  );
};
export default ScrollLinks;
