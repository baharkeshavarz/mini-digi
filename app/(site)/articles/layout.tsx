import React from "react";

const ArticlesLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-orange-400 min-h-96">{children}</div>;
};

export default ArticlesLayout;
