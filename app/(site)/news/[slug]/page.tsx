"use client";

import React, { use } from "react";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang: string }>;
};

const NewsPage: React.FC<NewsPageProps> = ({ searchParams, params }) => {
  const { slug } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h1>News slug is: {slug} </h1>
      <h1>News lang : {lang} </h1>
    </div>
  );
};

export default NewsPage;
