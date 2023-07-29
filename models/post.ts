const { Schema, model, models } = require("mongoose");

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  text: {
    type: String,
    required: [true, "Post text is required"],
  },
  tags: {
    type: String,
    required: [true, "Tag is required"],
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
