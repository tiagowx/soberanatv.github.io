import { Accordion, AccordionDetails, AccordionSummary, Box, Icon, TextField, Typography } from "@mui/material";
import { styles } from "./styles";
import { IFaq } from "@/interfaces/IFaq";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SyntheticEvent, useState } from "react";

export const Contact = () => {

  return (
    <Box id="contato" component="section" sx={styles}>
      <Typography component="h2" variant="h3" >
        Contato
      </Typography>
      <Box className="content">
        <Box>
          <Typography variant="body1">
            Entre em contato conosco para possíveis parcerias, se candidatar a criador de conteúdo, tirar dúvidas ou apenas debater e trocar uma ideia.
          </Typography>
          <Typography variant="body1">
            Utilizamos o Discord como ferramenta principal de comunicação, acesse nosso servidor clicando no ícone abaixo e junte-se ao nosso coletivo.
          </Typography>
        </Box>
        <Box component="form">
          <TextField label="Nome" size="small" />
          <TextField label="Email" size="small"/>
          <TextField label="Assunto" size="small"/>
          <TextField label="Mensagem" multiline rows={4} />
        </Box>
      </Box>
    </Box>
  );
}