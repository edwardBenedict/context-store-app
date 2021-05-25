import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";

const Products = ({ product }) => {
  const { addCart } = useContext(StoreContext);

  return (
    <div className="card">
      <div className="card-image">
        <Link to={`/details/${product?.id}`}>
          <img src={product?.image} alt="" />
        </Link>
      </div>
      <div className="content">
        <h3>
          <Link to={`/details/${product?.id}`}>{product?.title}</Link>
        </h3>
        <span>${product?.price}</span>
        <p>{product?.description}</p>
        <button onClick={() => addCart(product?.id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
