import { IProject } from "@/interfaces/IProjects";
import { Box, Button, Tabs, Typography } from "@mui/material";
import { styles } from "./styles";

export const Projects = () => {

  const projects: IProject[] = [
    {
      "title": "Comunismo: princípios básicos e guia de leitura",
      "image": "./assets/images/principios-comunismo.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar vídeo",
        "url": "#"
      }
    },
    {
      "title": "Audioteca crítica",
      "image": "./assets/images/audioteca-critica.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar audiobooks",
        "url": "#"
      }
    },
    {
      "title": "Curso de Formação de Criadores de Conteúdo Nadejda Krúpskaia",
      "image": "./assets/images/curso-nadejda-krupskaia.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar curso",
        "url": "#"
      }
    },
    {
      "title": "Comunismo: princípios básicos e guia de leitura",
      "image": "./assets/images/principios-comunismo.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar vídeo",
        "url": "#"
      }
    },
    {
      "title": "Audioteca crítica",
      "image": "./assets/images/audioteca-critica.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar audiobooks",
        "url": "#"
      }
    },
    {
      "title": "Curso de Formação de Criadores de Conteúdo Nadejda Krúpskaia",
      "image": "./assets/images/curso-nadejda-krupskaia.jpg",
      "tags": "#tags #tags #tags",
      "link": {
        "label": "Acessar curso",
        "url": "#"
      }
    }
  ];

  return (
    <Box component="section" sx={styles} >
      <Typography component="h2" variant="h3">Projetos</Typography>
      <Tabs
        className="carrossel"
        variant="scrollable"
      >
        {projects.length > 0 && projects.map(project => (
          <Box className="carrossel-card">
            <Box className="img-flex" component="img" src={project.image} alt={project.title} />
            <Box className="text-area">
              <Typography component="h3" variant="body2">{project.title}</Typography>
              <Typography component="span" variant="caption">{project.tags}</Typography>
              <Button href={project.link.url} className="btn-light" size="small">{project.link.label}</Button>
            </Box>
          </Box>
        ))}
      </Tabs>
    </Box>
  )
}