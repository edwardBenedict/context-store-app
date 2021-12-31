import React, { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Link } from "react-router-dom";
import shopSvg from "../assets/shop.svg";
import { ReactComponent as CloseSvg } from "../assets/close.svg";

import "../components/Details.css";
import "./Cart.css";
import CustomButton from "../components/button/Button";

const Cart = () => {
  const { cart, increase, reduction, removeProduct, total, getTotal } =
    useContext(StoreContext);

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="cart-wrapper">
      <div className="cart">
        <h1 className="cart-header">Cart</h1>
        {cart.length !== 0 ? (
          cart?.map((item, index) => (
            <div className="details cart" key={index}>
              <img src={item?.image} alt={item?.title} className="cart-image" />
              <div className="box">
                <div className="row">
                  <h2>{item?.title}</h2>
                  <span>${item?.price}</span>
                </div>
                <p className="category">{item?.category}</p>
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
                <CloseSvg fill="#ac0d0d" stroke="wheat" className="close" />
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="empty-cart">
              <p>Your cart is empty!</p>
              <Link
                to={`/`}
                style={{
                  textDecoration: "none",
                  display: "block",
                  width: "200px",
                  padding: "10px",
                  backgroundColor: "wheat",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                Go Shopping
              </Link>
            </div>
            <img
              src={shopSvg}
              alt="goshop"
              width="100"
              style={{ alignSelf: "center", margin: "10px" }}
            />
          </div>
        )}
        <div className="total">
          {/* <Link to="/checkout">Payment</Link> */}
          <Link to="/checkout">
            <CustomButton label="Checkout" primary />
          </Link>
          <h3>Total : ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
