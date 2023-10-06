import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/posts");
  console.log(data);

  return (
    <div>
      <h1>Hello Next!</h1>
    </div>
  );
}
