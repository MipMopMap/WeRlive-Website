import React, { FC } from "react";
import "./button.css";

interface ButtonInt {
  text: string;
  link?: string;
  accent?: boolean;
}

const Button: FC<ButtonInt> = ({ link, text, accent }) => {
  return (
    <div className={`Button-Wrapper ${accent ? "Background-Accent" : null}`}>
      {link ? <a href={`/${link}`}>{text}</a> : <button>{text}</button>}
    </div>
  );
};

export default Button;
