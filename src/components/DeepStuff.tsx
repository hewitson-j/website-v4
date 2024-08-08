import { useState } from "react";
import "./DeepStuff.css";
import { thoughtsArray } from "./DeepStuffContent";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Copyright from "./Copyright";

export default function DeepStuff() {
  const [thoughtIndex, setThoughtIndex] = useState(0);

  const handleLeft = () => {
    if (thoughtIndex === 0) {
      setThoughtIndex(thoughtsArray.length - 1);
    } else {
      setThoughtIndex(thoughtIndex - 1);
    }
  };
  const handleRight = () => {
    if (thoughtIndex === thoughtsArray.length - 1) {
      setThoughtIndex(0);
    } else {
      setThoughtIndex(thoughtIndex + 1);
    }
  };

  return (
    <div className="deep-stuff">
      <h1>Deep Thoughts</h1>
      <p className="deep-stuff-paragraphs">
        Sometimes I have moments of inspiration, in coding, in thoughts, really
        all over. Here I've decided to keep a record of some of the more
        profound thoughts and moments I've had in my life. Although this website
        is my portfolio website, it is also about me, and I think it should
        reflect the way I think, and people can see how I think if they are
        interested in it.
      </p>
      <h2>Thoughts of Inspiration</h2>
      <div className="deep-stuff-nav">
        <button onClick={handleLeft}>
          <ArrowLeftIcon />
        </button>
        <h3>{thoughtsArray[thoughtIndex].title}</h3>
        <button onClick={handleRight}>
          <ArrowRightIcon />
        </button>
      </div>
      <div className="deep-stuff-content">
        {thoughtsArray[thoughtIndex].content.map((paragraph) => {
          if (paragraph === "") {
            return <br />;
          } else {
            return <p className="thoughts-paragraphs">{paragraph}</p>;
          }
        })}
        <hr />
        <p>
          Copyright © Jacob Hewitson -{" "}
          <i>{thoughtsArray[thoughtIndex].copyrightDate}</i>
        </p>
      </div>
      <Copyright margin={"4rem auto 1rem"} />
    </div>
  );
}
