import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-yellow-400 min-h-10">{children}</div>;
};

export default ProductLayout;
