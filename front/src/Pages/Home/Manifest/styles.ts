import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  paddingTop: "4rem",
  minHeight: "100vh",
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
  article: {
    display: "flex",
    flexDirection: "column",
    marginX: "10rem",
    paddingY: "1rem",
    paddingX: "5rem",
    border: "4px solid #eb005c",
    outline: ".8rem solid black",
    boxShadow: "-1rem -1rem 0 0 rgb(235,0,92, 1)",
   
  },
  ".btn-light": {
    marginBottom: "1rem",
    paddingX: "1rem",
    maxWidth: "8rem",
    backgroundColor: "white",
    fontSize: "16px",
    color: "#EB005C",
    borderRadius: "1rem",
    gap: ".3rem",
  },
};
