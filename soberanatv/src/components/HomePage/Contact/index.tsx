import { Box, Button, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import { SiDiscord, SiInstagram, SiTiktok, SiTwitch, SiTwitter, SiYoutube } from "react-icons/si";
import { ArrowDropUp } from "@mui/icons-material";
import { IContactForm } from "@/interfaces/IContactForm";
import React, { FormEvent, useState } from "react";

export const Contact = () => {
  const socialMedias = [
    {
      title: "Discord",
      icon: <SiDiscord />,
      url: ""
    },
    {
      title: "Twitter",
      icon: <SiTwitter />,
      url: ""
    },
    {
      title: "Twitch",
      icon: <SiTwitch />,
      url: ""
    },
    {
      title: "TikTok",
      icon: <SiTiktok />,
      url: ""
    },
    {
      title: "Instagram",
      icon: <SiInstagram />,
      url: ""
    },
    {
      title: "Youtube",
      icon: <SiYoutube />,
      url: ""
    },
  ]

  const [contactForm, setContactForm] = useState<IContactForm>(
    {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  );

  const handleOnSubmit = (e: FormEvent<HTMLInputElement>) => {
    console.log(contactForm);
  }

  return (
    <Box id="contato" component="section" sx={styles}>
      <Typography component="h2" variant="h3" >
        Contato
      </Typography>
      <Box className="content">
        <Box className="social">
          <Typography>
            Entre em contato conosco para possíveis parcerias, se candidatar a criador de conteúdo, tirar dúvidas ou apenas debater e trocar uma ideia.
          </Typography>
          <Typography>
            Utilizamos o Discord como ferramenta principal de comunicação, acesse nosso servidor clicando no ícone abaixo e junte-se ao nosso coletivo.
          </Typography>
          <Typography component="h5" variant="h5">Nossas Redes</Typography>
          <List className="social-medias">
            {socialMedias.length > 0 && socialMedias.map((media) => (
              <ListItem key={media.title} className="media">
                <ListItemButton>
                  {media.icon}
                  {media.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button className="text-soberana-pink" size="small" variant="text" href="#">
            <ArrowDropUp />
            Voltar ao topo
          </Button>
        </Box>
        <Box className="form" onSubmit={handleOnSubmit}>
          <Typography component="h5" variant="h5">Entre em contato por e-mail</Typography>
          <TextField
            label="Nome"
            size="small"
            value={contactForm.name}
            onChange={e => {setContactForm({ ...contactForm, name: e.currentTarget.value })}}
          />
          <TextField
            label="Email"
            size="small"
            value={contactForm.email}
            onChange={e => {setContactForm({ ...contactForm, email: e.currentTarget.value })}}
          />
          <TextField
            label="Assunto"
            size="small"
            value={contactForm.subject}
            onChange={e => {setContactForm({ ...contactForm, subject: e.currentTarget.value })}}
          />
          <TextField
            label="Mensagem"
            multiline rows={4}
            value={contactForm.message}
            onChange={e => {setContactForm({ ...contactForm, message: e.currentTarget.value })}}
          />
          <Button size="small" color="primary" variant="outlined" type="submit">Enviar</Button>
        </Box>
      </Box>
    </Box>
  );
}