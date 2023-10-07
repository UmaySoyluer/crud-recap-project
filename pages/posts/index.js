import useSWR from "swr";
import Post from "@/components/Post";

export default function Page() {
  const { data: posts, isLoading } = useSWR("/api/posts");

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h3>All posts</h3>
      <ul>
        {posts.length
          ? posts.map((post) => (
              <Post key={post._id} post={post}>
                {post.title}
              </Post>
            ))
          : "There are no posts"}
      </ul>
    </>
  );
}
