import useSWR from "swr";
import Post from "./Post";

export default function Posts() {
  const { data: posts, isLoading, error } = useSWR("/api/posts");

  if (isLoading) return <h1>Loading ...</h1>;

  if (!posts) return;

  return (
    <ul>
      {posts.length
        ? posts.map((post) => (
            <Post key={post._id} post={post}>
              {post.title}
            </Post>
          ))
        : "There are no posts"}
    </ul>
  );
}
