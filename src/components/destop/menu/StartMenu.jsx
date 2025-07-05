import React from "react";
import { useSelector } from "react-redux";
import { apps } from "../../../utils/apps";
import "./StartMenu.scss";


export const StartMenu = () => {
  const isOpen = useSelector((state) => state.menu.open);// redux se pata lagane ke liye ki start menu open hai ya close 

  if (!isOpen) return null;// agar open nahi hai toh screen par kuchh bhi mat dikhao

  return (
    // Saare available apps ko Start menu me dikhata hai
    <div className="start-menu"> 
      <div className="start-menu-header">Pinned Apps</div>
      <div className="start-menu-grid">
        {apps.map((app) => (
          <div key={app.id} className="start-menu-icon">
            {/* Icon image show karta hai */}
            <img src={app.icon} alt={app.name} />
            {/* App ka naam show karta hai */}
            <p>{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
