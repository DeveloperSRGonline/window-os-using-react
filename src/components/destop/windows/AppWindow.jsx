import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeApp, minimizeApp } from "../../../actions/index";
import Draggable from "react-draggable";
import "./AppWindow.scss";

export const AppWindow = ({ appId, title, icon, children }) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  // Redux se is app ka current state lo
  const app = useSelector((state) => state.apps.find((a) => a.id === appId));

  // Jab window pe click ho to focus karo (sabse upar lao)
  const handleFocus = () => {
    dispatch(focusApp(appId));
  };

  const handleClose = () => dispatch(closeApp(appId));
  const handleMinimize = () => dispatch(minimizeApp(appId));

  return (
    <Draggable handle=".app-header" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="app-window"
        onMouseDown={handleFocus}
        style={{ zIndex: app?.zIndex || 100 }}
      >
        <div className="app-header">
          <span>
            {icon} {title}
          </span>
          <div className="window-buttons">
            <button className="minimize-btn" onClick={handleMinimize}>
              —
            </button>
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
          </div>
        </div>
        <div className="app-body">{children}</div>
      </div>
    </Draggable>
  );
};
