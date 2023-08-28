import Post from "@/models/post";
import { connectToDB } from "@/utils/database";

export const GET = async (request: any, { params }:any) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");
    if (!post) return new Response("Post Not Found", { status: 404 });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request: any, { params }:any) => {
  const { text, title, tags } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingPost = await Post.findById(params.id);

    if (!existingPost) {
      return new Response("Post not found", { status: 404 });
    }

    // Update the prompt with new data
    existingPost.text = text;
    existingPost.title = title;
    existingPost.tags = tags;

    await existingPost.save();

    return new Response("Successfully updated the Posts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Post", { status: 500 });
  }
};

export const DELETE = async ( { params } : any) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Post.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
