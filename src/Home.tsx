import React, { FC } from "react";
import "./App.css";
import { Hero, WhyUs, Clients, WhatWeDo, Jobs, Ventures } from "./containers";

interface HomeInt {
  offsetY: number;
}

const Home: FC<HomeInt> = ({ offsetY }) => {
  return (
    <div className="Home">
      <Hero offsetY={offsetY} />
      <WhyUs />
      <WhatWeDo />
      <Clients />
      <Jobs />
      <Ventures />
    </div>
  );
};

export default Home;
