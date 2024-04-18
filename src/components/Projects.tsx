import { Grid } from "@mui/material";
import "./Projects.css";
import Card from "./Card";
import {
  portfolioProjectEntries,
  professionalProjectEntries,
  allProjectEntries,
  featuredProjects,
} from "./ProjectEntries";
import Copyright from "./Copyright";
import { useState } from "react";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Helmet } from "react-helmet";

export default function Projects() {
  const projectsArray = [
    { array: featuredProjects, title: "Featured Projects" },
    { array: allProjectEntries, title: "All Projects" },
    { array: professionalProjectEntries, title: "Professional Projects" },
    { array: portfolioProjectEntries, title: "Portfolio Projects" },
  ];

  const [projectArrayIndex, setProjectArrayIndex] = useState(0);

  const handleLeft = () => {
    if (projectArrayIndex === 0) {
      setProjectArrayIndex(projectsArray.length - 1);
    } else {
      setProjectArrayIndex(projectArrayIndex - 1);
    }
  };

  const handleRight = () => {
    if (projectArrayIndex === projectsArray.length - 1) {
      setProjectArrayIndex(0);
    } else {
      setProjectArrayIndex(projectArrayIndex + 1);
    }
  };

  return (
    <div className="projects">
      <Helmet>
          <title>JacobHewitson.com - Projects</title>
      </Helmet>
      <div className="project-body">
        <div className="projects-header">
          <button onClick={handleLeft}>
            <ArrowLeftIcon />
          </button>
          <h1>{projectsArray[projectArrayIndex].title}</h1>
          <button onClick={handleRight}>
            <ArrowRightIcon />
          </button>
        </div>
        <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto" }}>
          {projectsArray[projectArrayIndex].array.map((entry) => (
            <Grid item xs={12} md={6} key={entry.id}>
              <Card
                title={entry.title}
                description={entry.description}
                github={entry.github}
                link={entry.link}
                alt={entry.alt}
                image={entry.image || '/DefaultImage.webp'}
                longDescription={entry.longDescription}
                technologies={entry.technologies}
              />
            </Grid>
          ))}
        </Grid>
        <Copyright margin="4rem auto 1rem" />
      </div>
    </div>
  );
}
