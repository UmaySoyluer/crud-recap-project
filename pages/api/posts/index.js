import connect from "@/db/connect";
import Posts from "@/db/models/Posts";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const posts = await Posts.find();
    console.log(posts);
    response.status(200).json(posts);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
