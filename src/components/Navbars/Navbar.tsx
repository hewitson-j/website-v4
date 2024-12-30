import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ReactNode } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="icons">
        <IconLink path="/contact">
          <EmailIcon />
        </IconLink>
        <IconLink
          path="https://www.linkedin.com/in/jacob-hewitson-18b93321a/"
          isExternal
        >
          <LinkedInIcon />
        </IconLink>
        <IconLink path="https://github.com/hewitson-j" isExternal>
          <GitHubIcon />
        </IconLink>
        <IconLink path="https://www.facebook.com/jake.hewitson.31" isExternal>
          <FacebookIcon />
        </IconLink>
        <IconLink path="https://www.instagram.com/the_man_hewi/" isExternal>
          <InstagramIcon />
        </IconLink>
      </div>
      <div className="links">
        <Link to={"/"} className="nav-links" role="button">
          Home
        </Link>
        <Link to={"projects"} className="nav-links" role="button">
          Projects
        </Link>
        <Link to={"other-services"} className="nav-links" role="button">
          Other Services
        </Link>
        <Link to={"contact"} className="nav-links" role="button">
          Contact
        </Link>
      </div>
    </nav>
  );
}

interface IconLinkProps {
  path: string;
  children: ReactNode;
  isExternal?: boolean;
}

function IconLink({ path, children, isExternal }: IconLinkProps) {
  const navigate = useNavigate();

  const handleClick = () =>
    isExternal ? window.open(path, "_blank") : navigate(path);

  return (
    <div className="icon" onClick={handleClick}>
      {children}
    </div>
  );
}
