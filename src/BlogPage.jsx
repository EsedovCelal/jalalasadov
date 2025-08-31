import { Link } from "react-scroll";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Typography } from "@mui/material";
import logo from "./assets/img/logo.png";
import "./BlogPage.css";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import jalalasadov from "./assets/img/jalalasadov.jpg";

const BlogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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
  const [isOPen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box className="all_navbar">
        <img src={logo} width="100" height="100" />
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
      <Box className="section_one_box">
        {isOPen && isMobile && list_links}
        <Box className="section_one_flex_box">
          <Box className="section_one_texts_box">
            <Typography variant="h5" marginBottom={3}>
              SOFTWARE ENGINEER | FRONT-END WEB DEVELOPER
            </Typography>
            <Typography variant="h2" fontWeight={700} marginBottom={3}>
              JALAL
              <br />
              ASADOV
            </Typography>
            <Typography>
              Merit graduate of TUM (22nd worldwide) with publications in ACM
              and Springer JITT. Creator of the internationally recognized Green
              Destination Recommender. Over 3 years of software engineering
              experience in Germany, delivering scalable, reliable full-stack
              solutions to real-world problems.
            </Typography>
          </Box>
          <Box className="section_one_img_box">
            <img src={jalalasadov} className="section_one_img" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default BlogPage;
