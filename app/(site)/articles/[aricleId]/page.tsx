import React from "react";
import { ArticleItem } from "../page";

export async function generateStaticParams() {
  const data = await fetch("https://api.vercel.app/blog");
  const articles: ArticleItem[] = await data.json();
  return articles.map((article) => ({
    articleId: article.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ aricleId: number }>;
}) {
  const id = (await params).aricleId;

  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post: ArticleItem = await data.json();

  return (
    <div>
      <p className="my-6"> Article No:{post.id}</p>
      <p> Article Title: {post.title}</p>
      <p> Article Content: {post.content}</p>
      <p> Article Author: {post.author}</p>
    </div>
  );
}
