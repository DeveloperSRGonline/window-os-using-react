import React, { useEffect, useRef } from "react";
import "./ContextMenu.scss";

export const ContextMenu = ({ x, y, onClose }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <ul
      className="context-menu"
      ref={menuRef}
      style={{ top: y, left: x, position: "absolute" }}
    >
      <li>🔄 Refresh</li>
      <li>🗂️ New Folder</li>
      <li>🖼️ Change Wallpaper</li>
      <li>⚙️ Settings</li>
    </ul>
  );
};
