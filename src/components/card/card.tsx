import React, { FC } from "react";
import "./card.css";

interface CardInt {
  left: boolean;
  img?: any;
  title: string;
  text: string;
  button?: boolean;
}

const Card: FC<CardInt> = ({ img, title, text, left, button }) => {
  return (
    <div className={`Card-Wrapper ${left ? "Left-Card" : ""}`}>
      <div className="Card-Img">
        <img src={img} alt={title} />
      </div>
      <div className="Card-Content">
        <h3>{title}</h3>
        <p>{text}</p>
        {button ? <a href="#ventures">Our Ventures</a> : null}
      </div>
    </div>
  );
};

export default Card;
