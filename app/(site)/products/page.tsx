import Link from "next/link";

export interface PostItem {
  id: number;
  title: string;
}

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const products: PostItem[] = await data.json();
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}
