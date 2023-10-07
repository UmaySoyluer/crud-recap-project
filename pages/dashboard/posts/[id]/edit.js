import { mutate } from "swr";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, isLoading, error } = useSWR(`/api/posts/${id}`);

  if (isLoading) return <h1>Loading ...</h1>;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);

    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate("/api/posts");
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">change the title</label>
      <input
        id="title"
        name="title"
        placeholder="add a title"
        defaultValue={post.title}
      />
      <label htmlFor="text">change the text</label>
      <input
        id="text"
        name="text"
        placeholder="add a text"
        defaultValue={post.text}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
