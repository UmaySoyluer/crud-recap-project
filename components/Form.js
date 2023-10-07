import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        {router.pathname.includes("edit") ? "change" : "add"}
      </label>
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
