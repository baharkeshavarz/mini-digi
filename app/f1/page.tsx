import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <h2>F1 Page</h2>
      <Link href="/f1/f2">Go to F2 </Link>
      <br />
      <Link href="/f3">Go to F3 </Link>
    </div>
  );
};

export default F1;
