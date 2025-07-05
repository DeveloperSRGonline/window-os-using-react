import React, { useState } from "react";
import { AppWindow } from "../AppWindow";

const Terminal = ({ appId }) => {
  const [logs, setLogs] = useState(["Welcome to Shivam's Terminal!", "Type `help` to see commands."]);
  const [command, setCommand] = useState("");

  const handleCommand = (input) => {
    const args = input.trim().split(" ");
    const base = args[0].toLowerCase();

    switch (base) {
      case "help":
        return [
          "> help",
          "Available commands:",
          "  help - List available commands",
          "  clear - Clear the screen",
          "  date - Show current date/time",
          "  echo [text] - Print the text",
          "  about - Info about you",
        ];
      case "clear":
        return []; // Clears screen
      case "date":
        return ["> date", new Date().toString()];
      case "echo":
        return ["> echo " + args.slice(1).join(" "), args.slice(1).join(" ") || " "];
      case "about":
        return [
          "> about",
          "TerminalOS v1.0 by Shivam Garade",
          "React + Redux + SCSS — Windows Clone",
        ];
      case "":
        return [];
      default:
        return ["> " + input, `Command not found: ${base}`];
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const result = handleCommand(command);
      setLogs((prevLogs) => (command.trim() === "clear" ? [] : [...prevLogs, ...result]));
      setCommand("");
    }
  };

  return (
    <AppWindow
      appId={appId}
      title="Terminal"
      icon={<img src="/images/terminal.png" alt="Terminal" width={16} />}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#000000",
          color: "#d2ffc6",
          fontFamily: "monospace",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, overflowY: "auto" }}>
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
        <div>
          <span>$ </span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: "black",
              color: "white",
              border: "none",
              outline: "none",
              width: "90%",
              fontFamily: "monospace",
            }}
            autoFocus
          />
        </div>
      </div>
    </AppWindow>
  );
};

export default Terminal;
