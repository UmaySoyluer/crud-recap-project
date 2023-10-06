import useSWR from "swr";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/posts");
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
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
