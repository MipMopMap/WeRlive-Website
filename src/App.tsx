import React, { useEffect, useState } from "react";
import "./App.css";
import { Menu, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import JobApp from "./JobApp";
import Contact from "./Contact";

function App() {
  const selectedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState<any>(selectedTheme);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [darkNav, setDarkNav] = useState<boolean>(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setScrolling(false);
    }

    if (currentScroll > 0) {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header>
        <Menu
          scrolling={scrolling}
          darkNav={darkNav}
          theme={theme}
          setTheme={setTheme}
        />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home offsetY={offsetY} />} />
          <Route path="/jobs" element={<Jobs setDarkNav={setDarkNav} />} />
          <Route
            path="/contact"
            element={<Contact setDarkNav={setDarkNav} CV={true} />}
          />
          <Route
            path="/jobs/:id"
            element={<JobApp setDarkNav={setDarkNav} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
