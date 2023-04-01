import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  width: "100%",
  color: "white",
  alignItems: "center",
  paddingX: "10em",
  paddingY: "1em",
  justifyContent: "space-around",
  backgroundColor: "rgba(255,255,255,0.1)",
  ".h1": {
    display: "flex",
    color: "white",
    textDecoration: "none",
    flex: 1,
    width: "100%",
    h1: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      fontFamily: "Molot, sans-serif",
      fontSize: "42px",
      gap: ".3em",
      textAlign: "center",
      img: {
        maxHeight: "80px",
      },
    },
  },
  nav: {
    display: "flex",
    flex: 1,
    fontSize: "16px",
    textAlign: "center",
    gap: "1em",
    a: {
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      color: "#fff",
      textDecoration: "none",
      gap: ".3em",
    },
  },
};
