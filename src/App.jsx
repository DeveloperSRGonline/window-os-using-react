import React from "react";
import { useSelector } from "react-redux";
import { Taskbar } from "./components/destop/taskbar/Taskbar";
import { Desktop } from "./components/destop/Desktop";
import { StartMenu } from "./components/destop/menu/StartMenu";
import { Windows } from "./components/destop/windows/Windows";

// import { Windows } from "./components/Windows/";
// import { ContextMenu } from "./components/ContextMenu";
// import { Themes } from "./utils/themes";
// import "./App.scss";

function App() {
  const theme = useSelector((state) => state.setting.theme);
  const selectedTheme = useSelector((state) => state.setting.theme);


  return (
    <div className={`App ${selectedTheme}`} style={theme[theme]}>

      {/* // pure app mein props ke thourgh theme pass kiya hai aur kuchh nahi */}
      <Desktop />
      {/* // home screen jispar sab icons honge */}
      {/* // app open karne ke liye */}
      <Windows />
      <StartMenu />
      {/* // window icon par click karne par start menu khulega */}
      <Taskbar />
      {/* // niche ka taskbar */}
      {/* <ContextMenu />// right click par menu khulega */}
    </div>
  );
}

export default App;
