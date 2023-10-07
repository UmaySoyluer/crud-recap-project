import dbConnect from "@/db/connect";
import Post from "@/db/models/Posts";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Post.find();
    response.status(200).json(posts);
  }

  if (request.method === "POST") {
    try {
      const post = await Post.create(request.body);
      response.status(200).json(post);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
