import { IProject } from "@/interfaces/IProjects";
import { Box, Button, Tabs, Typography } from "@mui/material";
import { styles } from "./styles";

export const Projetos = () => {

  const projects: IProject[] = [
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
    },
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
    },
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
    },
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
    },
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
    },
    {
      name: "Comunismo: Princípios básicos e guia de leitura",
      description: "Comunismo: Princípios básicos e guia de leitura",
      image: "./assets/images/principios-comunismo.jpg",
      type: "vídeo",
      tags: "#video #youtube",
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
            <Box component="img" src={project.image} />
            <Box className="text-area">
              <Typography component="h3" variant="h6">{project.name}</Typography>
              <Typography component="span" variant="caption">{project.tags}</Typography>
            </Box>
            <Button className="btn-light">Acessar {project.type}</Button>
          </Box>
        ))}
      </Tabs>
    </Box>
  )
}