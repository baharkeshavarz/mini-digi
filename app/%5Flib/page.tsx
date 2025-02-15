import React from "react";

const page = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold pt-4">
        This Route is not available for browser if you write _lib in folder
        name!
      </p>
      <p className="text-xl font-bold pt-4">
        %5Flib is visible in the browser but _lib is not visible
      </p>
    </div>
  );
};

export default page;
