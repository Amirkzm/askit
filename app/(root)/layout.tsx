import HeroSection from "@/components/shared/HeroSection";
import { Navbar } from "@/components/shared/navbar";
import RightSidebar from "@/components/shared/rightSidebar/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <HeroSection />
      <div className="flex-center gap-20 mx-5">
        <section className="flex flex-col min-h-screen flex-[6] self-start p-6 pt-36  mx-auto ml-20">
          {children}
        </section>
        <div className="self-start relative top-28 p-6 hidden lg:block flex-[1]">
          <RightSidebar />
        </div>
      </div>
      Toaster
    </main>
  );
};

export default Layout;
