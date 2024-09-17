import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="flex-center min-h-screen">{children}</main>;
};

export default layout;
