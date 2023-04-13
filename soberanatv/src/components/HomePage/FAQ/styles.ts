import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  paddingTop: "5rem",
  gap: "1rem",
  color: "white",
  h2: {
    textAlign: "center",
    marginLeft: "10rem",
    fontFamily: "Molot",
    width: "25%",
    paddingY: "1rem",
    alignItems: "center",
    fontWeight: 400,
    borderTop: "4px solid #eb005c",
  },
  ".content": {
    display: "flex",
    flexDirection: "column",
    marginX: "10rem",
    paddingX: "10rem",
    gap: "1rem",
    ".accordion": {
      backgroundColor: "black",
      color: "white",
      ".accordion-summary": {
        color: "text.light",
        border: "1px solid white",
        h6: {
          fontWeight: "700",
        },
        ".MuiSvgIcon-root": {
          fill: "white"
        }
      },
      ".accordion-details": {
        fontWeight: "700",
        border: "1px solid white"
      },
    },

  }
};


