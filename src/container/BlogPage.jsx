import { Box } from "@mui/material";
import Navbar from "./navbar";
import "./BlogPage.css";
import Introduction_section from "./introduction_section";
import Line_Text from "./Text_Line";
import About_me from "./About_me";

const BlogPage = () => {
  return (
    <Box>
      <Box>
        <Navbar />
        <Box>
          <Introduction_section />
          <Line_Text />
          <About_me />
        </Box>
      </Box>
    </Box>
  );
};
export default BlogPage;
