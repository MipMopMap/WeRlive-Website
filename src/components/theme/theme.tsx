import React, { FC, useEffect, useState } from "react";
import "./theme.css";

interface ThemeInt {
  theme: any;
  setTheme: React.Dispatch<any>;
}

const Theme: FC<ThemeInt> = ({ theme, setTheme }) => {
  const [moon, setMoon] = useState(false);
  const handleThemeClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else if (theme === "" || null || "undefined") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const doc = document.firstElementChild;
    doc?.setAttribute("color-scheme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      setMoon(true);
    }

    if (theme === "light") {
      setMoon(false);
    }
  }, [theme]);

  return (
    <div className="Theme-Wrapper">
      <button
        onClick={handleThemeClick}
        className={`${moon ? "Theme-Animation" : null}`}
      >
        {moon ? <div className="Bloub"></div> : null}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#f19a38"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
        </svg>
      </button>
    </div>
  );
};

export default Theme;
