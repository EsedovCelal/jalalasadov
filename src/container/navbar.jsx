import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [isOPen, setIsOpen] = useState(false);
  const list_links = (
    <Box className={isMobile ? "when_burger_isOpen" : ""}>
      <Link className="link">About me</Link>
      <Link className="link">Experience</Link>
      <Link className="link">Education</Link>
      <Link className="link">Projects</Link>
      <Link className="link">Publications</Link>
      <Link className="link">Recommendations</Link>
    </Box>
  );
  return (
    <Box className="flex justify-between items-center bg-[lightblue] px-[40px] py-[0] border-[1px] border-[solid] border-[black] rounded-[10px]">
      <img src={logo} className="w-[100px] h-[100px]" />
      {!isMobile && list_links}
      <Box className="hire_me_and_hamburger">
        <Box className="hire_me_button">
          <span>Hire me</span>
        </Box>
        {isMobile && (
          <Hamburger easing="ease-in" toggled={isOPen} toggle={setIsOpen} />
        )}
      </Box>
    </Box>
  );
};
export default Navbar;
