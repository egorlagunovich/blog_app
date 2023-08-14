"use client";

import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewPost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: "",
    text: "",
    tags: "",
  });
  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          text: post.text,
          title: post.title,
          postId: Math.random().toString(),
          userId: session?.user.id,
          tags: post.tags,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      setPost={setPost}
      submitting={submitting}
      type="Create"
      post={post}
      handleSubmit={createPost}
    />
  );
};

export default NewPost;
