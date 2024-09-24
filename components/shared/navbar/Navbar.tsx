"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemePicker from "./ThemePicker";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import Navigator from "../navigator/Navigator";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200  z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1 flex-grow-0 ">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="askit logo"
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Ask <span className="text-primary-500">It</span>
        </p>
      </Link>

      <div>
        <Navigator />
      </div>

      <div className="flex-between gap-5  flex-grow-0">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <ThemePicker />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
