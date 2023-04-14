import { themeDefault } from "@/themes/themeDefault";
import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: "calc(100vh - 32px)",
  paddingTop: "5rem",
  gap: "1rem",
  color: "white",
  h2: {
    maxWidth: "25%",
    marginLeft: "10rem",
    fontFamily: "Molot",
    paddingY: "1rem",
    alignItems: "center",
    color: "white",
    fontWeight: 400,
    textAlign: "center",
    borderTop: "4px solid #eb005c",
  },
  ".content": {
    display: "flex",
    flex: 1,
    paddingX: "10rem",
    gap: "1rem",
    color: "#fff",
    h5: {
      fontFamily: "Molot"
    },
    ".social": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      ".social-medias": {
        display: "flex",
        flexWrap: "wrap",
        ".media": {
          display: "flex",
          flex: 1,
          padding: 0,
          fontSize: "1.4rem",
          div: {
            gap: ".5rem",
          }
        }
      },
      ".text-soberana-pink": {
        color: "#eb005c",
        textAlign: "left",
      }
    },
    ".form": {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: "1rem",
      gap: "1rem",
      border: "4px solid #eb005c",
      button:{
        color: themeDefault.palette.secondary.main,
        background: themeDefault.palette.primary.light
      }
    },

  }
};


