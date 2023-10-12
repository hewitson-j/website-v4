import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./MobileNavbarMenu.css";

import { Link } from "react-router-dom";

interface MobileNavbarMenuInterface {
  handler: () => void;
}

export default function MobileNavbarMenu({
  handler,
}: MobileNavbarMenuInterface) {
  return (
    <div className="navbar-menu">
      <div className="mobile-links">
        <Link to={"/"} className="mobile-nav-links" onClick={handler}>
          Home
        </Link>
        <Link to={"projects"} className="mobile-nav-links" onClick={handler}>
          Projects
        </Link>
        <Link to={"contact"} className="mobile-nav-links" onClick={handler}>
          Contact
        </Link>
      </div>

      <hr className="mobile-hr" />

      <div className="mobile-nav-icons">
        <Link to={"contact"} className="icon-links" onClick={handler}>
          <EmailIcon
            className="mobile-icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />{" "}
          Contact
        </Link>

        <a
          href="https://www.linkedin.com/in/jacob-hewitson-18b93321a/"
          className="icon-links"
          target="_blank"
        >
          <LinkedInIcon
            className="mobile-icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />{" "}
          LinkedIn
        </a>
        <a
          href="https://github.com/hewitson-j"
          className="icon-links"
          target="_blank"
        >
          <GitHubIcon
            className="mobile-icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />{" "}
          Github
        </a>
        <a
          href="https://www.facebook.com/jake.hewitson.31"
          className="icon-links"
          target="_blank"
        >
          <FacebookIcon
            className="mobile-icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />{" "}
          Facebook
        </a>
        <a
          href="https://www.instagram.com/the_man_hewi/"
          className="icon-links"
          target="_blank"
        >
          <InstagramIcon
            className="mobile-icon"
            sx={{ color: "white", fontSize: "2rem" }}
          />{" "}
          Instagram
        </a>
      </div>
    </div>
  );
}
