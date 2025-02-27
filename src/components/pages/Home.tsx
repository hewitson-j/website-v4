import { useNavigate } from "react-router-dom";
import "./Home.css";
import Copyright from "../Copyright";
import PageHelmet from "../utils/PageHelmet";
import Banner from "../Banner";
import Cookies from "js-cookie";

export default function Home() {
  const hideBanner = Cookies.get("hideBanner");

  return (
    <>
      {!hideBanner && (
        <Banner message="Update: A recent domain issue briefly caused an unauthorized site to appear here. This has been fully resolved. Thank you for your patience!" />
      )}
      <div className="home white-background">
        <PageHelmet title="JacobHewitson.com - Home" />
        <div className="home-main">
          <div className="home-text">
            <h1 id="home-intro-text">I'm Jacob, nice to meet you.</h1>
            <h2 className="home-description" id="home-text-tagline">
              Looking for a <br />
              <span id="home-emphasis-text">Software Engineer</span>?
            </h2>
            <h2 className="home-description">
              <br />
              I'm passionate about the apps I build.
              <br />
              Let's see what I can do for you.
            </h2>
          </div>
          <div className="home-nav-buttons">
            <HomeNavButton path="/projects">See Projects</HomeNavButton>
            <HomeNavButton path="/contact">Contact Me</HomeNavButton>
            <HomeNavButton path="/about">About Me</HomeNavButton>
          </div>
        </div>
      </div>
      <Copyright margin="auto" />
    </>
  );
}

interface HomeNavButtonProps {
  children: string;
  path: string;
}

function HomeNavButton({ children, path }: HomeNavButtonProps) {
  const navigate = useNavigate();
  return (
    <button className="home-nav-button buttons" onClick={() => navigate(path)}>
      {children}
    </button>
  );
}
