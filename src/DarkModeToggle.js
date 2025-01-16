import React from "react";

const DarkModeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="text-center p-4">
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
