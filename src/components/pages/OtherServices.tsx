import { Link } from "react-router-dom";
import Copyright from "../Copyright";
import "./OtherServices.css";
import PageTitle from "../utils/PageTitle";
import PageHelmet from "../utils/PageHelmet";

// Currently I don't have any addt'l services to list, but this page was once used. Keeping in case it should be
// reused or reactivated for addt'l services

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
