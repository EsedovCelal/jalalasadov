import { Box } from "@mui/material";
import Navbar from "./navbar";
import "./BlogPage.css";
import Introduction_section from "./introduction_section";
import Line_Text from "./Text_Line";

const BlogPage = () => {
  return (
    <Box>
      <Box>
        <Navbar />
        <Introduction_section />
        <Line_Text />
      </Box>
    </Box>
  );
};
export default BlogPage;
