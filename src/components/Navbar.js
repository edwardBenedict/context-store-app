import React, { useState, useContext } from "react";
import menuSvg from "../assets/menu.svg";
import cancelSvg from "../assets/cancel.svg";
import cartSvg from "../assets/cart.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "../contexts/StoreContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(StoreContext);

  const menuToggle = () => {
    console.log("menuToggle");
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={menuSvg} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Store</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={cancelSvg} alt="" width="20" />
          </li>
        </ul>
        <Link to="/cart">
          <div className="nav-cart">
            <span>{cart?.length}</span>
            <img src={cartSvg} alt="" width="20" />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
