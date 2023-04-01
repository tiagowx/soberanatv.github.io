import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../Layout";
import { Contact } from "./Contact";
import { Creators } from "./Creators";
import { Faq } from "./Faq";
import { Home } from "./Home";
import { Manifest } from "./Manifest";
import { Projects } from "./Projects";

export const Pages = () => {
  const pages = [
    {
      "name": "Home",
      "path": "/",
      "element": <Home />
    },
    {
      "name": "Contato",
      "path": "/contato",
      "element": <Contact />
    },
    {
      "name": "Projetos",
      "path": "/projetos",
      "element": <Projects />
    },
    {
      "name": "Faq",
      "path": "/faq",
      "element": <Faq />
    },
    {
      "name": "Manifesto",
      "path": "/manifesto",
      "element": <Manifest />
    },
    {
      "name": "Criadores",
      "path": "/criadores",
      "element": <Creators />
    },
  ]

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {pages.length > 0 && pages.map(page => (
            <Route path={page.path} element={page.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Layout>

  );
}