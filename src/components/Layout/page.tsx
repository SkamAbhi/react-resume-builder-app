import React, { ReactNode } from "react";
import MobileHeader from "../MobileHeader/page";
import Sidebar from "../Sidebar/page";

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
        <>
          <MobileHeader />
          <Sidebar />
          <main>
            {children}
          </main>
        </>
    );
  };
  
export default Layout;
