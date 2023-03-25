import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <SidebarContext.Provider value={{ isUpdate, setIsUpdate }}>
      {children}
    </SidebarContext.Provider>
  );
};
