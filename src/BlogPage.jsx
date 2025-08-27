import { Link } from "react-scroll";
import { Box } from "@mui/material";
import logo from "./assets/logo.png";
import "./BlogPage.css";
import { BsArrowDownRight } from "react-icons/bs";

const BlogPage = () => {
  return (
    <Box>
      <Box className="all_links">
        <img src={logo} width="100" height="100" />
        <Link className="link" to="home" smooth={true} duration={500}>
          About me
        </Link>
        <Link className="link">Experience</Link>
        <Link className="link ">Education</Link>
        <Link className="link">Projects</Link>
        <Link className="link">Publications</Link>
        <Link className="link">Recommendations</Link>
        <Box className="hire_me_button">
          <span>Hire me</span>
        </Box>
      </Box>
      <Box>
        <section id="home">
          <h1>Section About me</h1>
        </section>
      </Box>
    </Box>
  );
};
export default BlogPage;
