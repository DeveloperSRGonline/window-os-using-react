import React, { useState } from "react";
import { AppWindow } from "../AppWindow";

const ChromeApp = ({ appId }) => {
  const [url, setUrl] = useState("https://google.com"); // safer site
  const [inputUrl, setInputUrl] = useState(url);

  const handleGo = () => {
    const validUrl = inputUrl.startsWith("http") ? inputUrl : "https://" + inputUrl;
    setUrl(validUrl);
  };

  return (
    <AppWindow
      appId={appId}
      title="Google Chrome"
      icon={<img src="/images/chrome.svg" alt="chrome" width={16} />}
    >
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "8px", background: "#f1f1f1", display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter URL"
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: "4px",
              border: "1px solid gray",
              outline: "none",
            }}
          />
          <button
            onClick={handleGo}
            style={{
              padding: "6px 12px",
              background: "#4285F4",
              border: "none",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Go
          </button>
        </div>

        <iframe
          title="chrome"
          src={url}
          style={{
            flex: 1,
            border: "none",
            width: "100%",
            background: "white",
          }}
        />
      </div>
    </AppWindow>
  );
};

export default ChromeApp;
