import { ICreator } from "@/interfaces/ICreator";
import { Box, Button, Link, Tabs, Typography } from "@mui/material";
import { styles } from "./styles";

export const Creators = () => {

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
    <Box id="criadores" component="section" sx={styles} >
      <Typography component="h2" variant="h3">Criadores</Typography>
      <Box className="carrossel">
        {creators.length > 0 && creators.map((creator, index) => (
          <Box key={`creator-${index}`} className="carrosel-card">
            <Typography component="h3" variant="h5">{creator.name}</Typography>
            <Typography component="span" variant="subtitle1">{creator.twitch}</Typography>
            <Box component="img" src={creator.image} />
            <Typography component="span" variant="overline">{creator.tags}</Typography>
            <Box className="carrossel-card-socials">
              {creator.socials.length && creator.socials.map((social, i) => (
                <Button key={`creator-${index + i}`} variant="contained" size="small">{social}</Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="invite">
        <Box component="img" src="./assets/images/microfone.jpg" />
        <Box className="invite-text">
          <Typography component="h3" variant="h3">
            Gostaria de se tornar um <b>criador de conteúdo</b> do nosso coletivo?
          </Typography>
          <Typography component="p" variant="body1">
            Clique no botão <b>abaixo</b> e nos envie um <b>email</b> para iniciarmos as conversas.
          </Typography>
          <Link href="/contato" className="btn-email">
            <Button variant="contained" size="small" className="btn-email">
              Enviar e-mail
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}