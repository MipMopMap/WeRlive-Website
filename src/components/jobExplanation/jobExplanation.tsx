import React, { FC } from "react";
import "./jobExplanation.css";

interface JobExplanationInt {
  selectedJob?: {
    icon: string;
    company: string;
    title: string;
    jobDescription: JSX.Element;
    position: string;
    location: string;
    jobNumber: string;
    id: string;
  };
}

const JobExplanation: FC<JobExplanationInt> = ({ selectedJob }) => {
  return (
    <div className="JobExplanation-Container">
      {selectedJob?.jobDescription}
    </div>
  );
};

export default JobExplanation;
