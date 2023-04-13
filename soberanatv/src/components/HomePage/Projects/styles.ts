import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  paddingTop: "5rem",
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
    maxWidth: "100vw",
    marginX: "10rem",
    flexWrap: "nowrap",
    height: "auto",
    overflowX: "auto",
    ".MuiTabs-scrollButtons": {
      bgcolor: "#eb005c",
      color: "white",
      boxShadow: "0 0 2rem 2rem rgb(235,0,92, 0.5)",
      gap: "1rem"
    },
    ".carrossel-card": {
      display: "flex",
      justifyContent: "space-between",
      width: "auto",
      height: "auto",
      minWidth: "25%",
      whiteSpace: "normal",
      flexDirection: "column",
      border: "1px solid #eb005c",
      marginRight: "1rem",
      color: "white",
      gap: ".5rem",
      ".img-flex": {
        float: "center",
        contain: "content",
        height: "100%",
        maxHeight: "16rem",
        width: "auto",
        content: "normal",
        display: "table",
        clear: "both"
      },
      ".text-area":{
        display: "flex",
        flexDirection: "column",
        paddingX: "1rem",
        gap: "1rem",
        h3: {
          lineHeight: "1.4rem",
        }
      },      
      ".btn-light": {
        marginBottom: "1rem",
        paddingX: "1rem",
        maxWidth: "14rem",
        alignSelf: "flex-end",
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
