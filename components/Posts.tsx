"use client";

import React, { useEffect, useState } from "react";

const initialState: Post[] = [
  {
    text: "Welcome to the club!",
    title: "Fight club!",
    userId: "1",
    postId: "1",
    likes: 8,
    comments: 0,
    tags: "#club",
  },
];

const Post = ({ postText, title, tags }: string) => {
  return (
    <div className="bg-white p-5 flex flex-col gap-3 rounded-lg">
      <h1>{title}</h1>
      {postText}
      <div>Tags: {tags}</div>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(initialState);
  useEffect(() => {}, []);
  return (
    <section className="w-3/6 bg-red-300">
      <div>Latest</div>
      <div>
        {posts.map((post) => {
          return (
            <Post
              postText={post.text}
              title={post.title}
              tags={post.tags}
              key={post.postId}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
