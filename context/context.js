"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import {
  addProductsShareLink,
  createShareLink,
  deleteShareLink,
  removeProductFromShareLink,
  removeProductsShareLink,
  updateProductsShareLink,
} from "@/app/(dashboard)/lib/actions";

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
  const addToCart = async (product) => {
    const existingProduct = cart.find(
      (item) => item.category === product.category
    );

    if (!existingProduct) {
      // If no product from the same category exists, check if there's a ShareLink in the cart
      const shareLinkID = Cookies.get("shareLinkID");

      if (shareLinkID) {
        // If a ShareLink exists, add the product ID to its productIDS array
        await updateProductsShareLink(shareLinkID, product._id);
      } else {
        // If no ShareLink exists, create a new ShareLink for the product
        const newShareLinkID = await addProductsShareLink(product._id);
        Cookies.set("shareLinkID", newShareLinkID);
      }

      setCart([...cart, { ...product }]);
    }

    router.push("/build");
  };
  console.log(cart);
  // Function to remove a product from the cart
  const removeFromCart = async (productId) => {
    const existingProduct = cart.find((item) => item._id === productId);

    if (existingProduct) {
      // Check if there's a ShareLink in the cart
      const shareLinkID = Cookies.get("shareLinkID");

      if (shareLinkID) {
        // If a ShareLink exists, remove the product ID from its productIDS array
        await removeProductFromShareLink(shareLinkID, productId);
      }

      // Remove the product from the cart
      const updatedCart = cart.filter((product) => product._id !== productId);
      setCart(updatedCart);
    }
  };

  // Save the cart to cookies whenever it changes
  useEffect(() => {
    Cookies.set("shoppingCart", JSON.stringify(cart)); // Cookie expires in 7 days
  }, [cart]);
  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
