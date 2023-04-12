import { Box } from "@mui/material";
import { Creators } from "./Creators";
import { Manifest } from "./Manifest";
import { Projects } from "./Projects";
import { RedLine } from "./RedLine";
import { styles } from "./styles";

export const HomePage = () => {
  return(
    <Box component="main" sx={styles}>
      <RedLine />
      <Creators />
      <Projects />
      <Manifest />
    </Box> 
  );
};