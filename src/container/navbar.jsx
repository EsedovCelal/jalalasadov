import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const styles = {
    link: "after:content-[''] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:text-[#EEEEEE] hover:[transition:color_0.9s_ease] text-[1.25rem] [transition:color_0.9s_ease] cursor-pointer relative ml-[20px] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:after:w-full",
  };
  const list_links = (
    <div className="max-[1280px]:hidden">
      <Link className={styles.link}>About me</Link>
      <Link className={styles.link}>Experience</Link>
      <Link className={styles.link}>Education</Link>
      <Link className={styles.link}>Projects</Link>
      <Link className={styles.link}>Publications</Link>
      <Link className={styles.link}>Recommendations</Link>
    </div>
  );
  return (
    <div className="flex justify-center">
      <div className="w-[70%] flex justify-between items-center bg-[#00ADB5] px-[40px] py-[0] border-[1px] border-[#00ADB5] rounded-[10px] mt-[5px]">
        <img src={logo} className="w-[100px] h-[100px]" />
        {list_links}
        <div className="flex justify-between">
          <div className="hire_me_button">
            <span>Hire me</span>
          </div>
          <div className="min-[1280px]:hidden">
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
