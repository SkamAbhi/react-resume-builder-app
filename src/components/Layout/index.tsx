import React, { ReactNode } from "react";
import Navigation from "../Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation/>
      <main>{children}</main>
    </>
  );
};

export default Layout;
