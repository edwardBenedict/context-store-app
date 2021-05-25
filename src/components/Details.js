import React, { useState, useEffect } from "react";
import { getDetails } from "../functions/functions";
import "./Details.css";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Details = ({ match }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    match.params.id &&
      getDetails(`${BASE_URL}products/`, match.params.id).then((res) =>
        setProduct(res.data)
      );
  }, [match.params.id]);

  return (
    <div>
      <h1 className="details-header">Product Details</h1>
      {product ? (
        <div className="details">
          <img src={product?.image} alt={product?.title} width="300" />
          <div className="box">
            <div className="row">
              <h2>{product?.title}</h2>
              <span>${product?.price}</span>
            </div>

            <p>{product?.category}</p>
            <p>{product?.description}</p>
            <Link
              to="/cart"
              className="cart"
              // onClick={() => addCart(item._id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ) : (
        <p>Nothing Found!</p>
      )}
    </div>
  );
};

export default Details;
