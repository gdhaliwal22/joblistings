import React from "react";

// {
//     "id",
//     "company",
//     "logo": "./images/photosnap.svg",
//     "isNew": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   },

const JobBoardComponent = ({
  job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  const langAndTools = [];

  if (tools) {
    langAndTools.push(...tools);
  }
  if (languages) {
    langAndTools.push(...languages);
  }

  return (
    <div className="flex bg-white shadow-md m-4 p-6">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-2">
        <h3 className="font-bold text-teal-500">{company}</h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex ml-auto items-center">
        {langAndTools
          ? langAndTools.map((langandTool) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {langandTool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
