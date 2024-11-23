import React, { createContext, useState, useContext } from "react";

import Region from "../philippine-addresses-main/region.json";
import Province from "../philippine-addresses-main/province.json";
import City from "../philippine-addresses-main/city.json";
import Barangay from "../philippine-addresses-main/barangay.json";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(1);
  const regionDict = Region;
  const provinceDict = Province;
  const cityDict = City;
  const barangayDict = Barangay;

  return (
    <AppContext.Provider value={{ pageCount, setPageCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
