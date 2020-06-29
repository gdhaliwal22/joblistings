import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  return (
    <div className="App">
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;

//TODOs
// 1. Study the design & json
// 2. Create Job Board Component
// 3. Get the data from JSON
// 4. Pass down the date to the JBC
// 5. Stlye it
// 6. Filter component
// 7. Filter the data
