import { useLocalStorage } from "@uidotdev/usehooks";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);
    if (found) {
      const updatedAmount = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((i) =>
        i.id === updatedAmount.id ? updatedAmount : i
      );
      setBasket(newBasket);
      toast.success(
        `product quantity increased. (piece: ${updatedAmount.amount})`
      );
    } else {
      setBasket(basket.concat({ ...newProduct, amount: 1 }));
      //     setBasket([...basket, newProduct]);
      // localStorage.setItem("basket", JSON.stringify(basket.concat(newProduct)));  -- usestate(localStorage.basket)
      toast.success("The product added.");
    }
  };

  const decreaseToBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const uptated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === uptated.id ? uptated : i));

      setBasket(newBasket);
      toast.warning("product quantity decrease.");
    } else {
      removeToBasket(delete_id);
      toast.warning("The product deleted.");
    }
  };
  const removeToBasket = (delete_id) => {
    const filtred = basket.filter((i) => i.id !== delete_id);
    setBasket(filtred);
    toast.warning("The product deleted.");
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeToBasket, decreaseToBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
