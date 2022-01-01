import React, { useContext, useEffect } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Link } from "react-router-dom";
import shopSvg from "../assets/shop.svg";
import RubbishIcon from "../assets/icons/Rubbish";

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
                <div className="bottom-wrapper">
                  <div>
                    <CustomButton
                      label="-"
                      width="40px"
                      color="red"
                      onClick={() => {
                        item?.count === 1
                          ? removeProduct(item?.id)
                          : reduction(item?.id);
                      }}
                    />
                    <span                  >
                      {item?.count}
                    </span>
                    <CustomButton
                      label="+"
                      width="40px"
                      color="green"
                      onClick={() => increase(item?.id)}
                    />
                  </div>
                  <RubbishIcon
                    size="30"
                    style={{ cursor: "pointer" }}
                    color="red"
                    onClick={() => removeProduct(item?.id)}
                  />
                </div>
              </div>
              {/* <div className="delete" onClick={() => removeProduct(item?.id)}>
                <CloseSvg fill="#ac0d0d" stroke="wheat" className="close" />
              </div> */}
            </div>
          ))
        ) : (
          <div
          className="empty-cart"
        
          >
            <div className="empty-cart">
              <p>Your cart is empty!</p>
              <Link to={`/`}>
                <CustomButton label="Shop Now" />
              </Link>
            </div>
            <img
              src={shopSvg}
              alt="goshop"
              width="100"
            />
          </div>
        )}
        <div className="total">
          {/* <Link to="/checkout">Payment</Link> */}
          <Link to="/checkout">
            <CustomButton label="Checkout" primary color="white" />
          </Link>
          <h3>Total : ${Math.round(total * 100) / 100}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
