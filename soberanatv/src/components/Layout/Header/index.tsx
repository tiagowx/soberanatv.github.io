import { PeopleAltOutlined, LibraryBooksOutlined, ArticleOutlined, QuizOutlined, EmailOutlined } from "@mui/icons-material";
import { AppBar, Box, Typography } from "@mui/material"
import { styles } from "./styles";
import Link from "next/link";

export const Header = () => {
  const navItens = [
    {
      "name": "Criadores",
      "url": "/criadores",
      "icon": <PeopleAltOutlined />
    },
    {
      "name": "Projetos",
      "url": "/projetos",
      "icon": <LibraryBooksOutlined />
    },
    {
      "name": "Manifesto",
      "url": "/manifesto",
      "icon": <ArticleOutlined />
    },
    {
      "name": "FAQ",
      "url": "/faq",
      "icon": <QuizOutlined />
    },
    {
      "name": "Contato",
      "url": "/contato",
      "icon": <EmailOutlined />
    }
  ];


  return (
    <AppBar sx={styles}>
      <Link href="/" className="h1">
        <Typography component="h1" variant="h3">
          <Box component="img" src="./assets/images/logo.svg" alt="Logo da Soberana" />
          Soberana
        </Typography>
      </Link>
      <Box component="nav">
        {navItens.length > 0 && navItens.map(item => (
          <Link key={`${item.name}-link`} href={item.url}>
            {item.icon}{item.name}
          </Link>
        ))}
      </Box>
    </AppBar>
  );
} 