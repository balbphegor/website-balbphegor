import React from "react";
import { lookup, text_entries } from "./constants.js";
const Content = (title) => {
  const contentDetails = lookup[title["title"]];
  const contentType = contentDetails["type"],
    contentSrc = contentDetails["src"];
  if (contentType === "iframe") {
    return (
      <iframe className="content" title={"video"} src={contentSrc}></iframe>
    );
  }
  if (contentType === "img") {
    return (
      <img
        className="content"
        src={require(`./assets/${contentSrc}`)}
        alt="dead pic lmao"
      />
    );
  }
  if (contentType === "textarea") {
    return (
      <textarea
        defaultValue={text_entries[lookup[title["title"]]["text_index"]]}
        className="content"
      ></textarea>
    );
  }
};

export default Content;
