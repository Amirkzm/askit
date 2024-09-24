import HeroSection from "@/components/shared/HeroSection";
import { Navbar } from "@/components/shared/navbar";
import Navigator from "@/components/shared/navigator/Navigator";
import RightSidebar from "@/components/shared/rightSidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <HeroSection />
      <div className="flex-center gap-8 mx-20">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl transition-all">
            {children}
          </div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
