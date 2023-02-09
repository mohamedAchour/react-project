import React from "react";
import { Link } from "react-router-dom";

export const Profiles = () => {
  const profiles = [
    {
      id: 1,
      name: "ahmed",
    },
    {
      id: 2,
      name: "achour",
    },
    {
      id: 3,
      name: "jihad",
    },
  ];
  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/profiles/${profile.id}`}>{profile.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
