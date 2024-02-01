import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import "./OtherServices.css";

export default function OtherServices() {
  return (
    <div className="other-services">
      <h1>Other Services</h1>
      <h3>
        While software development is my foundation, my expertise extends into a
        variety of other services tailored to bring comprehensive solutions to
        your doorstep. Discover how we can achieve more together.
      </h3>
      <div className="other-services-list">
        <div className="other-services-entries">
          <h2>Notary Public - Utah, Remote</h2>
          <p>
            As a commissioned Notary Public in the State of Utah, I offer
            comprehensive notarial services to meet a variety of legal
            documentation needs. I am also authorized to perform remote
            notarizations, enabling me to provide efficient and secure notary
            services to clients both within and outside of Utah. My commitment
            to accuracy, reliability, and confidentiality ensures that your
            documents are notarized in accordance with Utah's legal
            requirements. Whether you're in need of notarizing legal documents,
            contracts, real estate transactions, or any other documents
            requiring a notarized signature, I am here to assist you with
            professionalism and convenience.
          </p>
          <Link to={"/contact"}>
            <button>Contact</button>
          </Link>
        </div>
      </div>
      <Copyright margin={"2rem auto"} />
    </div>
  );
}
