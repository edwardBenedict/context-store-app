import React, { useState, useEffect, createContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          item.count = 1;
        });
        return data;
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addCart = (id) => {
    const check = cart.every((item) => item.id !== id);

    if (check) {
      const cartData = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...cartData]);
    } else {
      alert("The product in your cart!");
    }
  };

  const reduction = (id) => {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        let newCount = item.count === 1 ? (item.count = 1) : (item.count -= 1);
        return { ...item, count: newCount };
      }
      return item;
    });

    setCart(newCart);
  };

  const increase = (id) => {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        let newCount = (item.count += 1);
        return { ...item, count: newCount };
      }
      return item;
    });

    setCart(newCart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      const result = cart.filter((item) => item.id !== id);
      setCart(result);
    }
  };

  const getTotal = () => {
    const totalRes = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(totalRes);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        addCart,
        total,
        cart,
        increase,
        reduction,
        removeProduct,
        getTotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
