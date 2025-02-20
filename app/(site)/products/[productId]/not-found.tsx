"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  // URL:         http://localhost:3000/products/10000
  // pathname:    /products/10000
  return (
    <div>
      <div className="bg-red-100 text-[10px] text-center text-red-900 h-16">
        <h6>Product {productId} not found in Products</h6>
      </div>
    </div>
  );
};

export default NotFound;
