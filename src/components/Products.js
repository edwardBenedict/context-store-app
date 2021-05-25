import React, { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(StoreContext);

  return (
    <div id="product">
      {products ? (
        products?.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Products;
