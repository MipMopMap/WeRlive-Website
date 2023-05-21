import React, { FC } from "react";
import "./whatWeDo.css";
import { Card } from "../../components";
import { CARD_DATA } from "./WhatWeDoData";

interface WhatWeDoInt {}

const WhatWeDo: FC<WhatWeDoInt> = () => {
  return (
    <div className="WhatWeDo-Wrapper" id="whatwedo">
      <div className="WhatWeDo-Content section-padding container">
        <div className="WhatWeDo-Title">
          <h2>What We Do</h2>
          <p>Front of the industry standards.</p>
        </div>
        {CARD_DATA.map((item, index) => (
          <Card
            title={item.title}
            text={item.text}
            img={item.img}
            left={item.left}
            button={item.button}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
