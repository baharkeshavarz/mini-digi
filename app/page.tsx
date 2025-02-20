import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="h-10 text-center text-2xl bg-zinc-950 text-white">
        <h4>Header</h4>
      </header>
      <div className="h-[350]">
        <Link href="/products">Products</Link>
        <br />
        <Link href="/about">about</Link>
        <br />
        <Link href="/articles">articles</Link>
      </div>

      <footer className="h-10 text-center text-2xl bg-zinc-950 text-white">
        Footer
      </footer>
    </div>
  );
}
