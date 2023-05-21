import React, { FC } from "react";
import "./didntFindJob.css";
import { Form } from "../../components";

interface DidntFindJobInt {}

const DidntFindJob: FC<DidntFindJobInt> = () => {
  return (
    <div className="DidntFindJob-Wrapper section-padding container">
      <div className="DidntFindJob">
        <div className="DidntFindJob-Heading">
          <h2>Send CV</h2>
          <p>Didn't find your dream position?</p>
        </div>
        <div className="DidntFindJob-Form">
          <Form CV={true} location="Didn't Find Job - Random CV" />
        </div>
      </div>
    </div>
  );
};

export default DidntFindJob;
