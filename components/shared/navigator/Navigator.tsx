"use client";
import { tempNavigatorItems } from "@/constants/tempConst";
import React, { useEffect, useRef, useState } from "react";
import NavigatorItem from "./NavigatorItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigator = () => {
  const pathname = usePathname();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabLeft, setActiveTabLeft] = useState(0);
  const tabsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setActiveTabLeft(currentTab?.offsetLeft ?? 0);
      setActiveTabWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flex-between transition-all relative">
      <div
        className="primary-gradient text-light-900 absolute bottom-0 top-0 transition-all duration-300 bg-gray-200/30 rounded-3xl -z-1"
        style={{ left: activeTabLeft, width: activeTabWidth }}
      ></div>
      {tempNavigatorItems.map((item, index) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            href={item.route}
            key={item.title}
            className="transition-all relative z-10"
            onClick={() => setActiveTabIndex(index)}
            ref={(el: HTMLAnchorElement | null) => {
              tabsRef.current[index] = el;
            }}
          >
            <NavigatorItem
              key={item.icon}
              icon={item.icon}
              title={item.title}
              isActive={isActive}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Navigator;

// let allTabs = [
//   {
//     id: "home",
//     name: "Home",
//   },
//   {
//     id: "blog",
//     name: "Blog",
//   },
//   {
//     id: "projects",
//     name: "Projects",
//   },
//   {
//     id: "arts",
//     name: "Arts",
//   },
// ];

// export const Navigator = () => {
//   const tabsRef = useRef<(HTMLElement | null)[]>([]);
//   const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
//   const [activeTabWidth, setActiveTabWidth] = useState(0);
//   const [activeTabLeft, setActiveTabLeft] = useState(0);

//   useEffect(() => {
//     if (activeTabIndex === null) {
//       return;
//     }

//     const setTabPosition = () => {
//       const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
//       setActiveTabLeft(currentTab?.offsetLeft ?? 0);
//       setActiveTabWidth(currentTab?.clientWidth ?? 0);
//     };

//     setTabPosition();
//   }, [activeTabIndex]);

//   return (
//     <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
//       <span
//         className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
//         style={{ left: activeTabLeft, width: activeTabWidth }}
//       >
//         <span className="h-full w-full rounded-3xl bg-gray-200/30" />
//       </span>
//       {allTabs.map((tab, index) => {
//         const isActive = activeTabIndex === index;

//         return (
//           <button
//             key={index}
//             ref={(el) => (tabsRef.current[index] = el)}
//             className={`${
//               isActive ? `` : `hover:text-neutral-300`
//             } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
//             onClick={() => setActiveTabIndex(index)}
//           >
//             {tab.name}
//           </button>
//         );
//       })}
//     </div>
//   );
// };
