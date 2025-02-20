import React from "react";

interface Params {
  slug: string[];
}

const Docs: React.FC<{ params: Params }> = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Catch all Segments topic:</h1>
      Docs for: {slug?.join(", ")}
    </div>
  );
};

export default Docs;
