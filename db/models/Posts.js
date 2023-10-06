import mongoose from "mongoose";
import { Schema } from "mongoose";

const postsSchema = new Schema({
  title: { type: String, required: true },
});

const Posts = mongoose.models.Posts || model("Posts", postsSchema);
export default Posts;
