import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  paddingTop: "4rem",
  minHeight: "100vh",
  gap: "1rem",
  button: {
    backgroundColor: "white",
    width: "8rem",
    margin: "1rem",
    alignSelf: "flex-end",
    color: "#eb005c",
    borderRadius: "1rem",
  },
  h2: {
    textAlign: "center",
    marginLeft: "10rem",
    fontFamily: "Molot",
    width: "25%",
    paddingY: "1rem",
    alignItems: "center",
    color: "white",
    fontWeight: 400,
    borderTop: "4px solid #eb005c",
  },
  ".carrossel": {
    display: "flex",
    marginX: "7rem",
    maxWidth: "100vw",
    flexBasis: "100%",
    height: "auto",
    ".MuiTabs-scrollButtons": {
      bgcolor: "#eb005c",
      color: "white",
      boxShadow: "0 0 2rem 2rem rgb(235,0,92, 0.5)",
    },
    ".carrossel-card": {
      display: "flex",
      whiteSpace: "normal",
      flexDirection: "column",
      width: "25%",
      height: "auto",
      border: "1px solid #eb005c",
      marginRight: "1rem",
      color: "white",
      gap: "1rem",
      img: {
        flex: 1,
      },
      ".text-area":{
        display: "flex",
        flexDirection: "column",
        paddingX: "1rem",
        lineHeight: "1.1rem",
        gap: "1.6rem"
      },
      ".btn-light": {
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
};
