"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

// type Providers = {
//   google: {
//     callbackUrl: string;
//     id: string;
//     name: string;
//     signinUrl: string;
//     type: string;
//   };
// };

const Navbar = () => {
  const { data: session } = useSession();
  // const [providers, setProviders] = useState<Providers | null>();
  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     console.log(res);
  //     setProviders(res);
  //   })();
  // }, []);
  return (
    <nav className="bg-white text-black w-full py-2 px-48 flex justify-between items-center border-b mb-5 border-gray-300">
      <div className="flex flex-row items-center gap-5">
        <div>
          {" "}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={60} height={50} />
          </Link>
        </div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <Link
              href="/create-post"
              className="mr-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-blue-700 bg-white border border-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700 hover:text-white"
            >
              Create Post
            </Link>
            <button
              type="button"
              className="inline-flex items-center py-2.5 text-sm font-medium text-center text-blue-700 bg-white  rounded-lg hover:text-blue-900 hover:underline"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="your avatar"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    console.log(provider.id);
                    signIn(provider.id);
                  }}
                >
                  Sign in
                </button>
              ))} */}

            <button
              type="button"
              onClick={() => {
                signIn("google");
              }}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
