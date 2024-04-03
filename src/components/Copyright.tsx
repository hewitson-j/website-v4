import { Link } from "react-router-dom";
import "./Copyright.css";

interface CopyrightProps {
  margin: string;
}

export default function Copyright({ margin }: CopyrightProps) {
  return (
    <div id="copyright-line" style={{ margin: margin }}>
      <hr />
      <p>Copyright © Jacob Hewitson 2023</p>
      <p><Link to={'/terms-and-conditions'}>Terms and Conditions (Updated 4/3/2024)</Link></p>
    </div>
  );
}
