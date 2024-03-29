import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
