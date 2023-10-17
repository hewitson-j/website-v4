import { useState } from "react";
import "./Card.css";
import { Button } from "@mui/material";
import DetailsModal from "./DetailsModal";

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  longDescription?: string;
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
  longDescription = "This is the default for the Project Description.",
  link,
  github = "http://github.com/hewitson-j",
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIsOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="card-body">
      <h3 id="card-header">{title}</h3>
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
          <div id="modal-link">
            <Button
              variant="text"
              onClick={handleIsOpen}
              sx={{ color: "black", margin: "1rem", fontSize: "12pt" }}
            >
              See More
            </Button>
          </div>
          <DetailsModal
            isOpen={modalOpen}
            handleIsOpen={handleIsOpen}
            title={title}
            github={github}
            link={link}
            longDescription={longDescription}
          />
        </div>
      </div>
    </div>
  );
}
