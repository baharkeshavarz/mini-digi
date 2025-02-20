import React from "react";
import { PostItem } from "../page";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: number }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product No ${productId}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const id = (await params).productId;

  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const product: PostItem = await data.json();

  if (id > 100 && id < 1000) {
    return notFound();
  }

  const randomId = Math.floor(Math.random() * 2);
  if (randomId === 1) {
    throw new Error("This Product is not available");
  }

  return (
    <div>
      <p className="my-6"> Product No:{product.id}</p>
      <p> Product Title: {product.title}</p>
    </div>
  );
}
