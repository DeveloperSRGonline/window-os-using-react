import React, { useState } from "react";
import { AppWindow } from "../AppWindow";
import "./FileExplorer.scss";

const dummyFolders = [
  { name: "Documents", type: "folder" },
  { name: "Pictures", type: "folder" },
  { name: "Downloads", type: "folder" },
  { name: "Resume.pdf", type: "file" },
  { name: "MyNotes.txt", type: "file" },
];

export const FileExplorer = ({ appId }) => {
  const [currentPath, setCurrentPath] = useState("This PC");

  return (
    <AppWindow
      appId={appId}
      title="File Explorer"
      icon={<img src="/images/explorer.png" alt="Explorer" width={16} />}
    >
      <div className="file-explorer">
        {/* Navbar */}  
        <div className="fe-navbar">
          <button title="Back">⬅️</button>
          <button title="Forward">➡️</button>
          <input value={currentPath} readOnly />
        </div>

        {/* Main layout */}
        <div className="fe-layout">
          {/* Sidebar */}
          <div className="fe-sidebar">
            <p>📁 Quick Access</p>
            <p>💻 This PC</p>
            <p>⬇️ Downloads</p>
            <p>🖼️ Pictures</p>
            <p>📄 Documents</p>
          </div>

          {/* Main file area */}
          <div className="fe-main">
            {dummyFolders.map((item, index) => (
              <div className="fe-item" key={index}>
                <img
                  src={
                    item.type === "folder"
                      ? "/images/folder.svg"
                      : "/images/file.svg"
                  }
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
};
