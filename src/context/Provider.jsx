import { createContext } from "react";
import ProductProvider from "./ProductProvider";

export const Context = createContext();

const Provider = ({ children }) => {

  return (
    <Context.Provider value={{}}>
      <ProductProvider>
        {children}
      </ProductProvider>
    </Context.Provider>
  );
};

export default Provider