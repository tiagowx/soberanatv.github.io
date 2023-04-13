import { Box } from "@mui/material";
import { Creators } from "./Creators";
import { Manifest } from "./Manifest";
import { Projects } from "./Projects";
import { RedLine } from "./RedLine";
import { styles } from "./styles";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";

export const HomePage = () => {
  return(
    <Box component="main" sx={styles}>
      <RedLine />
      <Creators />
      <Projects />
      <Manifest />
      <FAQ />
      <Contact />
    </Box> 
  );
};