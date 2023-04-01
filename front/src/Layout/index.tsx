import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { Header } from "./Header";
import { styles } from "./styles";

interface IProps {
  children: ReactElement;
}

export const Layout: FC<IProps> = (props: IProps) => {
  return (
    <Box component="main" sx={styles}>
      <Header />
      {props.children}
    </Box>
  );
};