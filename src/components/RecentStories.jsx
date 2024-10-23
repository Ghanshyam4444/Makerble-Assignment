import React from "react";
import { useAuth } from "../store/auth";

const RecentStories = () => {
  const { stories } = useAuth();
  return (
    <div className="container mb-4">
      <h5 className="text-dark">Recent Stories</h5>
      <div className="">
        {stories.map((story, index) => (
          <li className="text-dark p-2 m-2 card shadow" key={index}>
            {story}
          </li>
        ))}
      </div>
    </div>
  );
};

export default RecentStories;
