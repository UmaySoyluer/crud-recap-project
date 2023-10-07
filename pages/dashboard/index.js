import Posts from "@/components/Posts";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <h3>Dashboard</h3>
      <Posts />
      <Link href="/dashboard/posts/new">Add new post</Link>
      <Link href="/">Home</Link>
    </>
  );
}
