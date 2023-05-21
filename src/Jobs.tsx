import React, { FC, useEffect } from "react";
import "./Jobs.css";
import { DidntFindJob, JobsContainer } from "./containers";

interface JobsInt {
  setDarkNav: Function;
}

const Jobs: FC<JobsInt> = ({ setDarkNav }) => {
  useEffect(() => {
    setDarkNav(true);
  }, [setDarkNav]);

  return (
    <div className="Jobs">
      <JobsContainer />
      <DidntFindJob />
    </div>
  );
};

export default Jobs;
