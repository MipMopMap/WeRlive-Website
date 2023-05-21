import React, { useState, FC } from "react";
import "./jobsContainer.css";
import { Job, Search } from "../../components";
import { JOBS_ARRAY } from "../../data/data";

interface JobsContainerInt {}

const JobsContainer: FC<JobsContainerInt> = () => {
  const [queryString, setQueryString] = useState("");

  const JOBS_ARRAYFiltered = JOBS_ARRAY.filter((data: { title: string }) =>
    data.title.toLocaleLowerCase().includes(queryString.toLocaleLowerCase())
  );

  return (
    <div className="JobsContainer-Wrapper section-padding container">
      <div className="JobsContainer-Heading">
        <h2>Open Positions</h2>
        <p>Think you'll be a good fit to our team?</p>
        <Search onChange={(e: any) => setQueryString(e.target.value)} />
      </div>
      <div className="Jobs-List">
        {JOBS_ARRAYFiltered.map((data) => (
          <Job
            icon={data.icon}
            company={data.company}
            title={data.title}
            position={data.position}
            location={data.location}
            id={data.id}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsContainer;
