import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openStart } from "../../../actions/index";
// import { setTheme } from "../../../actions/index"
import { formatTime } from "../../../utils/helpers";
import { restoreApp } from "../../../actions"; 
import "./Taskbar.scss";

export const Taskbar = () => {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu);
  const openApps = useSelector((state) => state.apps);
  // const selectedTheme = useSelector((state) => state.setting.theme);
  // console.log(selectedTheme)

  // ✅ Start button click
  const handleStartClick = () => {
    dispatch(openStart());
  };

  const handleAppClick = (appId) => {
    dispatch(restoreApp(appId)); // 👈 Restore minimized app
  };

  // // ✅ Toggle between dark and light
  // const handleThemeToggle = () => {
  //   const newTheme = selectedTheme === "light" ? "dark" : "light";
  //   dispatch(setTheme(newTheme));
  // };

  return (
    <div className="taskbar">
      {/* ⬅️ Start button */}
      <div className="start" onClick={handleStartClick}>
        <img src="/images/startIcon.png" alt="Start" />
      </div>

      {/* 🔲 Open App Icons */}
      <div className="open-apps">
        {openApps.map((app) => (
          <div
            key={app.id}
            className="taskbar-app-icon"
            onClick={() => handleAppClick(app.id)}
          >
            <img src={app.icon} alt={app.name} />
            {app.minimized ? null : <div className="taskbar-dot" />}
          </div>
        ))}
      </div>

      <div className="running-apps">
        <p>Running Apps:</p>
        <ul>
          {openApps.map((app) => (
            <li key={app.id}>{app.name}</li>
          ))}
        </ul>
      </div>

      {/* 🌓 Theme Toggle Button
      <div className="theme-toggle">
        <button onClick={handleThemeToggle} className="theme-btn">
          {selectedTheme === "light" ? "🌙" : "🌞"}
        </button>
      </div> */}

      {/* 🕒 Clock */}
      <div className="clock">{formatTime(new Date())}</div>
    </div>
  );
};
