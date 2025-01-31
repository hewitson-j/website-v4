import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import cssImage from "../images/css.png";
import javaImage from "../images/Java.png";
import javafxImage from "../images/javafx.png";
import jsImage from "../images/JavaScript.png";
import htmlImage from "../images/html.png";
import jdbcImage from "../images/JDBC.jpg";
import muiImage from "../images/mui.png";
import mysqlImage from "../images/mysql.png";
import pythonImage from "../images/python.png";
import reactImage from "../images/react.png";
import bootstrapImage from "../images/bootstrap-logo.svg";
import typescriptImage from "../images/TypeScript.png";
import githubImage from "../images/github.png";
import postgresImage from "../images/postgres.png";
import supabaseImage from "../images/supabase.png";
import awsImage from "../images/AWS.png";

import "./DetailsModal.css";
import { Button, Grid } from "@mui/material";

const style = {
  position: "absolute",
  color: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  backgroundColor: "rgb(51, 51, 51)",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

interface DetailsModalProps {
  isOpen: boolean;
  handleIsOpen: () => void;
  title: string;
  github: string;
  link?: string;
  technologies?: string[];
  longDescription: string;
}

export default function DetailsModal({
  isOpen,
  handleIsOpen,
  title,
  github,
  link,
  longDescription,
  technologies,
}: DetailsModalProps) {
  const getImageForTechnology = (technology: string) => {
    switch (technology.toLowerCase()) {
      case "react":
        return reactImage;
      case "javascript":
        return jsImage;
      case "material-ui":
        return muiImage;
      case "css":
        return cssImage;
      case "html":
        return htmlImage;
      case "java":
        return javaImage;
      case "javafx":
        return javafxImage;
      case "jdbc":
        return jdbcImage;
      case "python":
        return pythonImage;
      case "mysql":
        return mysqlImage;
      case "bootstrap":
        return bootstrapImage;
      case "github":
        return githubImage;
      case "typescript":
        return typescriptImage;
      case "postgres":
        return postgresImage;
      case "supabase":
        return supabaseImage;
      case "aws":
        return awsImage;
      default:
        return;
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleIsOpen}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Button onClick={handleIsOpen}>
                  <CloseIcon sx={{ color: "white" }} />
                </Button>
              </Grid>
            </Grid>
            <div className="modal-content">
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {longDescription}
              </Typography>
              <br />
              {technologies && (
                <Typography variant="h6">Technologies used: </Typography>
              )}
              <div className="modal-images-body">
                {technologies && (
                  <>
                    {technologies.map((technology, index) => (
                      <img
                        className="modal-images"
                        key={index}
                        src={getImageForTechnology(technology)}
                        alt={technology}
                        title={technology}
                      />
                    ))}
                  </>
                )}
              </div>
              <Typography variant="h6">Links:</Typography>
              <div className="modal-links">
                <a href={github} target="_blank">
                  GitHub
                </a>
                {link && (
                  <a href={link} target="_blank">
                    See App
                  </a>
                )}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
