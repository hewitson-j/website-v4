import { Grid } from "@mui/material";
import "./Projects.css";
import Card from "./Card";

export default function Projects() {
  return (
    <div className="project-body">
      <h1 className="projects-header">Featured Projects</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}
