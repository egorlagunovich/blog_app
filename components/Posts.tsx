"use client";

import React, { useState } from "react";

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

const Post = ({ post }: string) => {
  return <div>{post}</div>;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(initialState);
  return (
    <section className="w-3/6 bg-red-300">
      <div>Latest</div>
      <div>
        {posts.map((post) => {
          return <Post post={post.text} key={post.postId} />;
        })}
      </div>
    </section>
  );
};

export default Posts;
