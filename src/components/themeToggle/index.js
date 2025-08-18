import React from "react";
import { useTheme } from "../../providers/ThemeProvider";
import "./themeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-pressed={theme === "dark"}
      aria-label="Toggle dark and light theme"
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <i className="fa-solid fa-moon" />
      ) : (
        <i className="fa-solid fa-sun" />
      )}
    </button>
  );
};

export default ThemeToggle;
