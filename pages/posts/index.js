import useSWR from "swr";
import Link from "next/link";

export default function Page() {
  const { data, isLoading } = useSWR("/api/posts");
  const posts = data;

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <Link href={`/posts/${post._id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
