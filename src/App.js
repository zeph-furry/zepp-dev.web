import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import DarkModeToggle from "./DarkModeToggle";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.className = prefersDark ? "dark" : "";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme === "dark" ? "dark" : "";
  };

  return (
    <>
      <LandingPage />
      <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};

export default App;
