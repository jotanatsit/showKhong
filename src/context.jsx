import { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider = (props) => {
   const [role, setRole] = useState("");

   return (
      <Context.Provider value={{ role, setRole }}>
         {props.children}
      </Context.Provider>
   );
};

const useCustomContext = () => useContext(Context);

export { ContextProvider, useCustomContext };
