import React, { FC } from "react";
import { Button } from "..";
import "./cta.css";

interface CTAInt {}

const CTA: FC<CTAInt> = () => {
  return (
    <div className="CTA-Wrapper">
      <h3>Start your new journey with us today.</h3>
      <Button text="Get Started" link="jobs" />
    </div>
  );
};

export default CTA;
