import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const About = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        Sobre Alestormdev
      </Typography>
      <br />
      <Typography variant="p">
        Mi nombre es Alejandro Aguirre 👋. Soy un desarrollador independiente,
        vivo en La Paz - Bolivia.
        <br />
        <br />
        Tengo más de 3 años de experiencia en el desarrollo web, principalmente
        en el backend, en lenguajes como c#, java, javascript
        <br />
        <br />
        En esta página compartiré mi aprendizaje en el desarrollo nativo en
        Android y con el tiempo subir mis proyectos🤓.
        <br />
        <br />
        ¡Gracias por visitar mi página😀!
      </Typography>
      <br />
      <br />

      <Stack direction="row" spacing={2}>
        <a href="https://github.com/alestorm" target="_blank">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#202020" }}
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </a>
        <a href="https://twitter.com/alestormdev" target="_blank">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1c9cea" }}
            startIcon={<TwitterIcon />}
          >
            Twitter
          </Button>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61551736898512"
          target="_blank"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#395693" }}
            startIcon={<FacebookIcon />}
          >
            Facebook
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-aguirre-b7982a17b/"
          target="_blank"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#000000" }}
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </a>
        <a href="mailto:alejandro.aguirre.1091@gmail.com">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#d94e45" }}
            startIcon={<MailIcon />}
          >
            Gmail
          </Button>
        </a>
      </Stack>
    </>
  );
};

export default About;
