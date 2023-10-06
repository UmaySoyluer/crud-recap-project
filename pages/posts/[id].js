import { useRouter } from "next/router";
import useSWR from "swr";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading } = useSWR(`/api/posts/${id}`);

  if (!post || isLoading) {
    return "Loading";
  }

  return (
    <ul>
      <li>{post.title}</li>
    </ul>
  );
}
