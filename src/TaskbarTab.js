import React from "react";

function TaskbarTab({ title, id, updateIndex, showPanel }) {
  return (
    <button
      onClick={(event) => {
        updateIndex(id);
        showPanel(id);
      }}
      className="taskbar-element"
    >
      <img
        className="start-icon"
        src={require("./assets/start.png")}
        alt="alt"
      ></img>
      <span className="element-text">{title}</span>
    </button>
  );
}

export default TaskbarTab;
