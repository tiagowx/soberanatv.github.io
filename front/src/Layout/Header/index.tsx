import { PeopleAltOutlined, LibraryBooksOutlined, ArticleOutlined, QuizOutlined } from "@mui/icons-material";
import { AppBar, Box, Typography } from "@mui/material"
import { BrowserRouter, Link } from "react-router-dom";
import { styles } from "./styles";

export const Header = () => {
  const navItens = [
    {
      "name": "Criadores",
      "url": "./criadores",
      "icon": <PeopleAltOutlined />
    },
    {
      "name": "Projetos",
      "url": "./projetos",
      "icon": <LibraryBooksOutlined />
    },
    {
      "name": "Manifesto",
      "url": "./manifesto",
      "icon": <ArticleOutlined />
    },
    {
      "name": "FAQ",
      "url": "./faq",
      "icon": <QuizOutlined />
    },
    {
      "name": "Contato",
      "url": "./contato",
      "icon": ""
    }
  ];

  return (
    <BrowserRouter>
      <AppBar sx={styles}>
        <Link to="/" className="h1">
          <Typography component="h1" variant="h3">
            <Box component="img" src="./assets/images/logo.svg" alt="Logo da Soberana" />
            Soberana
          </Typography>
        </Link>
        <Box component="nav">
          {navItens.length > 0 && navItens.map(item => (
            <Link to={item.url}>
              {(item.icon)}{item.name}
            </Link>
          ))}
        </Box>
      </AppBar>
    </BrowserRouter>
  );
} 