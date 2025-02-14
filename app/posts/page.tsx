import React from "react";
// This page: ○  (Static)  prerendered as static content
interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const posts: PostItem[] = await getPosts();
console.log("service side rendered", posts);

export default async function PostsPage() {
  return (
    <main>
      <h1>Posts archive</h1>
      <ol className="bg-red-500 text-black">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </main>
  );
}
