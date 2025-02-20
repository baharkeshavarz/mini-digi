import React from "react";

export default async function ProdcuctReview({
  params,
}: {
  params: Promise<{ productId: number; reviewId: number }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
