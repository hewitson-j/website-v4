import "./Copyright.css";

interface CopyrightProps {
  margin: string;
}

export default function Copyright({ margin }: CopyrightProps) {
  return (
    <div id="copyright-line" style={{ margin: margin }}>
      <hr />
      Copyright © Jacob Hewitson 2023
    </div>
  );
}
