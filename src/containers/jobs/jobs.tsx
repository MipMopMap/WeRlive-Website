import React from "react";
import "./jobs.css";
import { CTA } from "../../components";

function Jobs() {
  return (
    <div className="Jobs-Wrapper" id="joinus">
      <div className="JobsSection section-padding container" id="Jobs">
        <div className="Jobs-Container">
          <div className="JobsContent">
            <h2>Join Us</h2>
            <p>Want to join our team?</p>
          </div>
          <div className="JobsGrid">
            <div className="boxesRow">
              <div className="firstBox box"></div>
              <div className="box">
                <p>C++</p>
              </div>
              <div className="box">
                <p>VMWare</p>
              </div>
              <div className="box">
                <p>Project Manager</p>
              </div>
              <div className="lastBox box"></div>
            </div>
            <div className="boxesRow">
              <div className="firstBox box"></div>
              <div className="row2Box2 box">
                <p>Operation</p>
              </div>
              <div className="row2Box3 box">
                <p>System Programmer</p>
              </div>
              <div className="row2Box4 box">
                <p>FE Dev</p>
              </div>
              <div className="row2Box5 box">
                <p>BE Dev</p>
              </div>
              <div className="lastBox box"></div>
            </div>
            <div className="boxesRow">
              <div className="firstBox box"></div>
              <div className="row3Box2 box">
                <p>Cobol</p>
              </div>
              <div className="row3Box3 box">
                <p>Mainframe</p>
              </div>
              <div className="row3Box4 box">
                <p>System Analyst</p>
              </div>
              <div className="row3Box5 box">
                <p>DBA</p>
              </div>
              <div className="lastBox box"></div>
            </div>
          </div>
        </div>
        <CTA />
      </div>
    </div>
  );
}

export default Jobs;
