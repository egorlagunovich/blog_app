"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Post } from "@/types";
import PostPage from "@/components/PostPage";

const UserProfile = ({ params }: any) => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("name"));
  const userName = searchParams.get("name");

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/post/${params?.id}`);
      const data = await response.json();
      setPost(data);
    };

    if (params?.id) fetchPost();
  }, []);
  console.log(post);
  return <PostPage post={post}/>;
  // return <div>Hi</div>;
};

export default UserProfile;
