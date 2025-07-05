import React from "react";
import { useSelector } from "react-redux";


import { FileExplorer } from "../../destop/windows/apps/FileExplorer";
import Notepad from "../../destop/windows/apps/notePad";
import Calculator from "../../destop/windows/apps/calculator";
import Terminal from "../../destop/windows/apps/Terminal";
import Settings from "../../destop/windows/apps/settings";
import ChromeApp from "../../destop/windows/apps/ChromeApp";


const componentMap = {
  FileExplorer: FileExplorer,
  Notepad: Notepad,
  Calculator: Calculator,
  TerminalWindow: Terminal,
  SettingsApp: Settings,
  ChromeApp: ChromeApp,
};

export const Windows = () => {
  const openApps = useSelector((state) => state.apps);

  return (
    <>
      {openApps.map((app) => {
        if (app.minimized) return null;

        const Component = componentMap[app.component];

        if (Component) {
          return <Component key={app.id} appId={app.id} />;
        }

        
        console.warn(`Component "${app.component}" not found in componentMap`);
        return null;
      })}
    </>
  );
};
