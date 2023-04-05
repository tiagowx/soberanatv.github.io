import { Box } from "@mui/material";
import { Creators } from "./Creators";
import { Projetos } from "./Projetos";
import { RedLine } from "./RedLine";
import { styles } from "./styles";

export const Home = () => {
  return(
    <Box component="main" sx={styles}>
      <RedLine />
      <Creators />
      <Projetos />
    </Box> 
  );
};