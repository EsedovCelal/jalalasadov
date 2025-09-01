import { Box } from "@mui/material";
import Navbar from "./navbar";
import "./BlogPage.css";
import Introduction_section from "./introduction_section";

const BlogPage = () => {
  return (
    <Box>
      <Box>
        <Navbar />
        <Introduction_section />
      </Box>
    </Box>
  );
};
export default BlogPage;
