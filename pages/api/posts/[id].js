import dbConnect from "@/db/connect.js";
import Post from "@/db/models/Posts";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (!id) return;

  if (request.method === "GET") {
    try {
      const post = await Post.findById(id);
      response.status(200).json(post);
    } catch (error) {
      response.status(404).json({ status: "Not found" });
    }
  }
  if (request.method === "PUT") {
    try {
      const post = await Post.findByIdAndUpdate(id, request.body);
      response.status(200).json({ status: "Post succesfully updated" });
    } catch (error) {
      response.status(400).json({ status: "Not found" });
    }
  }
  if (request.method === "DELETE") {
    try {
      const post = await Post.findByIdAndDelete(id);
      response.status(200).json({ status: `Post ${id} successfully deleted.` });
    } catch (error) {
      response.status(500).json({ message: "Post was not deleted" });
    }
  }
}
