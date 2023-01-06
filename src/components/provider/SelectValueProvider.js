import React, { useContext, useState } from "react";

const selectValueContext = React.createContext();
const selectValueContextDispather = React.createContext();
const SelectValueProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("all");
  return (
    <selectValueContext.Provider value={selectValue}>
      <selectValueContextDispather.Provider value={setSelectValue}>
        {children}
      </selectValueContextDispather.Provider>
    </selectValueContext.Provider>
  );
};

export default SelectValueProvider;
export const useSelectValue = () => useContext(selectValueContext);
export const useSelectValueActions = () =>
  useContext(selectValueContextDispather);
