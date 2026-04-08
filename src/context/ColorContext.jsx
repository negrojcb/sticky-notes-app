import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [defaultColor, setDefaultColor] = useState("#fff59d");

  return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
