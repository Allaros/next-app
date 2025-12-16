"use client";

import Image from "next/image";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-3.5">
      <Image
        src={"/images/search-error.png"}
        alt="Error"
        width={400}
        height={400}
      ></Image>
      <h2 className="h2-bold">Something went wrong!</h2>
      <p className="text-2xl">{error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
