import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: "auto",
  height: "100%",
  minHeight: "100vh",
  backgroundImage: "url('./assets/images/background.jpg') ",
  backgroundPosition: "center right",
  backgroundOrigin: "content-box",
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  ".redLine": {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    paddingTop: "10rem",
    gap: "1rem",
    paddingX: "10rem",
    ".redLine-text": {
      color: "white",
      fontWeight: 700,
    },
    ".btn-discord": {
      display: "inherit",
      maxWidth: "14rem",
      alignItems: "center",
      textTransform: "initial",
      backgroundColor: "white",
      fontSize: "16px",
      color: "#EB005C",
      borderRadius: "1rem",
      gap: ".3rem",
    }
  },
}