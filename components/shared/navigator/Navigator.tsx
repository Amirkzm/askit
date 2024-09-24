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
        className="primary-gradient text-light-900 absolute bottom-0 top-0 transition-all duration-300 bg-gray-200/30 rounded-xl -z-1"
        style={{ left: activeTabLeft, width: activeTabWidth }}
      ></div>
      {tempNavigatorItems.map((item, index) => {
        return (
          <Link
            href={item.route}
            key={item.title}
            className="transition-all relative z-10 text-dark300_light700"
            onClick={() => setActiveTabIndex(index)}
            ref={(el: HTMLAnchorElement | null) => {
              tabsRef.current[index] = el;
            }}
          >
            <NavigatorItem
              key={item.icon}
              icon={item.icon}
              title={item.title}
              isActive={activeTabIndex === index}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Navigator;
