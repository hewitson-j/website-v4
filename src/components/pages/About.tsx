import "./About.css";
import profilePic from "../../images/Capitol Profile Pic.jpg";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "../Copyright";
import PageTitle from "../utils/PageTitle";
import PageHelmet from "../utils/PageHelmet";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="about white-background">
        <PageHelmet title="JacobHewitson.com - About" />
        <PageTitle title="Nice to Meet You!" />
        <div className="about-intro">
          <img
            src={profilePic}
            id="about-profile-pic"
            alt="Jacob Hewitson Profile Pic"
            title="Profile Pic"
          />
          <p>
            It's really nice to meet you. My name is Jacob Hewitson and I am a
            software engineer. I am a Junior Full-Stack Software Developer at{" "}
            <a href="https://www.rainfocus.com/" target="_blank">
              RainFocus
            </a>
            . On this page you can get to know a little bit about me! If you're
            interested in working with me, here is a link to my resume at{" "}
            <a href="http://www.jacobhewitsonresume.com" target="_blank">
              jacobhewitsonresume.com
            </a>
            .
          </p>
        </div>
        <section>
          <h2>School</h2>
          <p className="paragraphs">
            I graduated with my Masters of Software Engineering in June, 2025
            and my Bachelor of Computer Science in November, 2022 from Western
            Governors Univerisity. Below are my credentials and certifications:
          </p>
          <ul className="paragraphs">
            <li>
              Masters of Software Engineering from Western Governors University
              (Graduated June 2025)
            </li>
            <li>
              Bachelors of Computer Science from Western Governors University
              (Graduated November 2022)
            </li>
            <li>CompTIA Project+ Certification (issued Jun. 2022)</li>
            <li>ITIL v4 Foundations Certificate (issued Jun. 2022)</li>
          </ul>
        </section>
        <section>
          <h2>Work</h2>
          <p className="paragraphs">
            I currently work as a Jr. Software Developer at{" "}
            <a href="https://www.rainfocus.com/" target="_blank">
              RainFocus
            </a>
            . Prior to this, I also worked with{" "}
            <a href="http://www.familysearch.org">FamilySearch</a>. I also built
            and manage web applications and websites for several organizations
            and clients such as{" "}
            <a href="http://leapsandboundsprek.com">
              Leaps and Bounds Preschool, Colorado Springs
            </a>{" "}
            and the <a href="http://minegrinder.com">Mine Grinder</a> book
            series.
          </p>
        </section>
        <section>
          <h2>Reach out!</h2>
          <p className="paragraphs">
            I'm always looking to share what I'm working on. Feel free to reach
            out by clicking this link <Link to={"/contact"}>here</Link> or by
            clicking the button below.
          </p>
          <button onClick={() => navigate("/contact")} className="buttons">
            Contact Me!
          </button>
        </section>
      </div>
      <Copyright margin="1rem auto" />
    </>
  );
}
