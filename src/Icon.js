import React from "react";
import { lookup } from "./constants.js";
const Icon = ({ title, createPanel, icon }) => {
  const ispanel = lookup[title]["ispanel"];
  const source = lookup[title]["src"];
  return (
    <div
      onClick={(event) =>
        ispanel ? createPanel(title, source) : window.open(source, "_blank")
      }
      className="icon"
    >
      <div className="icon-anchor" href="/#">
        <img
          className="icon-img"
          src={require(`./assets/icon/${icon}`)}
          alt="123"
        />
        <span className="icon-name">{title}</span>
      </div>
    </div>
  );
};

export default Icon;
