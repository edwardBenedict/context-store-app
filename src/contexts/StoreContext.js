import React, { useState, useEffect, createContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const getDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("Something went wrong!", error);
      });
  };

  return (
    <StoreContext.Provider value={{ products, getDetails }}>
      {children}
    </StoreContext.Provider>
  );
};
