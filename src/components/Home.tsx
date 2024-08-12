import { Link, useNavigate } from "react-router-dom";
import CapitolProfile from "../images/Capitol Profile Pic.jpg";
import "./Home.css";
import Copyright from "./Copyright";
import PageHelmet from "./utils/PageHelmet";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <PageHelmet title="JacobHewitson.com - Home" />
      <div className="home-main">
        <div className="home-text">
          <h1 id="home-intro-text">I'm Jacob, nice to meet you.</h1>
          <h2 className="home-description" id="home-text-tagline">
            Looking for a <br />
            <span id="home-emphasis-text">Frontend Engineer</span>?
          </h2>
          <h2 className="home-description">
            <br />
            I'm passionate about the apps I build.
            <br />
            Let's see what I can do for you.
          </h2>
          <br />
          <br />
          <Link to={"projects"} className="home-project-link" role="button">
            <button className="buttons">See Projects</button>
          </Link>
        </div>
        <div className="home-pic">
          <img
            id="profile-pic"
            src={CapitolProfile}
            alt="Jacob's Profile Picture"
            title="About Me"
            onClick={() => {
              navigate("/about");
            }}
          />
        </div>
      </div>
      <Copyright margin="7rem auto 1rem" />
    </div>
  );
}
