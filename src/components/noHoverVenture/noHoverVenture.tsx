import React, { FC } from "react";
import "./noHoverVenture.css";

interface NoHoverVentureInt {
  venture: {
    title: string;
    description: string;
    learnmore: string;
    img: any;
    golldy: boolean;
  };
}

const NoHoverVenture: FC<NoHoverVentureInt> = ({ venture }) => {
  return (
    <div className="NoHoverVenture-Wrapper">
      <div className="NoHoverVenture-Content">
        <h3>{venture.title}</h3>
        <p>{venture.learnmore}</p>
      </div>
      <div className="NoHoverVenture-Img">
        {!venture.golldy ? (
          <img src={venture.img} alt={`${venture.title}`} />
        ) : (
          <div>{venture.img}</div>
        )}
      </div>
    </div>
  );
};

export default NoHoverVenture;
