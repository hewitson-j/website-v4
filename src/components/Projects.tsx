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
import SortHeader from "./utils/SortHeader";
import PageHelmet from "./utils/PageHelmet";

export default function Projects() {
  const projectsArray = [
    { array: featuredProjects, title: "Featured Projects" },
    { array: allProjectEntries, title: "All Projects" },
    { array: professionalProjectEntries, title: "Professional Projects" },
    { array: portfolioProjectEntries, title: "Portfolio Projects" },
  ];

  const [projectArrayIndex, setProjectArrayIndex] = useState(0);

  return (
    <>
      <div className="projects white-background">
        <PageHelmet title="JacobHewitson.com - Projects" />
        <div className="project-body">
          <SortHeader
            arrayLength={projectsArray.length}
            arrayTitle={projectsArray[projectArrayIndex].title}
            index={projectArrayIndex}
            setIndex={setProjectArrayIndex}
          />
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: "1200px", margin: "auto" }}
          >
            {projectsArray[projectArrayIndex].array.map((entry) => (
              <Grid item xs={12} md={6} key={entry.id}>
                <Card
                  title={entry.title}
                  description={entry.description}
                  github={entry.github}
                  link={entry.link}
                  alt={
                    entry.image ? entry.alt : `Default Image for ${entry.title}`
                  }
                  image={entry.image || "/DefaultImage.webp"}
                  longDescription={entry.longDescription}
                  technologies={entry.technologies}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Copyright margin="4rem auto 1rem" />
    </>
  );
}
