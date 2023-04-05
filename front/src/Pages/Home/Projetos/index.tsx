import { ICreator } from "@/interfaces/ICreator";
import { Box, Button, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./styles";

export const Projetos = () => {

  const creators: ICreator[] = [
    {
      name: "Comuninja",
      twitch: "twitch.tv/comuninja",
      image: "./assets/images/comuninja.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Ian Neves",
      twitch: "twitch.tv/historiapublica",
      image: "./assets/images/historiapublica.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Ian Neves",
      twitch: "twitch.tv/historiapublica",
      image: "./assets/images/historiapublica.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Ian Neves",
      twitch: "twitch.tv/historiapublica",
      image: "./assets/images/historiapublica.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Ian Neves",
      twitch: "http://twitch.tv/historiapublica",
      image: "./assets/images/historiapublica.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Ian Neves",
      twitch: "twitch.tv/historiapublica",
      image: "./assets/images/historiapublica.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
    {
      name: "Historiatopia",
      twitch: "twitch.tv/historiatopia",
      image: "./assets/images/historiatopia.jpg",
      tags: "#tags #tags #tags",
      socials: ["Youtube", "Insta", "Twitter"],
    },
  ];

  return (
    <Box component="section" sx={styles} >
      <Typography component="h2" variant="h3">Projetos</Typography>
      <Tabs
        className="carrossel"
        variant="scrollable"
      >
        {creators.length > 0 && creators.map(creator => (
          <Box className="carrosel-card">
            <Typography component="h3" variant="h5">{creator.name}</Typography>
            <Typography component="span" variant="subtitle1">{creator.twitch}</Typography>
            <Box component="img" src={creator.image} />
            <Typography component="span" variant="overline">{creator.tags}</Typography>
            <Box className="carrossel-card-socials">
              {creator.socials.length && creator.socials.map(social => (
                <Button variant="contained" size="small">{social}</Button>
              ))}
            </Box>
          </Box>
        ))}
      </Tabs>
      <Box className="invite">
        <Box component="img" src="./assets/images/microfone.jpg" />
        <Box className="invite-text">
          <Typography component="h3" variant="h3">
            Gostaria de se tornar um <b>criador de conteúdo</b> do nosso coletivo?
          </Typography>
          <Typography component="p" variant="body1">
            Clique no botão <b>abaixo</b> e nos envie um <b>email</b> para iniciarmos as conversas.
          </Typography>
          <Link to="/contato" className="btn-email">
            <Button variant="contained" size="small" className="btn-email">
              Enviar e-mail
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}