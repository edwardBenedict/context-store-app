import React from "react";
import { Route } from "react-router-dom";
// import Product from "../components/Product";
import Details from "../components/Details";
import Products from "../components/Products";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Navbar from "../components/Navbar";

const Sections = () => {
  return (
    

    <section>
        <Navbar/>
      <div className="inner-section">
        <Route path="/" component={Products} exact />
        {/* <Route path="/product" component={Details} exact /> */}
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </section>
   
  );
};

export default Sections;
