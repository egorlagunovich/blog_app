"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signOut, signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

type Providers = {
  google: {
    callbackUrl: string;
    id: string;
    name: string;
    signinUrl: string;
    type: string;
  };
};

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
    <nav className="bg-white text-black w-full py-2 px-16 flex justify-between items-center border-b mb-5 border-gray-300">
      <div className="flex flex-row items-center gap-5">
        <div>
          {" "}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={60} height={50} />
          </Link>
        </div>
        <form className="hidden sm:block  ">
          <input
            type="text"
            className="border h-[50px] rounded-xl p-3 text-lg"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" className="" onClick={() => signOut()}>
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
            <Link href="/create-post" className="mr-2">Create Post</Link>
            <button
              type="button"
              onClick={() => {
                signIn();
              }}
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
