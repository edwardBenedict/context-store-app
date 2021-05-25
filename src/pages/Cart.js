import React, { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Link } from "react-router-dom";

import "../components/Details.css";

const Cart = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div>
      <h2 className="cart-header">Cart</h2>
      {cart.length !== 0 ? (
        cart?.map((item, index) => (
          <div className="details" key={index}>
            <img src={item?.image} alt={item?.title} className="cart-image" />
            <div className="box">
              <div className="row">
                <h2>{item?.title}</h2>
                <span>${item?.price}</span>
              </div>
              <p>{item?.category}</p>
              <p>{item?.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <p>Nothing Found!</p>
          <Link to={`/`}>Go Shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
