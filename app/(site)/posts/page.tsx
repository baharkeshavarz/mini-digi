import Link from "next/link";

export interface PostItem {
  id: number;
  title: string;
}

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: PostItem[] = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
