import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="icons">
        <Link to={"contact"}>
          <EmailIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </Link>

        <a
          href="https://www.linkedin.com/in/jacob-hewitson-18b93321a/"
          target="_blank"
        >
          <LinkedInIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://github.com/hewitson-j" target="_blank">
          <GitHubIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://www.facebook.com/jake.hewitson.31" target="_blank">
          <FacebookIcon
            className="icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </a>
        <a href="https://www.instagram.com/the_man_hewi/" target="_blank">
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
        <Link to={"contact"} className="nav-links">
          Contact
        </Link>
      </div>
    </div>
  );
}
