import jalalasadov from "../assets/img/jalalasadov.jpg";
import { Box } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";

const Introduction_section = () => {
  const [isOPen, setIsOpen] = useState(false);
  return (
    <Box>
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
            Merit graduate of TUM (22nd worldwide) with publications in ACM and
            Springer JITT. Creator of the internationally recognized Green
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
  );
};

export default Introduction_section;
