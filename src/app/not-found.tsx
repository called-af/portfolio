"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4">
      <div className="">
        <h1 className="text-center text-7xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8 text-center dark:text-neutral-400 text-neutral-600">There's Nothing Here</p>
        <Link href="/">
          <span className="px-6 py-3 dark:bg-neutral-800 bg-neutral-200 dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-md transition-colors duration-300 inline-block">
            Go Back Home
          </span>
        </Link>
      </div>
    </div>
  );
}
