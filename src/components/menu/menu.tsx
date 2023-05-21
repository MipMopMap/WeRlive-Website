import React, { FC, useState, useRef, useEffect } from "react";
import "./menu.css";
import logo from "../../assets/WeRliveLTD-color-line.svg";
import logoWhite from "../../assets/logo.svg";
import { Button } from "..";
import { Theme } from "..";

interface MenuInt {
  scrolling: boolean;
  darkNav: boolean;
  theme: any;
  setTheme: React.Dispatch<any>;
}

const MenuMenu = () => (
  <>
    <p>
      <a href="/">Home</a>
    </p>
    <p>
      <a href="/jobs">Jobs</a>
    </p>
  </>
);

const Menu: FC<MenuInt> = ({ scrolling, darkNav, theme, setTheme }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [displayedLogo, setDisplayedLogo] = useState<string>(logo);
  const light = "#ffffff";
  const dark = "#09384b";

  const [mobileMenu, setMobileMenu] = useState<string>(light);

  const openMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      if (toggleMenu && !ref.current?.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggleMenu]);

  useEffect(() => {
    if (darkNav && theme !== "dark") {
      setDisplayedLogo(logo);
      setMobileMenu(dark);
    }
    if (darkNav && theme === "dark") {
      setDisplayedLogo(logoWhite);
      setMobileMenu(light);
    }
    if (!darkNav) {
      if (scrolling && theme !== "dark") {
        setDisplayedLogo(logo);
        setMobileMenu(dark);
      } else {
        setDisplayedLogo(logoWhite);
        setMobileMenu(light);
      }
    }
  }, [scrolling, darkNav, theme]);

  return (
    <div
      id="navbar"
      className={`Menu-Wrapping  ${scrolling ? "scrolling" : ""} ${
        darkNav ? "darkNav" : ""
      }`}
    >
      <div className="Menu-Content container section-padding">
        <a href="/">
          <img src={displayedLogo} alt="WeRlive line logo" />
        </a>
        <div className="Menu-Menu-Wrapper">
          <MenuMenu />
          <Theme theme={theme} setTheme={setTheme} />
          {scrolling ? (
            <Button text={"Lets Talk!"} link={"contact"} />
          ) : (
            <Button text={"Lets Talk!"} link={"contact"} accent />
          )}
        </div>
        <div className="Mobile-Menu">
          <svg
            onClick={openMenu}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill={mobileMenu}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>

          {toggleMenu ? (
            <div className="Mobile-Menu-Open" ref={ref}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
                onClick={closeMenu}
                className="Close-Mobile-Menu"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              <MenuMenu /> <Theme theme={theme} setTheme={setTheme} />
              <Button text={"Lets Talk!"} link={"Contact"} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Menu;
