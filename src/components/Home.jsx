import React, { useState } from "react";
import CreateStory from "./CreateStory";
import RecentStories from "./RecentStories";

const Home = () => {
  return (
    <>
      <CreateStory />
      <RecentStories />
    </>
  );
};

export default Home;
