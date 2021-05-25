import React, { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Link } from "react-router-dom";

import "../components/Details.css";
import "./Cart.css";

const Cart = () => {
  const { cart, increase, reduction, removeProduct, total, getTotal } =
    useContext(StoreContext);

  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    <div>
      <h2 className="cart-header">Cart</h2>
      {cart.length !== 0 ? (
        cart?.map((item, index) => (
          <div className="details cart" key={index}>
            <img src={item?.image} alt={item?.title} className="cart-image" />
            <div className="box">
              <div className="row">
                <h2>{item?.title}</h2>
                <span>${item?.price}</span>
              </div>
              <p>{item?.category}</p>
              <p>{item?.description}</p>
              <div className="amount">
                <button className="count" onClick={() => reduction(item?.id)}>
                  -
                </button>
                <span>{item?.count}</span>
                <button className="count" onClick={() => increase(item?.id)}>
                  +
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item?.id)}>
              X
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <p>Nothing Found!</p>
          <Link to={`/`}>Go Shop</Link>
        </div>
      )}
      <div className="total">
        <Link to="/checkout">Payment</Link>
        <h3>Total : ${total}</h3>
      </div>
    </div>
  );
};

export default Cart;
