import React from "react";
import { useDispatch } from "react-redux";
import { apps } from "../../utils/apps";
import { openApp } from "../../actions";
import "./Desktop.scss";

export const Desktop = () => {
  const dispatch = useDispatch();

  const handleOpenApp = (app) => {
    dispatch(openApp(app.id));
  };

  return (
    <div className="desktop">
      {apps.map((app) => (
        <div
          key={app.id}
          className="desktop-icon"
          onDoubleClick={() => handleOpenApp(app)}
        >
          <img src={app.icon} alt={app.name} />
          <p>{app.name}</p>
        </div>
      ))}
    </div>
  );
};
