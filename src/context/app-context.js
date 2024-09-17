import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();



export const AppProvider = ({ children }) => {
  return (
      {children}
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
