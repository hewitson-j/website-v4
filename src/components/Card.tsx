import { useState } from "react";
import "./Card.css";

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  link?: string;
  github?: string;
}

export default function Card({
  title = "Default",
  description = "Default Description",
  image = "https://t3.ftcdn.net/jpg/01/62/06/40/360_F_162064034_HI2YEgV7km3HMy0rccQczKH2vvpI4OnB.jpg",
  alt = "Alt",
  link,
  github = "http://github.com/hewitson-j",
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card-body">
      <h3>{title}</h3>
      <div
        className={`image-container ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <img className="card-image" src={image} alt={alt} />
        <div className="details">
          <p>{description}</p>
          <div className="card-links">
            {link && <a href={link}>See App</a>} <a href={github}>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
