import { useState } from "react";
import "./DeepStuff.css";
import { thoughtsArray } from "./DeepStuffContent";
import Copyright from "./Copyright";
import SortHeader from "./utils/SortHeader";

export default function DeepStuff() {
  const [thoughtIndex, setThoughtIndex] = useState(0);

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
      <SortHeader
        arrayLength={thoughtsArray.length}
        arrayTitle={thoughtsArray[thoughtIndex].title}
        index={thoughtIndex}
        setIndex={setThoughtIndex}
      />
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
