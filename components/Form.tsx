import React from "react";

type FormProps = {
  setPost(post: Post): void;
  post: Post;
  type: string;
  submitting: boolean;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
};

const Form = ({ setPost, post, type, submitting, handleSubmit }: FormProps) => {
  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col w-3/5 justify-center mx-auto min-h-full bg-white ">
        <div className="flex flex-col gap-4 p-5">
          Add a cover image
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="text-4xl text-gray-600 placeholder-gray-600 placeholder-bold"
            placeholder="New post title here..."
          />
          <input
            type="text"
            value={post.text}
            placeholder="Add up to 4 tags..."
            onChange={(e) => setPost({ ...post, text: e.target.value })}
          />
        </div>
        <div className="bg-gray-400">Text settings...</div>
        <div>
          <textarea
            placeholder="Write your post content here..."
            value={post.tags}
            className="w-full h-1/2 p-6"
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" disabled={submitting}>
        Publish
      </button>
    </form>
  );
};

export default Form;
