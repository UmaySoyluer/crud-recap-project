import dbConnect from "@/db/connect.js";
import Post from "@/db/models/Posts";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const post = await Post.findById(id);
    if (!post) {
      response.status(404).json({ message: "Post not found" });
      return;
    }
    response.status(200).json(post);
  }
}
