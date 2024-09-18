import React, { useEffect } from "react";
import Image from "next/image";

type NavigatorItemProps = {
  icon: string;
  title: string;
  isActive?: boolean;
};

const NavigatorItem: React.FC<NavigatorItemProps> = ({
  icon,
  title,
  isActive,
}) => {
  useEffect(() => {
    if (isActive === null) {
      return;
    }

    //   const setTabPosition = () => {
    //     const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
    //     setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    //     setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    //   };

    //   setTabPosition();
  }, [isActive]);
  return (
    <div
      className={`
       flex items-center justify-start gap-4 bg-transparent p-4 transition-all duration-300 ease-in-out rounded-lg`}
      key={icon}
    >
      <Image src={icon} alt={icon} width={20} height={20} />
      <p className={isActive ? "text-primary" : "text-dark"}>{title}</p>
    </div>
  );
};

export default NavigatorItem;
