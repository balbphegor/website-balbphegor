import React, { useState } from "react";
import "./App.css";
import Panel from "./Panel";
import Taskbar from "./Taskbar";
import TaskbarTab from "./TaskbarTab";
import Icon from "./Icon";
import Content from "./Content";
import { lookup } from "./constants.js";
function App() {
  // z-index counter
  const [foremostIndex, setForemostIndex] = useState(1);
  /// panel index counter
  const [distId, setDistId] = useState(1);
  const updateIndex = (id) => {
    setForemostIndex(foremostIndex + 1);
    document.getElementById(`panel-${id}`).style.zIndex = foremostIndex;
  };
  const [contentArray, setContentArray] = useState([[0, "About Me!"]]);
  const closePanel = (id) => {
    setContentArray(contentArray.filter((x) => x[0] !== id));
  };
  const showPanel = (id) => {
    document.getElementById(`panel-${id}`).style.display = "";
  };
  const createPanel = (title) => {
    setContentArray([...contentArray, [distId, title]]);
    setDistId(distId + 1);
  };
  return (
    <div className="body">
      <div className="desktop-container">
        {Object.keys(lookup).map((key, index) => (
          <Icon
            key={index}
            createPanel={createPanel}
            title={key}
            icon={lookup[key]["isrc"]}
          ></Icon>
        ))}
      </div>
      <Taskbar>
        {contentArray.map((x) => (
          <TaskbarTab
            key={x[0]}
            showPanel={showPanel}
            updateIndex={updateIndex}
            id={x[0]}
            title={x[1]}
          ></TaskbarTab>
        ))}
      </Taskbar>
      {contentArray.map((x) => (
        <Panel
          key={x[0]}
          closePanel={closePanel}
          updateIndex={updateIndex}
          id={x[0]}
          title={x[1]}
        >
          {<Content key={x[0]} title={x[1]}></Content>}
        </Panel>
      ))}
    </div>
  );
}

export default App;
