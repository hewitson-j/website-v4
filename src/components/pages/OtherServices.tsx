import { Link } from "react-router-dom";
import Copyright from "../Copyright";
import "./OtherServices.css";
import PageTitle from "../utils/PageTitle";
import PageHelmet from "../utils/PageHelmet";

export default function OtherServices() {
  return (
    <>
      <div className="other-services white-background">
        <PageHelmet title="JacobHewitson.com - Other Services" />
        <PageTitle title="Other Services" />
        <h3>
          While software development is my foundation, my expertise extends into
          a variety of other services tailored to bring comprehensive solutions
          to your doorstep. Discover how we can achieve more together.
        </h3>
        <div className="other-services-list">
          <div className="other-services-entries">
            <h2>Notary Public - Utah, Remote</h2>
            <p>
              As a commissioned Notary Public in Utah with authorization to
              notarize remotely for persons both in an out of the State, I
              specialize in both in-person and remote notarizations, offering
              fast, secure services for legal documents, contracts, and real
              estate transactions. My focus on accuracy, reliability, and
              confidentiality ensures your notarization needs are met with the
              highest standards, regardless of your location.
            </p>
            <Link to={"/contact"}>
              <button className="buttons">Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <Copyright margin={"2rem auto"} />
    </>
  );
}
