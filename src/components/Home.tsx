import { Link } from "react-router-dom";
import ProfilePic from "../images/ProfilePic.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
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
          <Link to={"projects"} className="home-project-link">
            See Projects
          </Link>
        </div>
        <div className="home-pic">
          <img
            id="profile-pic"
            src={ProfilePic}
            alt="Jacob's Profile Picture"
          />
        </div>
      </div>
    </>
  );
}
