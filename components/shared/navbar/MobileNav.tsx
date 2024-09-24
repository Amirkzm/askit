"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { tempNavigatorItems } from "@/constants/tempConst.tsx";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {tempNavigatorItems.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
                className={`${isActive ? "invert-colors" : ""}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.title}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  //TODO
  // make sure to add sm:hidden
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors cursor-pointer "
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 border-none overflow-y-auto no-scrollbar"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow"
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            ASK <span className="text-primary-500">IT</span>
          </p>
        </Link>
        <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto h-full">
          <SheetClose asChild>
            <div>
              <NavContent />
              <SignedOut>
                <div className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link href="/sign-in">
                      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                        <span className="primary-text-gradient">Log In</span>
                      </Button>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/sign-up">
                      <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                        Sign Up
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SignedOut>
            </div>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
