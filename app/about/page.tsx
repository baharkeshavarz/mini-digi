import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Me"
};

const page = () => {
  console.log("About Server Side In Action as well");
  return (
    <div className="h-[600]">
      <h5> About US</h5>
      <div className="p-2 m-2">
        <Link href="/products" replace={true} className=" text-black text-2xl">
          Product List
        </Link>
      </div>
      <p>
        About to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        ofde Finibus Bonorum et Ma (The Extremes of Good and Evil) by Cicero,
        written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum, orem
        ipsum dolor sit amet. comes from a line in section 1.10.32.
      </p>
    </div>
  );
};

export default page;
