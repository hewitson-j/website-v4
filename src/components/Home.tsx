import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import CapitolProfile from '../images/Capitol Profile Pic.jpg'
import "./Home.css";
import Copyright from "./Copyright";

export default function Home() {
  return (
      <div className="home">
        <Helmet>
          <title>JacobHewitson.com - Home</title>
        </Helmet>
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
            <img id="profile-pic" src={CapitolProfile} alt="Jacob's Profile Picture" />
          </div>
        </div>
        <Copyright margin="7rem auto 1rem" />
      </div>
  );
}
