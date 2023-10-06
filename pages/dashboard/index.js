import useSWR from "swr";
import { List, ListItem } from "..";
import Link from "next/link";

export default function Dashboard() {
  const { data, error, isLoading } = useSWR("/api/posts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong {error.message}</h1>;
  }

  return (
    <>
      <List role="list">
        {data.map((post) => {
          return (
            <>
              <ListItem key={post._id}>{post.title}</ListItem>
              <button type="button">Edit Post</button>
            </>
          );
        })}
      </List>

      <Link href={"/dashboard/posts/new"}>Add a new post</Link>
    </>
  );
}
