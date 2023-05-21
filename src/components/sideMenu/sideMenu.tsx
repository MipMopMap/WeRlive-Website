import React, { FC } from "react";
import "./sideMenu.css";

interface SideMenuInt {}

const SideMenu: FC<SideMenuInt> = () => {
  return (
    <div className="SideMenu-Wrapper">
      <div className="SideMenu-Content">
        <div className="SideMenu-Link">
          <a href="#hero">Home</a>
        </div>
        <div className="SideMenu-Link">
          <a href="#whyus">Why Us</a>
        </div>
        <div className="SideMenu-Link">
          <a href="#whatwedo">What We Do</a>
        </div>
        <div className="SideMenu-Link">
          <a href="#clients">Clients</a>
        </div>
        <div className="SideMenu-Link">
          <a href="#joinus">Join Us</a>
        </div>
        <div className="SideMenu-Link">
          <a href="#ventures">Ventures</a>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
