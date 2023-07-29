import React from "react";

const NewPost = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-3/5 justify-center mx-auto min-h-full bg-white ">
        <div className="flex flex-col gap-4 p-5">
          Add a cover image
          <input
            type="text"
            className="text-4xl text-gray-600 placeholder-gray-600 placeholder-bold"
            placeholder="New post title here..."
          />
          <input type="text" placeholder="Add up to 4 tags..." />
        </div>
        <div className="bg-gray-400">Text settings...</div>
        <div>
          <textarea
            placeholder="Write your post content here..."
            className="w-full h-1/2 p-6"
          />
        </div>
      </div>
      <div>Publish</div>
    </div>
  );
};

export default NewPost;
