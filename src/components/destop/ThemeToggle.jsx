import React from "react";
import { useDispatch } from "react-redux";
// import  setTheme  from "../../actions/index"; // correct path if needed

export const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
      <button onClick={() => dispatch(setTheme("light"))}>🌞 Light</button>
      <button onClick={() => dispatch(setTheme("dark"))}>🌙 Dark</button>
    </div>
  );
};
