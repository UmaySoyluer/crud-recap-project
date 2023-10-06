import dbConnect from "@/db/connect";
import Post from "@/db/models/Posts";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Post.find();

    return response.status(200).json(posts);
  }

  if (request.method === "POST") {
    try {
      const postData = request.body;
      await Post.create(postData);

      response.status(201).json({ status: "Post succesfully created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({ message: "Method not allowed" });
}
