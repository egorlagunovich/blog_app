import Posts from "@/components/Posts";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row justify-between p-5 gap-3">
      <section className="w-1/4 bg-green-200">Nav</section>
      <Posts />
      <section className="w-1/4 bg-blue-200">Ads or smth</section>
    </div>
  );
};

export default Home;
