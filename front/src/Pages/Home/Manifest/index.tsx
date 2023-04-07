import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import ReactMarkdown from "react-markdown";
import manifest from "./manifest.md";
import { useEffect, useState } from "react";

export const Manifest: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [article, setArticle] = useState("");

  const handleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    fetch(manifest).then((res) => res.text()).then((text) => setArticle(text));
  });

  return (
    <Box component="section" sx={styles} >
      <Typography component="h2" variant="h3">Manifesto</Typography>
      <Box component="article">
        <ReactMarkdown className="text" children={isExpanded ? article : `${article.slice(0, 721)}...`} />
        <Button className="btn-light" size="small" onClick={handleExpand}>
          {isExpanded ? "Ver menos" : "Ver mais"}
        </Button>
      </Box>

    </Box>
  )
}