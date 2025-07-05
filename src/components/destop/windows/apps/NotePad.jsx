import React, { useState } from "react";
import { AppWindow } from "../AppWindow";

export const Notepad = ({ appId }) => {
  const [text, setText] = useState("");

  return (
    <AppWindow
      appId={appId}
      title="Notepad"
      icon={<img src="/images/notepad.png" alt="Notepad" width={16} />}
    >
      <textarea
        style={{
          width: "100%",
          height: "100%",
          background: "#1e1e1e",
          color: "white",
          border: "none",
          resize: "none",
          outline: "none",
          padding: "10px",
          fontFamily: "monospace",
          fontSize: "14px",
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Likh bhai kuch ...."
      />
    </AppWindow>
  );
};

export default Notepad;
