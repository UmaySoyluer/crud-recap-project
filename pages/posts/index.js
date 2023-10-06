import useSWR from "swr";
import Link from "next/link";
import { List, ListItem } from "..";

export default function Page() {
  const { data, isLoading } = useSWR("/api/posts");
  const posts = data;

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post._id}>
          <Link href={`/posts/${post._id}`}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  );
}
