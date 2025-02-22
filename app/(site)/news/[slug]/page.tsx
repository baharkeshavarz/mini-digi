"use client";

import { redirect, useRouter } from "next/navigation";
import React, { use } from "react";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang: string }>;
};

const NewsPage: React.FC<NewsPageProps> = ({ searchParams, params }) => {
  const { slug } = use(params);
  const { lang } = use(searchParams);
  // const router = useRouter();

  const redirectMe = () => {
    // router.push("/about");
    redirect("/about");
  };

  return (
    <div>
      <h1>News slug is: {slug} </h1>
      <h1>News lang : {lang} </h1>
      <button type="button" className="bg-red-600 p-2" onClick={redirectMe}>
        REDIRECT
      </button>
    </div>
  );
};

export default NewsPage;
