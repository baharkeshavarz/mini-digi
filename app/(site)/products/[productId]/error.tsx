"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  /* 
    Reload function ensures that the refresh is deferred until the next render phase, allowing react to handle any pending state updates before proceeding.
  */
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="text-center text-red-900 p-2">
      <h6>{error.message}</h6>
      <button className="bg-red-400 rounded-full p-2" onClick={() => reload()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
