import { useRouter } from "next/router";
import useSWR from "swr";

export default function AddNewPostForm() {
  const router = useRouter();
  const { mutate } = useSWR("/api/posts/");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate();
    }
    router.push("/dashboard");
  }

  return (
    <>
      <h1>Add a new post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" placeholder="Add a new post title" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
