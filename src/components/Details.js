import React, { useState, useEffect, useContext } from "react";
import { getDetails } from "../functions/functions";
import { StoreContext } from "../contexts/StoreContext";
import "./Details.css";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Details = ({ match }) => {
  const [product, setProduct] = useState();
  const { addCart } = useContext(StoreContext);

  useEffect(() => {
    setProduct();
    match.params.id &&
      getDetails(`${BASE_URL}products/`, match.params.id).then((res) =>
        setProduct(res.data)
      );
  }, [match.params.id]);

  return (
    <div>
      <h1 className="details-header">Product Details</h1>
      {product === undefined ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : product ? (
        <div className="details">
          <img src={product?.image} alt={product?.title} width="300" />
          <div className="box">
            <div className="row">
              <h2>{product?.title}</h2>
              <span>${product?.price}</span>
            </div>

            <p className="category">{product?.category}</p>
            <p>{product?.description}</p>
            <Link
              to="/cart"
              className="cart"
              onClick={() => addCart(product.id)}
            >
              Add to cart
            </Link>
          </div>
        </div>
      ) : (
        <h3 style={{ textAlign: "center" }}>Nothing Found!</h3>
      )}
    </div>
  );
};

export default Details;
