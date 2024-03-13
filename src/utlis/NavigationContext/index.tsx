import React, { createContext, useContext, useState, useCallback } from "react";

const NavigationContext = createContext({ activeSection: 0, handleNextClick: () => {} });

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationProvider");
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
    const sections = [
        { label: "Personal", path: "/personal", icon: "/personal.svg" },
        { label: "Education", path: "/education", icon: "/education.svg" },
        { label: "Work Experience", path: "/work-exp", icon: "/work.svg" },
        { label: "Skills", path: "/skills", icon: "/skills.svg" },
        { label: "Summary", path: "/summary", icon: "/summary.svg" },
        { label: "Finalize", path: "/finalize", icon: "/finalize.svg" },
      ];
    
  const [activeSection, setActiveSection] = useState(0);

  const handleNextClick = useCallback(() => {
    setActiveSection((prevActiveSection) => (prevActiveSection + 1) % sections.length);
  }, []);

  const value = {
    activeSection,
    handleNextClick,
  };

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};
