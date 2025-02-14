import Link from "next/link";

export interface ArticleItem {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const articles: ArticleItem[] = await data.json();
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
}
