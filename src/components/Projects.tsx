import { Grid } from "@mui/material";
import "./Projects.css";
import Card from "./Card";
import projectEntries from "./ProjectEntries";
import Copyright from "./Copyright";

export default function Projects() {
  return (
    <div className="project-body">
      <h1 className="projects-header">Featured Projects</h1>
      <Grid container spacing={2}>
        {projectEntries.map((entry) => (
          <Grid item xs={12} md={6} key={entry.id}>
            <Card
              title={entry.title}
              description={entry.description}
              github={entry.github}
              link={entry.link}
              alt={entry.alt}
              image={entry.image}
            />
          </Grid>
        ))}
      </Grid>
      <Copyright margin="4rem auto 1rem" />
    </div>
  );
}
