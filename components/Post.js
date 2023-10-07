import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  return (
    <li>
      <>
        <Link href={`/posts/${post._id}`}>{post.title} </Link>

        {router.pathname === "/dashboard" && (
          <Link href={`/dashboard/posts/${post._id}/edit`}> Edit Post</Link>
        )}
      </>
    </li>
  );
}
