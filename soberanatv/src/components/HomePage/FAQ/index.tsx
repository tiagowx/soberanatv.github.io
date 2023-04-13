import { Accordion, AccordionDetails, AccordionSummary, Box, Icon, Typography } from "@mui/material";
import { styles } from "./styles";
import { IFaq } from "@/interfaces/IFaq";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SyntheticEvent, useState } from "react";

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const questions: IFaq[] = [
    {
      question: "O que socialismo?",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
      question: "O que o coletivo?",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
      question: "Qual objetivo do coletivo?",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
    {
      question: "Como posso colaborar com o coletivo?",
      answer: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
    },
  ]

  const handleChange = (panel: string) =>
    (event: SyntheticEvent, isExpanded: boolean) =>
      (setExpanded(isExpanded ? panel : false));

  return (
    <Box id="faq" component="section" sx={styles}>
      <Typography component="h2" variant="h3" >
        FAQ
      </Typography>
      <Box className="content">
        {questions.length > 0 && questions.map((question, index) => (
          <Accordion
            key={`accordion-${index}`}
            className="accordion"
            expanded={expanded === `accordion-${index}`}
            onChange={handleChange(`accordion-${index}`)}
          >
            <AccordionSummary
              className="accordion-summary"
              aria-controls="panel1bh-content"
              color="text.secondary"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="h6"              >
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <Typography variant="inherit">
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}