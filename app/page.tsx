import Posts from "@/components/Posts";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row justify-between p-5 gap-3">
      <Posts />{" "}
    </div>
  );
};

export default Home;
