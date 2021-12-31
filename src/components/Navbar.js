import React, { useState, useContext } from "react";
import menuSvg from "../assets/menu.svg";
import cancelSvg from "../assets/cancel.svg";
import cwLogo from "../assets/clarusway.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "../contexts/StoreContext";
import Cart from "../assets/icons/Cart";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(StoreContext);

  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header >
      <div className="menu" onClick={menuToggle}>
        <img src={menuSvg} alt="" width="20" />
      </div>
      <div className="logo">
        <Link to="/"><img src={cwLogo} alt="" width="40" /> clarus Shop</Link>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/" onClick={menuToggle}>Shop</Link>
          </li>
          <li>
            <Link to="/about" onClick={menuToggle}>About</Link>
          </li>
          <li>
            <Link to="/login" onClick={menuToggle}>Login</Link>
          </li>
          <li>
            <Link to="/register" onClick={menuToggle}>Register</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={cancelSvg} alt="" width="20" />
          </li>
        </ul>
        <Link to="/cart">
          <div className="nav-cart">
            <span>{cart?.length}</span>
            <Cart color="white" />
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
