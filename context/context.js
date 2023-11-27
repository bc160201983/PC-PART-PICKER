"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let cart = Cookies.get("shoppingCart");
  if (cart) {
    return (cart = JSON.parse(Cookies.get("shoppingCart")));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const router = useRouter();
  // Initialize the cart state as an empty array
  const [cart, setCart] = useState(getLocalStorage());

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(
      (item) => item.category === product.category
    );

    if (!existingProduct) {
      // If no product from the same category exists, add it to the cart
      setCart([...cart, { ...product }]);
    }
    router.push("/build");
  };
  console.log(cart);

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product._id !== productId);
    setCart(updatedCart);
  };

  // Save the cart to cookies whenever it changes
  useEffect(() => {
    Cookies.set("shoppingCart", JSON.stringify(cart)); // Cookie expires in 7 days
  }, [cart]);
  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
