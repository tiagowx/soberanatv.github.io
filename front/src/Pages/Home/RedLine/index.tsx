import { Box, Button, Typography } from "@mui/material";
import { SiDiscord } from "react-icons/si"
import { styles } from "./styles";

export const RedLine: React.FC = () => {
  return (
    <Box component="section" sx={styles}>
      <Box className="redLine">
        <Typography className="redLine-text" component="p" variant="h2">
          Coletivo marxisista-lennista de criadores de conteúdo.
        </Typography>
        <Button href="https://discord.gg/soberana" target="_blank" className="btn-discord" variant="contained" color="inherit">
          <SiDiscord /> {"Junte-se no Discord"}
        </Button>
      </Box>
    </Box>
  );
}