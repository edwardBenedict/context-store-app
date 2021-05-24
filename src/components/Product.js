import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/details/${product?.id}`}>
        <img src={product?.image} alt="" />
      </Link>
      <div className="content">
        <h3>
          <Link to={`/details/${product?.id}`}>{product?.title}</Link>
        </h3>
        <span>${product?.price}</span>
        <p>{product?.description}</p>
        <button
        // onClick={() => addCart(product._id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
