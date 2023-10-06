import useSWR from "swr";
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/posts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong {error.message}</h1>;
  }

  return (
    <div>
      <List role="list">
        {data.map((post) => {
          return <ListItem key={post._id}>{post.title}</ListItem>;
        })}
      </List>
    </div>
  );
}
