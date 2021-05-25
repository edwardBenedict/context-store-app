import React from "react";
import { Route } from "react-router-dom";
// import Product from "../components/Product";
import Details from "../components/Details";
import Products from "../components/Products";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Checkout from "../pages/Checkout";

const Sections = () => {
  return (
    <section>
      <div className="inner-section">
        <Route path="/" component={Products} exact />
        {/* <Route path="/product" component={Details} exact /> */}
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </section>
  );
};

export default Sections;
