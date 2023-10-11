import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="icons">
        <a href="mailto:jacob.a.hewitson@gmail.com">
          <EmailIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/jacob-hewitson-18b93321a/">
          <LinkedInIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://github.com/hewitson-j">
          <GitHubIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://www.facebook.com/jake.hewitson.31">
          <FacebookIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://www.instagram.com/the_man_hewi/">
          <InstagramIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
      </div>
      <div className="links">
        <Link to={"/"} className="nav-links">
          Home
        </Link>
        <Link to={"projects"} className="nav-links">
          Projects
        </Link>
        <p>Contact Me</p>
      </div>
    </div>
  );
}
