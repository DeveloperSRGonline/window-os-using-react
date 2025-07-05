export const apps = [
  {
    id: "file-explorer", // Unique ID har app ka
    name: "File Explorer", // Jo naam screen pe dikhana hai
    icon: "/images/explorer.png", // Image path jo icon me dikhega
    component: "FileExplorer", // Jab open hoga toh kaunsa React component dikhega
  },
  {
    id: "chrome",
    name: "Google Chrome",
    icon: "/images/chrome.svg",
    component: "ChromeApp",
  },

  {
    id: "terminal",
    name: "Terminal",
    icon: "/images/terminal.png",
    component: "TerminalWindow",
  },
  {
    id: "settings",
    name: "Settings",
    icon: "/images/settings.png",
    component: "SettingsApp",
  },
  {
    id: "notepad",
    name: "Notepad",
    icon: "/images/notepad.png", // 📝 Notepad ka icon
    component: "Notepad",
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: "/images/calculator.png", // 🧮 Calculator icon
    component: "Calculator",
  },

  // aur bhi...
];
