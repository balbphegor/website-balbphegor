import React, { useEffect, useRef } from "react";
import { lookup } from "./constants";
const Panel = ({ children, updateIndex, id, title, closePanel }) => {
  const ref = useRef(null);
  const refHeader = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);
  const refLeft = useRef(null);

  const refTopRight = useRef(null);
  const refTopLeft = useRef(null);
  const refBottomRight = useRef(null);
  const refBottomLeft = useRef(null);

  const hidePanel = () => {
    document.getElementById(`panel-${id}`).style.display = "none";
  };

  useEffect(() => {
    // declarations
    const panel = ref.current;
    const styles = window.getComputedStyle(panel);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let y = 0;
    let x = 0;

    // header drag
    const onMouseDownHeader = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.addEventListener("mousemove", onMouseMoveHeader);
      document.addEventListener("mouseup", onMouseUpHeader);
    };

    const onMouseMoveHeader = (event) => {
      const rect = panel.getBoundingClientRect();
      const dy = y - event.clientY;
      const dx = x - event.clientX;
      x = event.clientX;
      y = event.clientY;
      panel.style.top = `${rect.top - dy}px`;
      panel.style.left = `${rect.left - dx}px`;
    };

    const onMouseUpHeader = (event) => {
      document.removeEventListener("mousemove", onMouseMoveHeader);
    };

    // side handles
    // top handle
    const onMouseDownHandleTop = (event) => {
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleTop);
      document.addEventListener("mouseup", onMouseUpHandleTop);
    };

    const onMouseDragHandleTop = (event) => {
      const rect = panel.getBoundingClientRect();
      const dy = y - event.clientY;
      if (height + dy < 70) return;
      height = height + dy;
      y = event.clientY;
      panel.style.height = `${height}px`;
      panel.style.top = `${rect.top - dy}px`;
    };

    const onMouseUpHandleTop = () => {
      document.removeEventListener("mousemove", onMouseDragHandleTop);
    };

    // bottom handle
    const onMouseDownHandleBottom = (event) => {
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleBottom);
      document.addEventListener("mouseup", onMouseUpHandleBottom);
    };

    const onMouseDragHandleBottom = (event) => {
      const dy = y - event.clientY;
      if (height - dy < 70) return;
      height = height - dy;
      y = event.clientY;
      panel.style.height = `${height}px`;
    };

    const onMouseUpHandleBottom = () => {
      document.removeEventListener("mousemove", onMouseDragHandleBottom);
    };

    // left handle
    const onMouseDownHandleLeft = (event) => {
      x = event.clientX;
      document.addEventListener("mousemove", onMouseDragHandleLeft);
      document.addEventListener("mouseup", onMouseUpHandleLeft);
    };

    const onMouseDragHandleLeft = (event) => {
      const rect = panel.getBoundingClientRect();
      const dx = x - event.clientX;
      if (width + dx < 150) return;
      width = width + dx;
      x = event.clientX;
      panel.style.width = `${width}px`;
      panel.style.left = `${rect.left - dx}px`;
    };

    const onMouseUpHandleLeft = () => {
      document.removeEventListener("mousemove", onMouseDragHandleLeft);
    };

    //right
    const onMouseDownHandleRight = (event) => {
      x = event.clientX;
      document.addEventListener("mousemove", onMouseDragHandleRight);
      document.addEventListener("mouseup", onMouseUpHandleRight);
    };

    const onMouseDragHandleRight = (event) => {
      const dx = x - event.clientX;
      if (width - dx < 150) return;
      width = width - dx;
      x = event.clientX;
      panel.style.width = `${width}px`;
    };

    const onMouseUpHandleRight = () => {
      document.removeEventListener("mousemove", onMouseDragHandleRight);
    };

    // corner drags

    // top right
    const onMouseDownHandleTopRight = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleTopRight);
      document.addEventListener("mouseup", onMouseUpHandleTopRight);
    };

    const onMouseDragHandleTopRight = (event) => {
      const rect = panel.getBoundingClientRect();
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (width - dx < 150 || height + dy < 70) return;
      width = width - dx;
      height = height + dy;
      x = event.clientX;
      y = event.clientY;
      panel.style.width = `${width}px`;
      panel.style.height = `${height}px`;
      panel.style.top = `${rect.top - dy}px`;
    };

    const onMouseUpHandleTopRight = () => {
      document.removeEventListener("mousemove", onMouseDragHandleTopRight);
    };

    // top left
    const onMouseDownHandleTopLeft = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleTopLeft);
      document.addEventListener("mouseup", onMouseUpHandleTopLeft);
    };

    const onMouseDragHandleTopLeft = (event) => {
      const rect = panel.getBoundingClientRect();
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (width + dx < 150 || height + dy < 70) return;
      height = height + dy;
      width = width + dx;
      x = event.clientX;
      y = event.clientY;
      panel.style.height = `${height}px`;
      panel.style.width = `${width}px`;
      panel.style.top = `${rect.top - dy}px`;
      panel.style.left = `${rect.left - dx}px`;
    };

    const onMouseUpHandleTopLeft = () => {
      document.removeEventListener("mousemove", onMouseDragHandleTopLeft);
    };

    // bottom right
    const onMouseDownHandleBottomRight = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleBottomRight);
      document.addEventListener("mouseup", onMouseUpHandleBottomRight);
    };

    const onMouseDragHandleBottomRight = (event) => {
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (width - dx < 150 || height - dy < 70) return;
      height = height - dy;
      width = width - dx;
      x = event.clientX;
      y = event.clientY;
      panel.style.height = `${height}px`;
      panel.style.width = `${width}px`;
    };

    const onMouseUpHandleBottomRight = () => {
      document.removeEventListener("mousemove", onMouseDragHandleBottomRight);
    };

    // bottom left
    const onMouseDownHandleBottomLeft = (event) => {
      x = event.clientX;
      y = event.clientY;
      document.addEventListener("mousemove", onMouseDragHandleBottomLeft);
      document.addEventListener("mouseup", onMouseUpHandleBottomLeft);
    };

    const onMouseDragHandleBottomLeft = (event) => {
      const rect = panel.getBoundingClientRect();
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (width + dx < 150 || height - dy < 70) return;
      height = height - dy;
      width = width + dx;
      x = event.clientX;
      y = event.clientY;
      panel.style.height = `${height}px`;
      panel.style.width = `${width}px`;
      panel.style.left = `${rect.left - dx}px`;
    };

    const onMouseUpHandleBottomLeft = () => {
      document.removeEventListener("mousemove", onMouseDragHandleBottomLeft);
    };

    //
    const header = refHeader.current;
    header.addEventListener("mousedown", onMouseDownHeader);
    const handleTop = refTop.current;
    handleTop.addEventListener("mousedown", onMouseDownHandleTop);
    const handleBottom = refBottom.current;
    handleBottom.addEventListener("mousedown", onMouseDownHandleBottom);
    const handleLeft = refLeft.current;
    handleLeft.addEventListener("mousedown", onMouseDownHandleLeft);
    const handleRight = refRight.current;
    handleRight.addEventListener("mousedown", onMouseDownHandleRight);
    const handleTopRight = refTopRight.current;
    handleTopRight.addEventListener("mousedown", onMouseDownHandleTopRight);
    const handleTopLeft = refTopLeft.current;
    handleTopLeft.addEventListener("mousedown", onMouseDownHandleTopLeft);
    const handleBottomRight = refBottomRight.current;
    handleBottomRight.addEventListener(
      "mousedown",
      onMouseDownHandleBottomRight
    );
    const handleBottomLeft = refBottomLeft.current;
    handleBottomLeft.addEventListener("mousedown", onMouseDownHandleBottomLeft);

    return () => {
      header.removeEventListener("mousedown", onMouseDownHeader);
      handleTop.removeEventListener("mousedown", onMouseDownHandleTop);
      handleBottom.removeEventListener("mousedown", onMouseDownHandleBottom);
      handleLeft.removeEventListener("mousedown", onMouseDownHandleLeft);
      handleRight.removeEventListener("mousedown", onMouseDownHandleRight);
      handleTopRight.removeEventListener(
        "mousedown",
        onMouseDownHandleTopRight
      );
      handleTopLeft.removeEventListener("mousedown", onMouseDownHandleTopLeft);
      handleBottomRight.removeEventListener(
        "mousedown",
        onMouseDownHandleBottomRight
      );
      handleBottomLeft.removeEventListener(
        "mousedown",
        onMouseDownHandleBottomLeft
      );
    };
  }, []);
  return (
    <div
      onMouseDown={(event) => updateIndex(id)}
      ref={ref}
      id={`panel-${id}`}
      className="panel"
    >
      <div ref={refHeader} className="header">
        <img
          className="header-icon header-decoration"
          src={require(`./assets/icon/${lookup[title]["isrc"]}`)}
          alt="1234"
        />
        <h1 className="header-text header-decoration">{title}</h1>
        <div className="button-container">
          <button onClick={(event) => hidePanel(id)} className="header-buttons">
            <img id="minimize" src={require("./assets/minimize.png")} alt="" />
          </button>
          <button
            onClick={(event) => closePanel(id)}
            className="header-buttons"
          >
            <img id="minimize" src={require("./assets/close.png")} alt="" />
          </button>
        </div>
      </div>
      <div className="menubar">
        <div className="menu-items">
          <button className="menu-button">file</button>
          <button className="menu-button">edit</button>
          <button className="menu-button">help</button>
        </div>
      </div>
      <div className="content-wrapper">{children}</div>

      <div ref={refTop} className="resize handle-top"></div>
      <div ref={refLeft} className="resize handle-left"></div>
      <div ref={refBottom} className="resize handle-bottom"></div>
      <div ref={refRight} className="resize handle-right"></div>

      <div ref={refTopRight} className="corner top-right"></div>
      <div ref={refTopLeft} className="corner top-left"></div>
      <div ref={refBottomRight} className="corner bottom-right"></div>
      <div ref={refBottomLeft} className="corner bottom-left"></div>
    </div>
  );
};
export default Panel;
