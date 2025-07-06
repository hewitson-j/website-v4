import { Link } from "react-router-dom";
import "./Copyright.css";

interface CopyrightProps {
  margin: string;
}

export default function Copyright({ margin }: CopyrightProps) {
  return (
    <div id="copyright-line" style={{ margin: margin }}>
      <hr />
      <p>Website Copyright © Jacob Hewitson 2025</p>
      <p>
        <Link to={"/terms-and-conditions"} className="legal-links">
          Terms and Conditions (Updated 4/18/2024)
        </Link>{" "}
        ||{" "}
        <Link to={"/privacy-policy"} className="legal-links">
          Privacy Policy (Updated 4/18/2024)
        </Link>
      </p>
    </div>
  );
}
