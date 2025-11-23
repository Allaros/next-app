"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = [
  // { name: "React", value: "react" },
  // { name: "javascript", value: "javascript" },
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recomended" },
];

const HomeFilter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter");

  const handleTypeClick = (filter: string) => {
    const currentBrowserSearchString = window.location.search;

    const currentBrowserSearchParams = new URLSearchParams(
      currentBrowserSearchString
    );
    const activeFilterInBrowser = currentBrowserSearchParams.get("filter");

    let newUrl = "";

    if (filter === activeFilterInBrowser) {
      newUrl = removeKeysFromQuery({
        params: currentBrowserSearchString,
        keysToRemove: ["filter"],
      });
    } else {
      newUrl = formUrlQuery({
        params: currentBrowserSearchString,
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((filter) => (
        <Button
          className={cn(
            `body-medium rounded-lg border-none px-6 py-3 capitalize shadow-none`,
            currentFilter === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 dark:text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:hover:bg-dark-200"
          )}
          key={filter.name}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
