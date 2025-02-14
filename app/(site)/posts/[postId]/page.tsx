import React from "react";
import { PostItem } from "../page";

export default async function Page({
  params,
}: {
  params: Promise<{ postId: number }>;
}) {
  const id = (await params).postId;

  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post: PostItem = await data.json();

  return (
    <div>
      <p className="my-6"> Post No:{post.id}</p>
      <p> Post Title: {post.title}</p>
    </div>
  );
}
