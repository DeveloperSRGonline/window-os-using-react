import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../../actions/index";
import { AppWindow } from "../AppWindow";

const Settings = ({ appId }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.setting.theme);

  const handleThemeChange = (themeName) => {
    dispatch(setTheme(themeName));
  };

  return (
    <AppWindow
      appId={appId}
      title="Settings"
      icon={<img src="/images/settings.png" alt="Settings" width={16} />}
    >
      <div style={{ padding: "20px", color: "white" }}>
        <h2>Theme Settings</h2>
        <p>Choose your theme:</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            onClick={() => handleThemeChange("light")}
            style={{
              padding: "10px 20px",
              background: currentTheme === "light" ? "#0078D4" : "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Light
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            style={{
              padding: "10px 20px",
              background: currentTheme === "dark" ? "#0078D4" : "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Dark
          </button>
        </div>
      </div>
    </AppWindow>
  );
};

export default Settings;
