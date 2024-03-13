// CheckboxProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CheckboxContextProps {
  selectedLinks: string[];
  updateSelectedLinks: (links: string[]) => void;
  backLinks: string[];
  updateBackLinks: (links: string[]) => void;
}

const CheckboxContext = createContext<CheckboxContextProps | undefined>(undefined);

export const CheckboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [backLinks, setBackLinks] = useState<string[]>([]);

  const updateSelectedLinks = (links: string[]) => {
    setSelectedLinks(links);
  };

  const updateBackLinks = (links: string[]) => {
    setBackLinks(links);
  };
  return (
    <CheckboxContext.Provider value={{ selectedLinks, updateSelectedLinks, backLinks, updateBackLinks }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckboxContext must be used within a CheckboxProvider');
  }
  return context;
};
