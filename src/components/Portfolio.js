import React from "react";
import Work from "./layout/Work";
import constants from "../constants";
import setTitle from "../events/setTitle";
import "../scss/portfolio.scss";

export default function Portfolio() {
  setTitle("portfolio");
  return (
    <div id="portfolio">
      {constants.map((i, key) => (
        <Work
          img={i.img}
          sourceCode={i.sourceCode}
          link={i.link}
          name={i.name}
          key={key}
          desc={i.desc}
        />
      ))}
    </div>
  );
}
