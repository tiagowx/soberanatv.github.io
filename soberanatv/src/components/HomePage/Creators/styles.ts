import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  paddingTop: "5rem",
  minHeight: "100vh",
  gap: "1rem",
  button: {
    backgroundColor: "#eb005c",
    borderRadius: "1rem",
  },
  h2: {
    marginLeft: "10rem",
    fontFamily: "Molot",
    width: "25%",
    paddingY: "1rem",
    alignItems: "center",
    color: "white",
    fontWeight: 400,
    textAlign: "center",
    borderTop: "4px solid #eb005c",
  },
  ".carrossel": {
    marginX: "10rem",
    display: "flex",
    width: "auto",
    overflowX: "auto",
    ".MuiTabs-scrollButtons": {
      bgcolor: "#eb005c",
      color: "white",
      boxShadow: "0 0 2rem 2rem rgb(235,0,92, 0.5)",
    },
    ".carrosel-card": {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #eb005c",
      width: "auto",
      height: "24rem",
      marginRight: "1rem",
      color: "white",
      textAlign: "center",
      h3: {
        fontWeight: 500,
      },
      img: {
        flex: 1,
        width: "auto",
        height: "14rem",
      },
      ".carrossel-card-socials": {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      },
    },
  },
  ".invite": {
    display:"flex",
    justifyContent: "space-around", 
    alignItems: "center",
    marginX: "10rem",
    paddingY: "2rem",
    color: "white",
    img: {
      width: "16rem",
      height: "auto",
      border: "4px solid #eb005c",
      borderRadius: "8rem"
    },
    ".invite-text": {
      display:"flex",
      flexDirection: "column",
      paddingX: "1rem",
      gap: "1rem",
      ".btn-email": {
        display: "block",
        width: "8rem",
        alignItems: "center",
        textDecoration: "none",
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
