import { Link } from "react-scroll";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import logo from "./assets/logo.png";
import "./BlogPage.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

const BlogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const list_links = (
    <Box>
      <Link className="link">About me</Link>
      <Link className="link">Experience</Link>
      <Link className="link">Education</Link>
      <Link className="link">Projects</Link>
      <Link className="link">Publications</Link>
      <Link className="link">Recommendations</Link>
    </Box>
  );
  const [isOPen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box className="all_navbar">
        <img src={logo} width="100" height="100" />
        {!isMobile ? list_links : <></>}
        <Box className="hire_me_and_hamburger">
          <Box className="hire_me_button">
            <span>Hire me</span>
          </Box>
          {isMobile ? <Hamburger toggled={isOPen} toggle={setIsOpen} /> : <></>}
        </Box>
      </Box>
      {isOPen && isMobile ? (
        <Box className="when_burger_isOpen">{list_links} </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default BlogPage;
