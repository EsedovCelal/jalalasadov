import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const styles = {
    link: "after:content-[''] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:text-[lightcoral] hover:[transition:color_0.9s_ease] text-[1.25rem] [transition:color_0.9s_ease] cursor-pointer relative ml-[20px] after:absolute after:h-[2px] after:left-[0] after:bottom-[0] after:w-[0] after:bg-[red] after:[transition:width_0.9s] hover:after:w-full",
  };
  const list_links = (
    <Box className={isMobile ? "when_burger_isOpen" : ""}>
      <Link className={styles.link}>About me</Link>
      <Link className={styles.link}>Experience</Link>
      <Link className={styles.link}>Education</Link>
      <Link className={styles.link}>Projects</Link>
      <Link className={styles.link}>Publications</Link>
      <Link className={styles.link}>Recommendations</Link>
    </Box>
  );
  return (
    <Box className="flex justify-between items-center bg-[lightblue] px-[40px] py-[0] border-[1px] border-[black] rounded-[10px]">
      <img src={logo} className="w-[100px] h-[100px]" />
      {!isMobile && list_links}
      <Box className="hire_me_and_hamburger">
        <Box className="hire_me_button">
          <span>Hire me</span>
        </Box>
        {isMobile && (
          <Hamburger
            easing="ease-in"
            toggled={isOpen} // control the toggle state
            toggle={() => dispatch(toggleMenu())}
          />
        )}
      </Box>
    </Box>
  );
};
export default Navbar;
