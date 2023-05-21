import React, { FC } from "react";
import "./explanation.css";

interface ExplanationInt {
  title: string;
  text: string;
  img?: any;
  grad: string;
}

const Explanation: FC<ExplanationInt> = ({ title, text, img, grad }) => {
  return (
    <div className="Explanation-Wrapper">
      <div
        className="Explanation-Icon"
        style={{
          background: grad,
        }}
      >
        <img src={img} alt="server illustration" />
      </div>
      <div className="Explanation-Content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Explanation;
