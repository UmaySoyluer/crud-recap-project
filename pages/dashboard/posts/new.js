import { mutate } from "swr";
import { useRouter } from "next/router";

export default function AddNewPost() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);
    console.log(postData);
    const response = await fetch("/api/posts", {
      method: "POST",
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
      <label htmlFor="title">Add a title</label>
      <input id="title" name="title" placeholder="add a title" />
      <label htmlFor="text">Add a text</label>
      <input id="text" name="text" placeholder="add a text" />
      <button type="submit">Submit</button>
    </form>
  );
}
