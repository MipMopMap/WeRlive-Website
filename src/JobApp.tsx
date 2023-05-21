import React, { FC, useEffect } from "react";
import "./JobApp.css";
import { JOBS_ARRAY } from "./data/data";
import { useParams } from "react-router-dom";
import { Form, JobExplanation } from "./components";

interface JobAppInt {
  setDarkNav: Function;
}

const JobApp: FC<JobAppInt> = ({ setDarkNav }) => {
  useEffect(() => {
    setDarkNav(true);
  }, [setDarkNav]);
  const params = useParams();
  const selectedJob = JOBS_ARRAY.find((job) => job.id === params.id);

  return (
    <div className="JobApp-Wrapper">
      <div className="Contact-Wrapper">
        <div className="Contact-Wrapper-Content section-padding container">
          <h2>{selectedJob?.title}</h2>
          <p>We're glad youre interested in applying for this role!</p>
        </div>
        <div className="JobApp-Links">
          <a
            href="https://www.linkedin.com/company/werlive-ltd/"
            target="_blank"
            rel="noreferrer"
            className="LinkedIn-JobApp"
            aria-label="LinkedIn Link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="mailto:support@golldy.com">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" />
            </svg>
          </a>
        </div>
        <div className="JobApp-Info-Container section-padding container">
          <div className="JobApp-Info-Content">
            <JobExplanation selectedJob={selectedJob} />
            <Form CV={true} location={selectedJob?.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApp;
