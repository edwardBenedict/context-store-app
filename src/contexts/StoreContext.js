import React, { useState, useEffect, createContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // const getDetails = (id) => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.log("Something went wrong!", error);
  //     });
  // };

  const addCart = (id) => {
    const cartData = products.filter((product) => {
      return product.id === id;
    });
    setCart([...cart, ...cartData]);
  };

  return (
    <StoreContext.Provider value={{ products, addCart, cart }}>
      {children}
    </StoreContext.Provider>
  );
};
