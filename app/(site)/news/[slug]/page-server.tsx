import React from "react";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

const NewsPage: React.FC<NewsPageProps> = async ({ searchParams, params }) => {
  const { slug } = await params;
  const { lang } = await searchParams;

  return (
    <div>
      <h1>News slug: {slug} </h1>
      <h1>News lang: {lang} </h1>
    </div>
  );
};

export default NewsPage;
