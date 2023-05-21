import React, { FC } from "react";
import "./job.css";
import work from "../../assets/work.svg";
import locationicon from "../../assets/location.svg";

interface JobInt {
  icon: any;
  company: string;
  title: string;
  position: string;
  location: string;
  id: string;
}

const Job: FC<JobInt> = ({ icon, company, title, position, location, id }) => {
  return (
    <div className="jobContainer">
      <a href={`/Jobs/${id}`}>
        <div className="jobContainerContent">
          <img className="logo" src={icon} alt="company icon" />
          <p className="company">{company}</p>
          <h4>{title}</h4>
          <div className="jobContainerIcons">
            <div>
              <img src={work} alt="work icon" />
              <p>{position}</p>
            </div>
            <div>
              <img src={locationicon} alt="location icon" />
              <p>{location}</p>
            </div>
          </div>
          <span className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#3e4581"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Job;
